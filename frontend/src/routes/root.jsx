import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function loader() {
  return {
    props: {
      title: "Home",
    },
  };
}

export default function Root() {
  return (
    <>
      <Header />
      <div className="h-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}