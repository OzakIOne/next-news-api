import { getNewsToday } from '../lib/news';
import Layout from '../components/Layout/Layout';
import Tabs from '../components/Tabs/Tabs';
import Feed from '../components/Feed/Feed';
import { useLocalStorage } from 'react-use';

export async function getStaticProps() {
  const articles = await getNewsToday();
  return {
    props: {
      articles,
    },
  };
}

const HomePage = ({ articles }) => {
  const [favoris, setFavoris] = useLocalStorage('articles', []);

  const handleFav = (newFav) => {
    if (favoris.find((fav) => fav.slug === newFav.slug))
      setFavoris(favoris.filter((fav) => fav.slug !== newFav.slug));
    else setFavoris([...favoris, newFav]);
  };

  return (
    <Layout>
      <div className="my-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">React News Api</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center">
            Get latest news powered by newsapi.org
          </h2>
        </div>
      </div>
      <Tabs
        tabs={[
          {
            title: 'Feed',
            content: (
              <Feed
                articles={articles}
                onFav={handleFav}
                favSlugs={favoris.map(({ slug }) => slug)}
              />
            ),
          },
          {
            title: 'Favoris',
            content: (
              <Feed
                articles={favoris}
                onFav={handleFav}
                favSlugs={favoris.map(({ slug }) => slug)}
              />
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default HomePage;
