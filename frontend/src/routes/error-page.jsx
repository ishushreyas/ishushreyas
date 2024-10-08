import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
    <div className="h-100 p-1">
      <h3 className="courier-prime">{error.statusText || error.message}</h3>
    <h1 className="mt-1 righteous">Something went wrong.</h1>
    <p className="c-1 p">We encountered an error while loading the page.</p>
    </div>
      <Footer />
    </>
  );
}
