import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Heading */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair-display font-light leading-tight">
            Crafted by <span className="italic"> <br />Artist's</span>
            <br />
            Curated with <span className="font-light">—</span> <span className="italic">Soul</span>
          </h1>
        </div>

        {/* Right Column - Text and Image */}
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col space-y-4 font-light text-zinc-300">
            <p className="text-sm md:text-base">
              Each piece in the <span className="italic">Aetherium Gallery</span> collection is more than a work of art, it is a story.
            </p>
            <p className="text-sm md:text-base">
              A moment in time.
            </p>
          </div>
          <div className="w-full h-auto">
            {/* The image component would go here */}
            <img 
              src="https://images.unsplash.com/photo-1667028987675-327949043122?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="A handcrafted art piece" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm md:text-base font-light text-zinc-300">
            Aetherium Gallery is a sanctuary for rare and meaningful creations born from raw natural elements, refined by skilled hands, and shared through an annual celebration of artistry. We collect unique, hand-crafted pieces shaped by talented artists who turn natural materials into quiet masterpieces each one meant to be felt, not just seen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;