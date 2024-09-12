import React from 'react';

const Banner = () => {
 
  return (
    <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
                    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                        <video autoPlay muted loop className="min-w-full min-h-full absolute object-cover" >
                            <source  src="https://modoccs.com/main/wp-content/uploads/2023/05/NewvideoHome-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip-Compressed-with-FlexClip.mp4" type="video/mp4"  />
                        </video>
                    </div>
        {/*             <div className="video-content space-y-2 z-10">
                        <h1 className="font-light text-6xl">full Hero Video</h1>
                        <h3 className="font-light text-3xl">with TailwindCSS</h3>
                    </div> */}
        </section>
        <div className="relative overflow-hidden h-24 bg-black"> <img src="https://modoccs.com/main/wp-content/uploads/2024/08/BANNERVERANO.jpg" alt="Imagen en movimiento" className="absolute animate-marquee" />
        </div>
                
    </>

  )
}




export default Banner;