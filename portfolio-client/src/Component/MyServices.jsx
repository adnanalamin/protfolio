import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const MyServices = () => {
  return (
    <div id="myServices" className=" bg-[#31065A] font-ex2 pb-40">
      <div className="w-full text-center pt-16">
        <h2 className="font-ex2 font-semibold text-white text-[40px]">
          My <span className="text-[#F86F03]">Services</span>
        </h2>
        <hr className="w-56 bg-[#D9D9D9] mx-auto" />
      </div>
      <div className=" w-full bg-[#31065A] lg:max-w-7xl lg:mx-auto mt-24 p-4">

        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl ">
          <div className="mt-12">
              <CgWebsite className="text-[#F86F03] w-full mx-auto h-20 "></CgWebsite>
            </div>
            <h1 className="text-[#170550] mt-7 text-2xl font-ex2 font-bold lg:px-14">
              Front-end
            </h1>
            <p className="mt-8 px-6 text-[#170550] font-normal text-lg font-ex2">
              I offer expert frontend development services, creating responsive,
              user-friendly websites and web applications using modern
              technologies like HTML, CSS, JavaScript, and frameworks like
              React.
            </p>
          </div>
          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
            
          >
            <div className="mt-12">
              <FaServer className="text-[#F86F03] w-full mx-auto h-20 "></FaServer>
            </div>
            <h1 className="text-[#170550] mt-7 text-2xl font-ex2 font-bold lg:px-14">
              Backend
            </h1>
            <p className="mt-8 px-6 text-[#170550] font-normal text-lg font-ex2">
              I offer professional backend development services, building
              robust, scalable server-side applications using technologies like
              Node.js and Express.js to ensure seamless performance and
              security.
            </p>
          </div>
          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mt-12">
              <FaDatabase className="text-[#F86F03] w-full mx-auto h-20 "></FaDatabase>
            </div>
            <h1 className="text-[#170550] mt-7 text-2xl font-ex2 font-bold lg:px-14">
              Database
            </h1>
            <p className="mt-8 px-6 text-[#170550] font-normal text-lg font-ex2">
            I offer professional MongoDB database services, specializing in designing, implementing, and managing scalable, high-performance NoSQL databases to ensure efficient data storage, retrieval, and security for your applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
