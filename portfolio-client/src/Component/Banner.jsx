import bannerImg from '../assets/Banner Image.png'
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#31065A]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="w-[500px] h-[600px]"
          />
          <div>
            <h3 className="text-3xl  font-semibold font-ex2 text-[#F86F03]">{`Hi, It's me`}</h3>
            <h2 className="font-ex2 text-white text-6xl font-bold">Al Amin</h2>
            <h3 className="font-ex2 text-4xl text-white font-semibold">And I am a <span className="text-[#F86F03]">Frontend Developer</span></h3>
            <p className="py-6 text-white text-xl font-normal w-[573px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            dolorum ullam molestias autem deleniti iure earum!
            </p>
            <button className="bg-[#F86F03] py-3 px-11 rounded-3xl font-ex2 font-semibold text-white">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
