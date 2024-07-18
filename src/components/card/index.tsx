import React, { useState } from 'react';
import {
  CardWrapper,
  Image,
  ContentWrapper,
  Tag,
  Title,
  Description,
  BookmarkIcon,
} from './styles';
import backgroundImage from '../../assets/background.png';
import bookMarkNone from '../../assets/bookMarkNone.png';
import bookMark from '../../assets/bookMark.png';

type Props = {
  id: string;
  tag?: string;
  description?: string;
  bookmark: boolean;
};

const Card = ({
  id,
  tag = '생산성',
  description = '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플...',
  bookmark,
}: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <CardWrapper>
      <Tag>{tag}</Tag>
      <Image src={backgroundImage} alt="Background" />
      <ContentWrapper>
        <Title>{id}파트너스</Title>
        <Description>{description}</Description>
        <BookmarkIcon
          src={isBookmarked ? bookMark : bookMarkNone}
          alt="Bookmark"
          onClick={handleBookmarkClick}
          style={{ cursor: 'pointer' }}
        />
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
