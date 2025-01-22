
import { AppProps } from "next/app"; // Importing the type for props in Next.js

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
