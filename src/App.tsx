import Card from './components/card';
import DropUp from './components/dropUp';
import { Mobile, PC } from './MediaQuery';
import Router from './Router';

const App = () => {
  const handleChange = (selectedOptions: string[]) => {
    console.log('Selected options:', selectedOptions);
  };
  return (
    <>
      <Mobile>이건 모바일 !!</Mobile>
      <PC>
        <Card id="01" bookmark={true} />
        <Card id="02" bookmark={false} />
        <DropUp onChange={handleChange} />
        <Router />
      </PC>
    </>
  );
};

export default App;
