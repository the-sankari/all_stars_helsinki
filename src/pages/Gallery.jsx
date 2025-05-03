import img1 from "../assets/img/gallery/gallery_1.png";
import img2 from "../assets/img/gallery/gallery_2.png";
import img3 from "../assets/img/gallery/gallery_3.png";
import img4 from "../assets/img/gallery/gallery_4.png";
import img5 from "../assets/img/gallery/gallery_5.png";
import img6 from "../assets/img/gallery/gallery_6.png";
import img7 from "../assets/img/gallery/gallery_7.png";

export default function Gallery() {
  // Use your images for the first 7, then repeat or leave blank for the rest
  const images = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <section className="bg-[#0A2342] text-white font-body py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-8xl font-extrabold text-yellow-400 mb-4">
            Gallery
          </h1>
          <p className="italic text-2xl text-white">
            Through our lens, the spirit of a team.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[0, 1, 2, 3].map((col) => (
            <div className="grid gap-4" key={col}>
              {[0, 1, 2].map((row) => {
                const idx = col * 3 + row;
                // Use your images for the first 7, then repeat or leave blank
                const src = images[idx] || images[idx % images.length];
                return (
                  <div key={row}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-12 italic text-2xl text-white">
          It starts with a dream. Let's make it a reality.
        </div>
      </div>
    </section>
  );
}
