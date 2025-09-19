import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function ExhibitionCarousel() {
  const slides = [
  {
    image: "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "From Past to Present",
    text: "A lone rowboat drifts lazily upon the tranquil waters, its reflection mirrored perfectly in the glassy surface below.",
  },
  {
    image: "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Unknown",
    text: "Embrace the mystery of abstract landscapes. Delve into the nuances of historical and mythological art.",
  },
  {
    image: "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "God of Truth",
    text: "Dive into the vibrant world of expressionism and timeless imagination.",
  },
  {
    image: "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dreams in Color",
    text: "A vibrant journey through surreal imagination and vivid storytelling.",
  },
  {
    image: "https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Silent Echoes",
    text: "Layers of history whisper through textured strokes and muted hues.",
  },
];


  return (
    
    <div className="bg-black py-16">
        <h1 className="text-center pb-20 text-6xl font-mono">Exhibition</h1>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        centeredSlides
        slidesPerView={3}
        spaceBetween={-100}
        loop
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        className="max-w-6xl mx-auto"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-80 object-cover "
              />
              <div className="p-5 text-white">
                <h3 className="text-lg font-bold mb-2">[{s.title}]</h3>
                <p className="text-sm opacity-80">{s.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
