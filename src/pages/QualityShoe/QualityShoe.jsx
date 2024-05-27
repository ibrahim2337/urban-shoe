import product1 from "../../assets/product/1.png";

const QualityShoe = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="uppercase text-center font-bold pb-10 text-3xl">
          / Quality Shoe Care .
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 justify-center items-center gap-10 lg:px-20 px-10">
        <div className="">
          <div className="text-center">
            <h1 className="text-2xl font-bold hover:text-cyan-600">
              Delivery Service
            </h1>
            <p className="text-md pt-4 ">
              No matter where you live, our delivery service brings your shoes
              right to your doorstep.
            </p>
          </div>
          <div className="lg:mt-20 mt-10 text-center">
            <h1 className="text-2xl font-bold hover:text-cyan-600">
              Quality Guarantee
            </h1>
            <p className="text-md pt-4 ">
              We bring over four generations of passion and expert craftsmanship
              to our profession.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center gap-5">
            <div className="border-2 border-cyan-400 px-2 py-2">
              <div className="relative border-8 border-cyan-400 px-24 py-24">
                <img className="absolute w-[300px] right-[0px] top-[0px]" src={product1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <h1 className="text-2xl font-bold hover:text-cyan-600">
              Pick-Up Service
            </h1>
            <p className="text-md pt-4 ">
              We pick up shoes from any location, you will be pleased with our
              shoe repair craftsmanship.
            </p>
          </div>
          <div className="lg:mt-20 mt-10 text-center">
            <h1 className="text-2xl font-bold hover:text-cyan-600">
              Wide Experience
            </h1>
            <p className="text-md pt-4 
             ">
              We can do anything from shoe repair and heel replacements to
              custom wedding shoes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityShoe;
