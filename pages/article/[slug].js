import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const {
    query: { title, content, url, author, image, date },
  } = router;
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
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <h2 className="text-center ">Author : {author}</h2>
        <h4 className="text-center ">Date : {date}</h4>
        {image && (
          <img src={image} alt="Article's image" className="h-64 aspect-auto" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-center">{content}</p>
      </div>
    </>
  );
}
