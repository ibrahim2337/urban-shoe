import logo_image from "../../assets/logo/Screenshot_2024-04-23_235244-removebg-preview.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <div className="container flex justify-between mx-auto md:justify-between md:space-x-8">
          <div>
            <img className="" src={logo_image} alt="" />
          </div>
          <div className="items-stretch hidden space-x-3 md:flex md:items-center">
            <div className="flex flex-row items-center">
              <IoIosPhonePortrait />
              <h1 className="text-xs font-bold">
                CALL OUR CUSTOMER SERVICES AT :
              </h1>
            </div>
            <div>
              <h2 className="text-md font-bold text-cyan-400">01748-907164</h2>
            </div>
          </div>

          <div className="items-stretch hidden space-x-3 md:flex md:items-center">
            <div className="flex ">
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 px-5 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              />
            </div>
            <div className="flex">
              <CgProfile />
            </div>
            <div className="flex">
              <FaCartPlus />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
