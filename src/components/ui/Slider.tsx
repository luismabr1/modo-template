import SliderItem from '@components/ui/SliderItem';

const slides = [
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_1-2.png',
    linkHref: 'https://modoccs.com/main/evento/14-martes-taco-tuesdays/',
  },
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
];

const Slider = () => {
  return (
    <div className="min-w-min justify-center overflow-x-hidden">
      <div className="animate-marquee m-10 flex flex-row gap-x-4">
        {slides.map((slide) => (
          <SliderItem key={slide.imageUrl} imageSrc={slide.imageUrl} linkHref={slide.linkHref}>
            {/* Your child elements here */}
          </SliderItem>
        ))}
      </div>
    </div>
  );
};

export default Slider;
