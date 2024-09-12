import React from 'react';

interface SliderItemProps {
  imageSrc: string;
  linkHref: string;
}

const SliderItem = ({ imageSrc, linkHref }: SliderItemProps) => {
  return (
    <div
      className="relative min-h-[375px] w-1/2 overflow-hidden bg-cover bg-center px-5 transition-transform hover:scale-110"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Add additional elements inside .sa_hover_fullslide */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">{}</div>

      {/* Whatsapp button container */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Reservar
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
