import StickyHeader from "../components/StickyHeader";
import CustomerPersonal from "../components/CustomerPersonal";
import { Divider } from "@mui/material";
import CustomerAsk from "../components/CustomerAsk";
import CustomerSolution from "../components/CustomerSolution";

const Customercenter = () => {
  const body = document.getElementById("body");
  body.style.backgroundColor = "white";

  return (
    <div>
      <StickyHeader />
      <CustomerPersonal />
      <Divider />
      <CustomerSolution />
      <CustomerAsk />
    </div>
  );
};

export default Customercenter;
