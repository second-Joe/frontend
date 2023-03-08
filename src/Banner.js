import "./Banner.css";

import background from "./profile.png";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;
