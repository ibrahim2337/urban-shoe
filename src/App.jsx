import Banner from "./component/Banner/Banner";
import LatestProduct from "./component/LatestProduct/LatestProduct";
// import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/Navbar/Navbar";
import NewProducts from "./component/NewProducts/NewProducts";
import SellOff from "./component/SellOff/SellOff";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestProduct />
      <SellOff />
      <NewProducts />
    </div>
  );
}

export default App;
