import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import SearchResult from "../pages/SearchResult";
import Rating8 from "./rating8";
import Rating85 from "./rating8.5";
import Rating9 from "./rating9";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [menuClick, setMenuClick] = useState(false);
  const [menuKind, setMenuKind] = useState("");

  const menuName = menuKind;
  //console.log(menuName);
  return (
    <div>
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
                <footer>
                  <Footer />
                </footer>
              </div>
            ) : (
              <SearchResult search={search} />
            )
          ) : search === "" ? (
            menuName === "평점 8" ? (
              (console.log(menuName), (<Rating8 />))
            ) : menuName === "평점 8.5" ? (
              (console.log(menuName), (<Rating85 />))
            ) : (
              (console.log(menuName), (<Rating9 />))
            )
          ) : (
            <SearchResult search={search} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
