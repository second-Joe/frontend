import StickyHeader from "../components/StickyHeader";
import CustomerPersonal from "../components/CustomerPersonal";
import { Divider } from "@mui/material";
import CustomerAsk from "../components/CustomerAsk";
import CustomerSolution from "../components/CustomerSolution";

const Customercenter = () => {
  return (
    <div>
      <StickyHeader />
      <CustomerPersonal />
      <Divider />
      <CustomerSolution />
      <Divider />
      <CustomerAsk />
    </div>
  );
};

export default Customercenter;
