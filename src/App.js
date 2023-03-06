import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import MyPage from "./Pages/MyPage";
import NotFound from "./Pages/NotFound";
import Layout from "./LayOut";
import Settings from "./Pages/Settings";
import Profiles from "./Pages/Profiles";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/search/" element={<SearchResult />} />
      {/* SearchResult결과는 section3 컴포넌트 이용 */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
