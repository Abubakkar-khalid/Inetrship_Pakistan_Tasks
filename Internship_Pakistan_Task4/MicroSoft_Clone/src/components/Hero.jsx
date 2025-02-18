import HeroImg from '../assets/Hero_Img.avif'; // Import the image

const Hero = () => {
  return (
    <div className="min-h-[500px] w-full bg-gradient-to-r from-[#b5d3f4] via-[#d7e6fb] to-[#edf7ff] flex items-center px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-3xl  font-semibold text-gray-900 mb-4">
            Achieve the extraordinary
          </h1>
          <p className="text-lg  text-gray-700 mb-6">
            Microsoft 365 delivers cloud storage, security, and Microsoft Copilot in your favorite apps – all in one plan.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition">
            Shop Microsoft 365
          </button>
        </div>

        {/* Right Content - Floating Icons */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <img
            src={HeroImg}  // Make sure this is imported correctly
            alt="Microsoft 365 Apps"
            className="object-contain w-[90%] max-w-[500px]"
          />
        </div>

      </div>
    </div>
  );
};


export default Hero;
