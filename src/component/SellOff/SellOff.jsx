import product1 from "../../assets/product/1.png";
import product2 from "../../assets/product/2.png";
import product3 from "../../assets/product/3.png";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const SellOff = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="uppercase text-center font-bold text-3xl">
          / sell off .
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 lg:px-28 px-5 mt-10">
        <div className=" bg-slate-100">
          <div className="border">
            <p className="absolute justify-center bg-cyan-400 text-white  px-[20px] py-[3px] font-bold text-md">
              NEW
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
            <p className="absolute justify-center bg-cyan-400 text-white  px-[20px] py-[3px] font-bold text-md">
              NEW
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
            <p className="absolute justify-center bg-cyan-400 text-white  px-[20px] py-[3px] font-bold text-md">
              NEW
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
            <p className="absolute justify-center bg-cyan-400 text-white  px-[20px] py-[3px] font-bold text-md">
              NEW
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
      </div>
    </div>
  );
};

export default SellOff;
