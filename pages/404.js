import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';
import ArticlePage from '../components/ArticlePage/ArticlePage';
import Err404 from '../components/Err404/Err404';

const Custom404 = () => {
  const [favoris] = useLocalStorage('articles', []);
  const { asPath } = useRouter();
  const favArticle = favoris.find(
    ({ slug }) => asPath.split('/').at(-1) === slug,
  );

  // return <>{favArticle ? <ArticlePage article={favArticle} /> : <Err404 />}</>;
  return (
    <>
      <Err404 />
    </>
  );
};

export default Custom404;
