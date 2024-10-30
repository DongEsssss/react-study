import { Outlet } from "react-router-dom";
import Footer from "../frame/footer/footer";
import Header from "../frame/header/header";

function Main() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Main;
