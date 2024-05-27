import Banner from "./component/Banner/Banner";
import LatestProduct from "./component/LatestProduct/LatestProduct";
// import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/Navbar/Navbar";
import SellOff from "./component/SellOff/SellOff";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestProduct />
      <SellOff />
    </div>
  );
}

export default App;
