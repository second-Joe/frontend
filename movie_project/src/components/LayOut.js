import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import SearchResult from "../pages/SearchResult";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <NavBar search={search} setSearch={setSearch} />
      </header>
      <main>
        {search === "" ? (
          <div>
            <Outlet />
          </div>
        ) : (
          <SearchResult search={search} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
