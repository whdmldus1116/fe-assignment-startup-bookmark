import { Mobile, PC } from './MediaQuery';
import Router from './Router';

const App = () => {
  return (
    <>
      <Mobile>
        <Router />
      </Mobile>
      <PC>
        <Router />
      </PC>
    </>
  );
};

export default App;
