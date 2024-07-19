import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from 'utils/fetchUserData';

const StartupScreen = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  
  const [startups, setStartups] = useState<any[]>([]);
  const [bookmarkedStartups, setBookmarkedStartups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { ref, inView } = useInView();

  useEffect(() => {
    const name = fetchUserData();
    setUsername(name);

    if (!localStorage.getItem('token')) {
      alert('로그인 해주세요!');
      navigate('/login');
      return;
    }
  }, []);

  const fetchStartups = useCallback(async () => {
    if (!hasMore) return;

    try {
      const token = localStorage.getItem('token');
      const [startupResponse, bookmarkResponse] = await Promise.all([
        axios.get('/api/startups', {
          params: {
            offset: page * 12,
            limit: 12,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get('/api/startups/bookmark', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const { startups: startupData } = startupResponse.data;
      const { companies: bookmarkData } = bookmarkResponse.data;

      setStartups((prev) => [...prev, ...startupData]);
      setBookmarkedStartups(bookmarkData);
      setLoading(false);

      if (startupData.length < 12) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching startups or bookmarks:', error);
      setLoading(false);
    }
  }, [page, hasMore]);

  useEffect(() => {
    fetchStartups();
  }, [page, fetchStartups]);

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore]);

  const handleToggleBookmark = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/startups/bookmark',
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const response = await axios.get('/api/startups/bookmark', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { companies: data } = response.data;
      setBookmarkedStartups(data);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const bookmarkedIds = new Set(bookmarkedStartups.map((startup) => startup.id));

  return (
    <>
      <Header
        isMobile={isMobile}
        isLoggedIn={true}
        currentPath="/startupList"
        username={username}
      />

      <PageContainer>
        {!isMobile && <Title>스타트업 리스트</Title>}
        <CardGrid>
          {startups.map((startup: any) => (
            <Card
              key={startup.id}
              id={startup.id}
              title={startup.title}
              tag={startup.tag}
              description={startup.description}
              thumbnailImageUrl={startup.thumbnailImageUrl}
              thumbnailFallbackColor={startup.thumbnailFallbackColor}
              bookmark={bookmarkedIds.has(startup.id)}
              onBookmark={() => handleToggleBookmark(startup.id)}
            />
          ))}
        </CardGrid>
        <div ref={ref} />
      </PageContainer>
    </>
  );
};

export default StartupScreen;
