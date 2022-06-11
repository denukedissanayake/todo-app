import Navbar from "./navigation-bar";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        { children }
      </div>
    );
  }
   
  export default Layout;