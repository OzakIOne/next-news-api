import axios from 'axios';

export async function getNewsToday() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const endpoint = `https://newsapi.org/v2/everything?q=tesla&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;
  const { data } = await axios.get(endpoint);
  return data.articles.map((article) => ({
    ...article,
    slug: article.url.split('/').filter(Boolean).at(-1),
  }));
}
