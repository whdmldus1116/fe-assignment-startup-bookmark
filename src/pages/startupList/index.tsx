import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const StartupScreen = () => {
  const [startups, setStartups] = useState<any[]>([]);
  const [bookmarkedStartups, setBookmarkedStartups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchStartups = async () => {
      try {
        const token = localStorage.getItem('token');
        const [startupResponse, bookmarkResponse] = await Promise.all([
          axios.get('/api/startups', {
            params: {
              offset: 0,
              limit: 12,
            },
            headers: {
              Authorization: `Bearer ${token}`, // 인증 헤더 추가
            },
          }),
          axios.get('/api/startups/bookmark', {
            headers: {
              Authorization: `Bearer ${token}`, // 인증 헤더 추가
            },
          }),
        ]);

        const { startups: startupData } = startupResponse.data;
        const { companies: bookmarkData } = bookmarkResponse.data;

        setStartups(startupData);
        setBookmarkedStartups(bookmarkData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching startups or bookmarks:', error);
        setLoading(false);
      }
    };

    fetchUserData();
    fetchStartups();
  }, []);

  const handleToggleBookmark = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/startups/bookmark',
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 헤더 추가
          },
        },
      );

      const response = await axios.get('/api/startups/bookmark', {
        headers: {
          Authorization: `Bearer ${token}`, // 인증 헤더 추가
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
      <Header isLoggedIn={true} currentPath="/startupList" username={username} />

      <PageContainer>
        <Title>스타트업 리스트</Title>
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
      </PageContainer>
    </>
  );
};

export default StartupScreen;
