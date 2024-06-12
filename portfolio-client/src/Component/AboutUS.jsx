import image from '../assets/myphoto.png'

const AboutUS = () => {
  return (
    <div className="bg-[#170550]">
      <div className="lg:max-w-7xl lg:mx-auto pb-28">
        <div className="w-full text-center pt-16">
          <h2 className="font-ex2 font-semibold text-white text-[40px]">
            About <span className="text-[#F86F03]">Me</span>
          </h2>
          <hr className="w-56 bg-[#D9D9D9] mx-auto" />
        </div>
        <div className="sm:flex items-center max-w-screen-xl mt-20">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src={image} className='h-[410px] w-[360px] object-cover rounded-2xl'/>
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="text">
              <h2 className="font-ex2 font-semibold  text-3xl text-white">
                Frontend Web Developer
              </h2>
              <p className="text-white text-lg font-semibold font-ex2 mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reiciendis, quas voluptatum facere quam iusto itaque sapiente
                dolor provident aspernatur unde, suscipit illum, velit similique
                animi iste corporis repellendus veritatis minus voluptas. Sunt,
                eligendi. Praesentium explicabo facere quo ad earum.
              </p>
              <p className="text-white text-lg font-semibold font-ex2 mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reiciendis, quas voluptatum facere quam iusto itaque sapiente
                dolor provident.
              </p>
              <button className="text-[#461959] bg-white py-2 mt-16 font-ex2 text-lg font-semibold px-8 rounded-3xl">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
