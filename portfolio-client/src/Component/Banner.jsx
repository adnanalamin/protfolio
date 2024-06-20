import bannerImg from "../assets/Banner Image.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Banner = () => {
  const text = "Frontend Developer".split(" ");
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?id=1OGfnGuBFKEd2Ak-A86FPetxpoU68tvY9&export=download";
    link.setAttribute("download", "Al-Amin resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    if (ref.current) {
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
        // calculate x and y coordinates
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        // update state
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);
  return (
    <div>
      <div className="hero  mt-8  bg-[#31065A] ">
        <motion.div
          ref={ref}
          className="w-[30px] h-[30px] bg-red-700 rounded-full z-20"
          animate={{ x: coordinates.x, y: coordinates.y }}
          transition={{
            type: "spring",
          }}
        ></motion.div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="h-[600px]" />
          <div>
            <h3 className="text-3xl  font-semibold font-ex2 text-[#F86F03]">{`Hi, It's me`}</h3>
            <h2 className="font-ex2 text-white text-6xl font-bold">Al Amin</h2>
            <h3 className="font-ex2 text-4xl text-white font-semibold">
              And I am a
              {text.map((el, i) => (
                <motion.span
                  className="text-[#F86F03] ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h3>
            <p className="py-6 text-white text-xl font-normal w-[573px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              dolorum ullam molestias autem deleniti iure earum!
            </p>
            <button
              onClick={handleDownload}
              className="bg-[#F86F03] -z-0 py-3 px-11 rounded-3xl font-ex2 font-semibold text-white"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
