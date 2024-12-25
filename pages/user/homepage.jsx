import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  const featuredProducts = [
    {
      name: "Modern Lamp",
      description: "A sleek, customizable lamp for modern interiors.",
      price: "$120",
      image:
        "https://images.pexels.com/photos/161522/pexels-photo-161522.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/modern-lamp",
    },
    {
      name: "Artistic Vase",
      description: "A uniquely designed vase for home decor enthusiasts.",
      price: "$80",
      image:
        "https://images.pexels.com/photos/706145/pexels-photo-706145.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/artistic-vase",
    },
    {
      name: "Custom Nameplate",
      description: "A personalized 3D-printed nameplate for your home or office.",
      price: "Starting at $50",
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/custom-nameplate",
    },
    {
      name: "Elegant Clock",
      description: "A beautifully designed clock to enhance your living space.",
      price: "$70",
      image:
        "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/elegant-clock",
    },
    {
      name: "Decorative Shelf",
      description: "A stylish shelf to display your favorite items.",
      price: "$90",
      image:
        "https://images.pexels.com/photos/34563/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/decorative-shelf",
    },
    {
      name: "Custom Planters",
      description: "Personalized planters to suit your indoor garden.",
      price: "Starting at $40",
      image:
        "https://images.pexels.com/photos/416071/pexels-photo-416071.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/product/custom-planters",
    },
  ];

  return (
    <>
      <Helmet>
        <title>3D Printing & Custom Products</title>
        <meta
          name="description"
          content="Explore our 3D-printed products, featuring modern lamps, unique home decor, and customizable creations."
        />
        {/* Import DM Sans Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      {/* Apply DM Sans Font */}
      <div className="bg-white text-black" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {/* Hero Section */}
        <section
          className="h-screen flex items-center justify-center bg-[url('https://img.freepik.com/free-vector/three-realistic-focus-lights-studio-background_1017-38989.jpg?t=st=1735039419~exp=1735043019~hmac=f661ca9a998a5537ac5c951c90199d4a10830c638e94875fb83d94c6508650b1&w=1800')] bg-cover bg-center text-center px-8"
        >
          <div className="bg-black bg-opacity-0 p-6 rounded">
            <h1 className="text-7xl font-extrabold mb-4 text-white">Revolutionizing 3D Printing</h1>
            <p className="text-lg mb-8 text-white">
              Discover our innovative designs and personalized products, crafted for you.
            </p>
            <Link
              to="/shop"
              className="bg-black text-white px-10 py-3 rounded-full text-l tracking-wide hover:bg-gray-800 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </section>        

        {/* Bento Grid Design for Featured Products */}
        <section className="py-16 bg-white-900 px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-black shadow-lg ${index % 3 === 0 ? 'col-span-2 row-span-2' : ''} overflow-hidden relative`}
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
    
                {/* Product Name and Shop Button Section */}
                <div className="absolute bottom-4 left-4 z-20">
                  {/* Product Name with Hover Underline */}
                  <h3 className="text-2xl font-semibold text-white group relative cursor-pointer">
                    {product.name}
                    <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white scale-x-0 "></span>
                  </h3>
                  {/* Shop Button with Hover Underline */}
                  <Link
                    to={product.link}
                    className="block mt-4 text-center bg-black text-white px-4 py-2 rounded transition-all hover:bg-gray-700 relative group"
                  >
                    Shop Now
                    <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-all origin-left"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
    
       {/* Call-to-Action */}
<section
  className="relative py-24 mt-16 bg-[url('https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry_645730-133.jpg?t=st=1735040390~exp=1735043990~hmac=c134287f0b1fe6413b75cc3933b5062fddab10cfc6be67681ff5379efb357eeb&w=1800')] bg-cover bg-center text-center px-8"
>
  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
  
  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-6 text-white">Get Your Custom Product</h2>
    <p className="text-lg mb-8 text-white">
      Personalize your next product with our easy-to-use customization options.
    </p>
    <Link
      to="/customize"
      className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gray-800 transition-all"
    >
      Start Customizing
    </Link>
  </div>
</section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;