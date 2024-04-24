import product1 from "../../assets/product/14.webp";

const LatestProduct = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="uppercase text-center font-bold text-4xl mb-20">
          Latest product
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 lg:px-20 px-5">
        <div>
          <div className=" bg-slate-100">
            <p className="absolute  bg-cyan-400 text-white ms-[250px] lg:ms-[197px]  px-8 py-2 text-md">
              NEW
            </p>
            <img src={product1} alt="" />
          </div>
          <h2 className="font-medium py-2 px-2 text-sm text-slate-500">
            Summer Friendly Comfortable Sneakers For Men – US-65
          </h2>
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-2 font-medium py-2  text-xl text-slate-500">
              <h3 className="text">$330</h3>
              <h3 className="text-cyan-400">$250</h3>
            </div>
            <div className="flex gap-2 items-center font-medium text-xl">
              <h1 className="text-slate-500">Rating :</h1>
              <h3 className=" text-4xl mt-3 text-yellow-400">*****</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
