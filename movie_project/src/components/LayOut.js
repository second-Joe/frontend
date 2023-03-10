import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import SearchResult from "../pages/SearchResult";
import DownLoadmany from "./DownLoadmany";
import GoodMany from "./GoodMany";
import NewDateAdd from "./NewDateAdd";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [menuClick, setMenuClick] = useState(false);
  const [menuKind, setMenuKind] = useState("");

  const menuName = menuKind;
  //console.log(menuName);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* search input에서 글자 입력하면  main 안 section1, section2, section3도 보여주면서 검색결과 바뀌어서 보여줌(section3), 엔터치면 section3으로 전체 화면 대체 */}
      <div>
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
        <main>
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
            ) : (
              <NewDateAdd />
            )
          ) : (
            <SearchResult search={search} />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
