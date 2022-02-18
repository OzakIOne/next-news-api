import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>React News Api</title>
      <meta
        name="description"
        content="Get latest news powered by newsapi.org"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);
export default Layout;
