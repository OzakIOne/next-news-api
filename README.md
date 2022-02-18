This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
git clone https://github.com/ozakione/react-ex-1
cd react-ex-1
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

## Project info
- You need to design a news application with two tabs 
- Home : will contain a list with infinity scroll of all news displayed in list form, with cells composed of an image, a title and the source (if information available).
  - A sub-navigation to a detail view of a news item containing all the information you deem useful
  - A bookmark system on the home page or in the detail view making news available offline news (images and content of the detail view).
  - A redirection system to the full article page.
  - A search system by various elements (title, source, language, etc...)
- Favorites: which will list the news items you have bookmarked and allow you to delete them


Technical stack : 
- React
- Axios
- LocalStorage
- EasyPeasy (state handling)
- Tailwind
- NextJS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
