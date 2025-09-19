import Gallery from "../images/Gallery.svg"

export default function Hero() {
  return (
    <section className="relative z-20  text-white min-h-screen pb-20 flex flex-col items-center justify-center px-6">
      {/* Top Navigation */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4">
        <h1 className="text-sm tracking-widest">AETHERIUM GALLERY</h1>
        <nav className="space-x-6 text-sm uppercase">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Exhibitions</a>
          <a href="#" className="hover:underline">Collections</a>
          <a href="#" className="hover:underline">Artists</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <button className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer">Sign In</button>
      </header>

      {/* Main Hero Content */}
      <div className="text-center mt-28 relative">
        <h2 className="text-9xl font-bold font-playfair-display">BEYOND</h2>
        <span className="absolute text-pink-400 text-8xl font-extralight  rotate-12  italic top-0 left-1/2 -translate-x-1/2 -translate-y-10">
          <img src={Gallery} alt="" className="w-2xl"/>
        </span>
       {/* <img src="/Gallery.svg" alt="Gallery" />
<img src="/image 6.png" alt="Art 1" />
<img src="/image 7.png" alt="Art 2" /> */}

        <h2 className="text-7xl font-bold mt-2">TIME</h2>

        {/* Center Gray Box */}
        <div className="bg-gray-500 w-80 h-auto mx-auto mt-10">
            <img src="https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        {/* Floating side gray boxes */}
        <div className="absolute top-40 -left-28 rotate-[-10deg]">
          <div className="bg-gray-500 w-40 h-48">
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=745&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <p className="text-sm mt-2 text-left">A Jug of Sunshine <br /> Lucy Perry</p>
        </div>
        <div className="absolute top-40 -right-28 rotate-[10deg]">
          <div className="bg-gray-500 w-40 h-48">
            <img src="https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <p className="text-sm mt-2 text-left">Hilltown, revisited <br /> Laurie Rudling</p>
        </div>
        

        {/* Description */}
        <p className="text-gray-300 mt-10 max-w-md mx-auto text-sm">
          We celebrate art in all its forms, connecting artists and art lovers
          through unique exhibitions, vibrant events, and timeless collections.
        </p>

        {/* Explore Button */}
        <button className="mt-6 border border-white px-6  uppercase text-sm tracking-wider hover:bg-white hover:text-black transition">
          Explore
        </button>
      </div>
    </section>
  );
}
