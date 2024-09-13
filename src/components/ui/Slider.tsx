import SliderItem from '@components/ui/SliderItem';

const slides = [
  {
    id: 1,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_1-2.png',
    linkHref: 'https://modoccs.com/main/evento/14-martes-taco-tuesdays/',
  },
  {
    id: 2,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    id: 3,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    id: 4,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    id: 5,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
  {
    id: 6,
    imageUrl: 'https://modoccs.com/main/wp-content/uploads/2024/08/Web_2-2.png',
    linkHref: 'https:////modoccs.com/main/evento/15-miercoles-mododj/',
  },
];

const Slider = () => {
  return (
    <div className="justify-center overflow-x-hidden">
      <div className="animate-marquee m-10 flex min-h-[500] flex-row gap-x-4">
        {slides.map((slide) => (
          <div className="flex w-full flex-col" key={slide.id}>
            <SliderItem imageSrc={slide.imageUrl} linkHref={slide.linkHref} />
            <a
              href={slide.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit items-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Reservar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
