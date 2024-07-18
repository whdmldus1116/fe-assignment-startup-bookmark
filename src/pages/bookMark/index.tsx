import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const BookmarkPage = () => {
  const [bookmarkedStartups, setBookmarkedStartups] = useState<any[]>([]); // 초기 상태를 빈 배열로 설정
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookmarkedStartups = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/startups/bookmark', {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 헤더 추가
          },
        });

        const { startups: data } = response.data;
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
      const isBookmarked = bookmarkedStartups.some((startup) => startup.id === id);

      // 서버에 항상 POST 요청을 보냄 (중복 북마크 방지)
      await axios.post(
        '/api/startups/bookmark',
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 헤더 추가
          },
        },
      );

      if (!isBookmarked) {
        // 북마크되지 않은 경우, 로컬 상태 업데이트
        setBookmarkedStartups([...bookmarkedStartups, { id }]);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  // 로딩 중일 때의 UI 처리
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header isLoggedIn={true} currentPath="/bookmark" username={'꿍꿍꿍'} />
      <PageContainer>
        <Title>북마크한 스타트업 리스트</Title>
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
              bookmark={true} // 북마크 표시는 true로 설정
              onBookmark={() => handleToggleBookmark(startup.id)} // 북마크 토글 처리
            />
          ))}
        </CardGrid>
      </PageContainer>
    </>
  );
};

export default BookmarkPage;
