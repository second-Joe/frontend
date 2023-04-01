import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import SearchResult from "../pages/SearchResult";
import DownLoadmany from "./DownLoadmany";
import GoodMany from "./GoodMany";
import NewDateAdd from "./NewDateAdd";
import FavMovieList from "./FavMovieList";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [menuClick, setMenuClick] = useState(false);
  const [menuKind, setMenuKind] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const main = document.querySelector("main");
      const footer = document.querySelector("footer");

      main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;
    };

    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");

    main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuName = menuKind;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <NavBar
          search={search}
          setSearch={setSearch}
          menuClick={menuClick}
          setMenuClick={setMenuClick}
          menuKind={menuKind}
          setMenuKind={setMenuKind}
        />
      </header>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 110px)",
        }}
      >
        {menuClick === false ? (
          search === "" ? (
            <div>
              <Outlet />
            </div>
          ) : (
            <SearchResult search={search} />
          )
        ) : search === "" ? (
          menuName === "다운로드 가장 많은 영화" ? (
            <DownLoadmany />
          ) : menuName === "좋아요 가장 많은 영화" ? (
            <GoodMany />
          ) : menuName === "최근 추가 된 영화" ? (
            <NewDateAdd />
          ) : (
            <FavMovieList />
          )
        ) : (
          <SearchResult search={search} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
