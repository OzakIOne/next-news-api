import ArticleCard from '../ArticleCard/ArticleCard';

export const Feed = ({ articles, isFav, onFav, favSlugs }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <div key={article.url} className="flex flex-col items-center max-w-md ">
          <ArticleCard
            article={article}
            onFav={onFav}
            isFav={favSlugs.find((slug) => article.slug === slug)}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;
