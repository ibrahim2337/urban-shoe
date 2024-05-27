import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import LatestProduct from "./component/LatestProduct/LatestProduct";
// import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/Navbar/Navbar";
import NewProducts from "./component/NewProducts/NewProducts";
import SellOff from "./component/SellOff/SellOff";
import QualityShoe from "./pages/QualityShoe/QualityShoe";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <LatestProduct />
      <SellOff />
      <NewProducts />
      <QualityShoe />
      <Footer />
    </div>
  );
}

export default App;
