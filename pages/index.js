import { getNewsToday } from '../lib/news';
import Layout from '../components/Layout/Layout';
import Tabs from '../components/Tabs/Tabs';
import Feed from '../components/Feed/Feed';
import Search from '../components/Search/Search';
import { useLocalStorage } from 'react-use';
import { useState } from 'react';

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
  const [search, setSearch] = useState('');

  const handleFav = (newFav) => {
    if (favoris.find((fav) => fav.slug === newFav.slug))
      setFavoris(favoris.filter((fav) => fav.slug !== newFav.slug));
    else setFavoris([...favoris, newFav]);
  };

  const filterResult = (articles) =>
    articles.filter((article) =>
      ['title', 'description', 'author', 'content'].some((key) =>
        article[key]?.toLowerCase().includes(search.toLowerCase()),
      ),
    );

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-center">React News Api</h1>
        <h2 className="text-2xl font-bold text-center">
          Get latest news powered by newsapi.org
        </h2>
        <Search value={search} onChange={(val) => setSearch(val)} />
      </div>
      <Tabs
        tabs={[
          {
            title: 'Feed',
            content: (
              <Feed
                articles={filterResult(articles)}
                onFav={handleFav}
                favSlugs={favoris.map(({ slug }) => slug)}
              />
            ),
          },
          {
            title: 'Favoris',
            content: (
              <Feed
                articles={filterResult(favoris)}
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
