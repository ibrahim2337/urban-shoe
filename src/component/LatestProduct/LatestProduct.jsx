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
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
