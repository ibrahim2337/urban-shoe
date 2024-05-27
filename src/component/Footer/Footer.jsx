import logo from "../../assets/logo/Screenshot_2024-05-27_212117-removebg-preview.png";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-10 bg-slate-800 text-center">
        <div className="text-white">
          <h1>address</h1>
          <p>
            98/2, Vista Garden, Shenpara Parbata, Mirpur-10, Dhaka, Bangladesh
          </p>
        </div>
        <div className="text-white flex-col justify-center items-center">
          <img className="w-[100px]" src={logo} alt="" />
          <p>
            Save your favorite pair of shoes by letting our professionals bring
            them back to life.
          </p>
        </div>

        <div className="text-white">
          <h1>Phone & Email</h1>
          <p>info@yoursite.com</p>
          <p>(800) 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
