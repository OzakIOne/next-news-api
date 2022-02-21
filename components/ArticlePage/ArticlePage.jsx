import Head from 'next/head';

const ArticlePage = ({ article }) => {
  return (
    <>
      <Head>
        <title>React News Api</title>
        <meta
          name="description"
          content="Get latest news powered by newsapi.org"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <svg
        aria-hidden="true"
        role="img"
        onClick={() => window.history.back()}
        className="absolute inset-0 z-10 m-10 text-black cursor-pointer"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 10v4h-9l3.5 3.5l-2.42 2.42L4.16 12l7.92-7.92L14.5 6.5L11 10h9Z"
        ></path>
      </svg>

      <div className="relative top-0 h-40 pt-32 overflow-hidden">
        <img
          className="absolute inset-0 object-cover object-top w-full h-40 filter blur"
          src={article.urlToImage}
          alt="article image background blur"
        />
      </div>

      <div className="w-1/2 mx-auto -mt-24">
        <div className="relative pt-64 overflow-hidden rounded-2xl">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={article.urlToImage}
            alt="article image"
          />
        </div>
      </div>

      <article className="py-8 mx-auto max-w-prose">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <h2 className="mt-2 text-sm text-gray-500">
          {article.author}
          {article.publishedAt}
        </h2>

        <p className="mt-6">{article.content}</p>
      </article>
    </>
  );
};

export default ArticlePage;
