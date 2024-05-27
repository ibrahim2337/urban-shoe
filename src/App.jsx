import Banner from "./component/Banner/Banner";
import LatestProduct from "./component/LatestProduct/LatestProduct";
// import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainNavbar /> */}
      <Banner />
      <LatestProduct />
    </div>
  );
}

export default App;
