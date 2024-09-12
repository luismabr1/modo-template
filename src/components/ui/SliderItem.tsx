import React from 'react';



const SliderItem = ({ imageSrc, linkHref, children }) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center min-h-[375px] w-1/2 px-5 hover:scale-110 transition-transform"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Add additional elements inside .sa_hover_fullslide */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {children}
      </div>

      {/* Whatsapp button container */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Reservar
        </a>
      </div>
    </div>
  );
};

export default SliderItem;