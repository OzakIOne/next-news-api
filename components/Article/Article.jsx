import Link from 'next/link';
import Star from '../../components/Star/Star';

const Article = ({ article, isFav, onFav }) => {
  return (
    <div className="max-w-xl px-4 mx-auto my-20 aze">
      <div className="mb-6 tracking-wide bg-white rounded-lg shadow-2xl">
        <div className="md:flex-shrink-0">
          <img
            src={article.urlToImage}
            alt="article image"
            className="w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div className="px-4 py-2 mt-2">
          <h2 className="text-2xl font-bold tracking-normal text-gray-800">
            {article.title}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <Link
              href={{
                pathname: `/article/${article.slug}`,
              }}
            >
              <a href="#" className="text-xs text-blue-500 ">
                Show More
              </a>
            </Link>
            <div
              onClick={() => onFav(article)}
              className="flex text-gray-700 cursor-pointer"
            >
              <Star isFilled={isFav} />
            </div>
          </div>
          <div className="flex items-center my-3">
            <span className="flex justify-between flex-grow text-sm tracking-tighter text-gray-900">
              <span>{article.author}</span>
              <span className="text-gray-600">{article.publishedAt}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
