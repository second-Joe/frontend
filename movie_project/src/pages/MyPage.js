import MyPageNavbar from "../components/MyPageNavbar";
import MyPageBody from "../components/MyPageBody";

const MyPage = () => {
  const body = document.getElementById("body");
  body.style.backgroundColor = "white";

  return (
    <div>
      <MyPageNavbar />
      <MyPageBody />
    </div>
  );
};

export default MyPage;
