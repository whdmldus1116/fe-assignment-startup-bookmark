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
import bookMarkNone from '../../assets/bookMarkNone.png';
import bookMark from '../../assets/bookMark.png';

type Props = {
  id: string;
  title: string;
  tag: string;
  description: string;
  thumbnailImageUrl: string;
  thumbnailFallbackColor: string;
  bookmark: boolean;
  onBookmark: () => void;
};

const Card = ({
  id,
  title,
  tag,
  description,
  thumbnailImageUrl,
  thumbnailFallbackColor,
  bookmark,
  onBookmark,
}: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const handleBookmarkClick = async () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(); // 부모 컴포넌트로 북마크 이벤트 전달
  };

  return (
    <CardWrapper>
      <Tag>{tag}</Tag>
      <Image src={thumbnailImageUrl} alt="Background" fallbackColor={thumbnailFallbackColor} />
      <ContentWrapper>
        <Title>{title}</Title>
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
