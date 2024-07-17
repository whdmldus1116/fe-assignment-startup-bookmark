import { Mobile, PC } from './MediaQuery';
import './App.css';

import Header from '@/components/header';

const App = () => {
  const isLoggedIn = false; // test
  const username = '유니콘'; // test

  return (
    <>
      <Mobile>이건 모바일 !!</Mobile>
      <PC>
        <Header isLoggedIn={isLoggedIn} username={username} />
      </PC>
    </>
  );
};

export default App;
