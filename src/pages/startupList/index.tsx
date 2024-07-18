import { PageContainer, Title, CardGrid } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';

const StartupList = () => {
  //TODO: api 연결필요
  const startups = [
    {
      id: '01',
      tag: '생산성',
      description:
        '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플...',
      bookmark: false,
    },
    {
      id: '02',
      tag: '생산성',
      description:
        '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플...',
      bookmark: true,
    },
    {
      id: '03',
      tag: '생산성',
      description:
        '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플...',
      bookmark: false,
    },
    {
      id: '04',
      tag: '생산성',
      description:
        '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플...',
      bookmark: false,
    },
  ];

  return (
    <>
      <Header isLoggedIn={true} currentPath="/" username={'꿍꿍꿍'} />
      <PageContainer>
        <Title>스타트업 리스트</Title>
        <CardGrid>
          {startups.map((startup) => (
            <Card
              key={startup.id}
              id={startup.id}
              tag={startup.tag}
              description={startup.description}
              bookmark={startup.bookmark}
            />
          ))}
        </CardGrid>
      </PageContainer>
    </>
  );
};

export default StartupList;
