import React, { useEffect, useState } from 'react';
import {
  CardWrapper,
  ImageWrapper,
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
  title,
  tag,
  description,
  thumbnailImageUrl,
  thumbnailFallbackColor,
  bookmark,
  onBookmark,
}: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  useEffect(() => {
    setIsBookmarked(bookmark);
  }, [bookmark]);

  const handleBookmarkClick = async () => {
    setIsBookmarked(!isBookmarked);
    onBookmark();
  };

  const updatedThumbnailImageUrl = thumbnailImageUrl.replace('i.picsum.photos', 'picsum.photos');

  return (
    <CardWrapper>
      <Tag>{tag}</Tag>
      <ImageWrapper fallbackColor={thumbnailFallbackColor}>
        <Image src={updatedThumbnailImageUrl} alt="Background" />
      </ImageWrapper>
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
