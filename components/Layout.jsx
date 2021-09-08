import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
