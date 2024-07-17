import React from 'react';
import { StyledLink, TextWrapper } from './styles';

import { useNavigate } from 'react-router-dom';

type Props = {
  text: string;
  textLine: boolean;
};

const LineText = ({ text, textLine }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (textLine) {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

  return (
    <>
      {textLine ? (
        <StyledLink to="/login">{text}</StyledLink>
      ) : (
        <TextWrapper textLine={textLine} onClick={handleClick} children={text} />
      )}
    </>
  );
};

export default LineText;
