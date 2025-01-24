import { AppProps } from "next/app"; // Importing the type for props in Next.js

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

// import { AppProps } from "next/app"; // Importing the type for props in Next.js
// import { Suspense } from "react"; // Importing Suspense from React
// // import SearchPage from "./path/to/SearchPage"; // Update the path to your SearchPage component

// function App({ Component, pageProps }: AppProps) {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component {...pageProps} />
//     </Suspense>
//   );
// }

// export default App;