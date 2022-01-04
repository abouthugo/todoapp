import "../styles/globals.css";
import { ActiveFormProvider } from "../context/ActiveFormsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ActiveFormProvider>
      <Component className="dark" {...pageProps} />
    </ActiveFormProvider>
  );
}

export default MyApp;
