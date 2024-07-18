// src/components/card/styles.ts

import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 295px;
  height: 368px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: white;
`;

export const Image = styled.div<{ fallbackColor: string }>`
  width: 295px;
  height: 190px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.fallbackColor};
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const Tag = styled.span`
  font-size: 12px;
  color: var(--card-tag-color);
  background-color: white;
  padding: 5px 6px;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--card-content-color);
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const BookmarkIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  object-fit: contain;
`;
