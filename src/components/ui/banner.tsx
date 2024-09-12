const Banner = () => {
  return (
    <>
      <section className="relative flex h-screen flex-col items-center justify-center text-center text-white ">
        <div className="absolute left-0 top-0 size-full overflow-hidden">
          <video autoPlay muted loop className="absolute min-h-full min-w-full object-cover">
            <source
              src="https://modoccs.com/main/wp-content/uploads/2023/05/NewvideoHome-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/*             <div className="video-content space-y-2 z-10">
                        <h1 className="font-light text-6xl">full Hero Video</h1>
                        <h3 className="font-light text-3xl">with TailwindCSS</h3>
                    </div> */}
      </section>
      <div className="relative h-24 overflow-hidden bg-black">
        {' '}
        <img
          src="https://modoccs.com/main/wp-content/uploads/2024/08/BANNERVERANO.jpg"
          alt="Imagen en movimiento"
          className="animate-marquee absolute"
        />
      </div>
    </>
  );
};

export default Banner;
