import Img1 from "../assets/Img1.avif";
import Img2 from "../assets/Img2.avif";
import Img3 from "../assets/Img3.webp";
import Img4 from "../assets/Img4.avif";
import Copilot from "../assets/Copilot.avif";
import Team from "../assets/Team.avif";
import Office from "../assets/office.avif";
import vs from "../assets/vs.webp";
import Main_Img from "../assets/Main_Img.avif";



const products = [
  {
    title: "Designed for life today – and tomorrow",
    description: "New devices built for Windows 11",
    buttonText: "See if your PC is ready",
    image: Img1 ,
  },
  {
    title: "Microsoft Edge",
    description: "Performance, compatibility, and security.",
    buttonText: "Download now",
    image: Img2,
  },
  {
    title: "Microsoft OneDrive",
    description: "Save your files and photos to OneDrive.",
    buttonText: "Learn more",
    image: Img3,
  },
  {
    title: "Outlook for iOS and Android",
    description: "Connect. Organise. Get things done.",
    buttonText: "Download now",
    image: Img4,
  },
];

const businessProducts = [
  {
    title: "Microsoft 365 Copilot",
    buttonText: "Learn more",
    image: Copilot,
  },
  {
    title: "Get Microsoft Teams for your business",
    buttonText: "Shop now",
    image: Team,
  },
  {
    title: "Welcome to your Windows 365 Cloud PC",
    buttonText: "Explore Windows 365",
    image: Office ,
  },
  {
    title: "Visual Studio 2022",
    buttonText: "Download Visual Studio",
    image: vs,
  },
];

const ProductShowcase = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <img src={product.image} alt={product.title} className="mb-2 w-full h-32 object-cover rounded-md" />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <button className="mt-2 text-blue-600 font-semibold">{product.buttonText}</button>
          </div>
        ))}
      </div>
      
      {/* Featured Section */}
      <div className="mt-8 relative bg-gray-200 p-6 rounded-md flex items-center">
        <img src= {Main_Img} alt="Featured" className="w-full rounded-md" />
        <div className="absolute inset-0 flex items-center justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
  <div className="text-start">
    <h2 className="text-2xl font-bold text-white">Organise your life</h2>
    <p className="text-lg text-white w-[90%]">Keep your ideas and notes organised with OneNote.</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Learn more</button>
  </div>
</div>
      </div>
      
      {/* Business Section */}
      <h2 className="mt-8 text-xl font-bold">For Business</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {businessProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <img src={product.image} alt={product.title} className="mb-2 w-full h-32 object-cover rounded-md" />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <button className="mt-2 text-blue-600 font-semibold">{product.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
