import React from 'react';

interface SliderItemProps {
  imageSrc: string;
  linkHref: string;
}

const SliderItem = ({ imageSrc }: SliderItemProps) => {
  return (
    <div className="relative h-svh w-auto overflow-hidden transition-transform hover:scale-110">
      <div className="inset-0 grid items-center justify-center">{}</div>
      <img src={imageSrc} alt="" />
      {/* Whatsapp button container */}
    </div>
  );
};

export default SliderItem;
