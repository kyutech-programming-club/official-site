import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/index.css";
import initTwitterScriptInner from "zenn-embed-elements/lib/init-twitter-script-inner";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: initTwitterScriptInner,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
