// import { useState } from "react";
import product1 from "../../assets/product/1.png";
import product2 from "../../assets/product/2.png";
import product3 from "../../assets/product/3.png";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const LatestProduct = () => {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="my-5">
      <div className="flex flex-col lg:flex-row  lg:gap-1 gap-5 px-5 lg:px-0">
        <div className="lg:w-6/12 bg-stone-800 py-5">
          <h1 className="text-white text-4xl text-center font-bold">
            Best seller
          </h1>
          <p className="text-white px-5 pt-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            ullam. Quae deserunt et enim corporis velit! Provident consequuntur
            enim corporis velit!
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-6 lg:gap-0 gap-5 grid-cols-2">
            <div className=" bg-slate-100">
              <div className="border">
                <p className="absolute justify-center bg-cyan-400 text-white  px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product1} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500 text-justify">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>

            <div className=" bg-slate-100">
              <div className="border">
                <p className="absolute  bg-cyan-400 text-white  px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product2} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>

            <div className=" bg-slate-100">
              <div className="border">
                <p className="absolute  bg-cyan-400 text-white px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product3} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>

            <div className=" bg-slate-100">
              <div className="border">
                <p className="absolute  bg-cyan-400 text-white  px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product1} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>

            <div className=" bg-slate-100">
              <div className="border ">
                <p className="absolute  bg-cyan-400 text-white  px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product2} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>

            <div className=" bg-slate-100">
              <div className="border ">
                <p className="absolute  bg-cyan-400 text-white  px-[7px] py-[2px] font-bold text-md">
                  POPULAR
                </p>
                <img src={product3} alt="" />
              </div>
              <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
                Summer Friendly Comfortable Sneakers For Men – US-65
              </h2>
              <div className="flex justify-between items-center gap-2 px-1">
                <div className="flex justify-between items-center gap-1 font-medium py-2  text-xl text-slate-500">
                  <h3 className="font-bold">$230</h3>
                  <h3 className="text-red-600 line-through text-sm">$350</h3>
                </div>
                <div className="flex">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", width: "200px", height: "300px" }}
        >
          <img
            src={isHovered ? { product1 } : { product1 }}
            alt="Photo"
            style={{ width: "100%", height: "100%" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LatestProduct;
