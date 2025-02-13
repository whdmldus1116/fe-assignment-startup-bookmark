import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../utils/fetchUserData';

const BookmarkScreen = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  const [bookmarkedStartups, setBookmarkedStartups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const name = fetchUserData();
    setUsername(name);

    if (!localStorage.getItem('token')) {
      alert('로그인 해주세요!');
      navigate('/login');
      return;
    }

    const fetchBookmarkedStartups = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/startups/bookmark', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { companies: data } = response.data;
        setBookmarkedStartups(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookmarked startups:', error);
        setLoading(false);
      }
    };

    fetchBookmarkedStartups();
  }, []);

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

  return (
    <>
      <Header isMobile={isMobile} isLoggedIn={true} currentPath="/bookMark" username={username} />
      <PageContainer>
        {!isMobile && <Title>북마크</Title>}
        <CardGrid>
          {bookmarkedStartups.map((startup: any) => (
            <Card
              key={startup.id}
              id={startup.id}
              title={startup.title}
              tag={startup.tag}
              description={startup.description}
              thumbnailImageUrl={startup.thumbnailImageUrl}
              thumbnailFallbackColor={startup.thumbnailFallbackColor}
              bookmark={true}
              onBookmark={() => handleToggleBookmark(startup.id)}
            />
          ))}
        </CardGrid>
      </PageContainer>
    </>
  );
};

export default BookmarkScreen;
