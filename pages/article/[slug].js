import { getNewsToday } from '../../lib/news';
import ArticlePage from '../../components/ArticlePage/ArticlePage';
import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';

const getStaticPaths = async () => {
  const articles = await getNewsToday();
  const slugs = articles.map(({ slug }) => slug);

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const articles = await getNewsToday();
  const article = articles.find(({ slug }) => slug === params.slug);

  return {
    props: {
      article,
    },
  };
};

export default function Slug({ article }) {
  const [favoris] = useLocalStorage('articles', []);
  const router = useRouter();

  return (
    <>
      <ArticlePage article={article} />;
    </>
  );
}

export { getStaticPaths, getStaticProps };
