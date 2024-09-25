import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepetim" element={<Basket />} />
      </Routes>
    </>
  );
};

export default AppRouter;
