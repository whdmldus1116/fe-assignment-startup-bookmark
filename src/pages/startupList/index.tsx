import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const StartupList = () => {
  const [startups, setStartups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/startups', {
          params: {
            offset: 0,
            limit: 12,
          },
          headers: {
            Authorization: `Bearer ${token}`, // 인증 헤더 추가
          },
        });

        const { startups: data } = response.data;
        setStartups(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching startups:', error);
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const handleBookmark = async (id: string) => {
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
      // 북마크 추가 성공 시 여기서 추가적인 처리를 할 수 있음
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  return (
    <>
      <Header isLoggedIn={true} currentPath="/" username={'꿍꿍꿍'} />
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
              bookmark={false} // 현재는 북마크 표시가 안되도록 false로 설정
              onBookmark={() => handleBookmark(startup.id)}
            />
          ))}
        </CardGrid>
      </PageContainer>
    </>
  );
};

export default StartupList;
