import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return <>{isMobile && children}</>;
};

const PC = ({ children }: { children: React.ReactNode }) => {
  const isPc = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return <>{isPc && children}</>;
};

export { Mobile, PC };
