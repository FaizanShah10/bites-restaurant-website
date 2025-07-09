import img1 from "../assets/images/gallery/img1.jpg";
import img2 from "../assets/images/gallery/img2.jpg";
import img3 from "../assets/images/gallery/img3.jpg";
import img4 from "../assets/images/gallery/img4.jpg";
import img5 from "../assets/images/gallery/img5.jpg";
import img6 from "../assets/images/gallery/img6.jpg";
import img7 from "../assets/images/gallery/img7.jpg";
import img8 from "../assets/images/gallery/img8.jpg";
import img9 from "../assets/images/gallery/img9.jpg";
import img10 from "../assets/images/gallery/img10.jpg";

const images = [
  { src: img1, alt: "Delicious food on plate 1" },
  { src: img2, alt: "Tasty dish presentation 2" },
  { src: img3, alt: "Healthy fresh ingredients 3" },
  { src: img4, alt: "Fine dining setup 4" },
  { src: img5, alt: "Exquisite meal closeup 5" },
  { src: img6, alt: "Gourmet special dish 6" },
  { src: img7, alt: "Chef’s special platter 7" },
  { src: img9, alt: "Juicy steak with sides 9" },
];

const Gallery = () => {
  return (
    <div className="w-full bg-white py-8 md:mt-20 mt-4 ">
      <h2 className="text-3xl roboto-medium mb-16 text-center">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-0">
        {images.map(({ src, alt }, index) => (
          <div key={index} className="w-full h-56 overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
