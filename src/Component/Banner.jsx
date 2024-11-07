import bgimage from "../assets/header_img.png";
const Banner = () => {
  return (
    <section
      className="md:mx-32 rounded-xl mt-6 text-white px-10 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="flex flex-col justify-center items-center lg:items-center gap-10 w-full lg:w-full pl-10 lg:pl-[0] ">
        <h1 className="sm:text-6xl text-3xl flex flex-col gap-3 text-center font-semibold">
          Discover an exceptional cooking <br />
          <span>class tailored for you!</span>
        </h1>
        <p className="text-center sm:text-xl text-sm">
          Learn and Master Basic Programming, Data Structures, Algorithm,
          OOP,Database and solve 500+ coding <br />
          problems to become an exceptionally well world-class Programmer
        </p>
        <div className="flex gap-4">
          <button className="btn bg-green-400 text-lg text-black font-semibold px-4 py-2  rounded-full">
            Expolor Now
          </button>
          <button className="btn border-2 text-lg px-4 py-2 rounded-full">
            Our feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
