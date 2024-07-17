import { Mobile, PC } from './MediaQuery';
import Router from './Router';

const App = () => {
  return (
    <>
      <Mobile>이건 모바일 !!</Mobile>
      <PC>
        <Router />
      </PC>
    </>
  );
};

export default App;
