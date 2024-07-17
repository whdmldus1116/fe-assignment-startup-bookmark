import { Mobile, PC } from './MediaQuery';
import './App.css';

import Header from './components/header';
import Router from './Router';

const App = () => {
  const currentPath = window.location.pathname;
  const isLoggedIn = true; // test
  const username = '유니콘'; // test

  return (
    <>
      <Mobile>이건 모바일 !!</Mobile>
      <PC>
        <Header isLoggedIn={isLoggedIn} currentPath={currentPath} username={username} />
        <Router />
      </PC>
    </>
  );
};

export default App;
