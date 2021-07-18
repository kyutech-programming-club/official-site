import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default App;
