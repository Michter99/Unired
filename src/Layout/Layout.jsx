import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
