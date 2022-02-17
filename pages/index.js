import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export async function getServerSideProps() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const endpoint = `https://newsapi.org/v2/everything?q=tesla&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;
  const res = await axios.get(endpoint);
  return {
    props: {
      data: res.data,
    },
  };
}

export default function Home({ data }) {
  const [results, setResults] = useState(data.articles);

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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">React News Api</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">
          Get latest news powered by newsapi.org
        </h2>
      </div>

      <div className="flex flex-row flex-wrap ">
        {results.map((article) => (
          <div
            key={article.publishedAt}
            className="flex flex-col items-center justify-start flex-grow w-1/5 p-4 m-4 border-2 border-gray-400 border-solid rounded-lg shadow-lg"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="article image"
                className="h-32 aspect-auto"
              />
            )}
            <h1 className="text-2xl font-bold text-center">{article.title}</h1>

            <a
              href={article.url}
              className="w-4/6 overflow-hidden text-center text-blue-500 whitespace-nowrap text-clip"
            >
              {article.url}
            </a>

            {article.author && (
              <span className="text-sm text-center">
                Author : {article.author}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
