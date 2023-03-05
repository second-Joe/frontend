import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import SearchResult from "./Pages/SearchResult";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <header>
        <NavBar search={search} setSearch={setSearch} />
      </header>
      <main>{search === "" ? <Outlet /> : <SearchResult />}</main>
      {/* search input이 바뀌지 않으면 그대로 main 안 section1, section2, section3을 보여주고, 바뀌면 section3으로 전체 화면 대체 */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
