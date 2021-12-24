import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component className="dark" {...pageProps} />;
}

export default MyApp;
