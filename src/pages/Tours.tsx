import CardTour from '../components/CardTour';
import { useTours } from '../components/useTours';
import hero from '/hero-tour.webp';

function PageTours() {
  const tours = useTours();

  return (
    <main className="mb-12 md:mb-24">
      <style>{`
        .hero_image {
          background: linear-gradient(180deg, rgb(0,0,0,0.8) 0%, rgb(0,0,0,0.6) 90%), url(${hero}) no-repeat;
          background-size: cover;
          background-position: bottom left;
        }
        @media screen and (min-width: 1024px){
          .hero_image {
            background: linear-gradient(90deg, rgb(127,127,127,9%) 0%, rgb(0,0,0,0.85) 61%), url(${hero}) no-repeat;
            background-size: cover;
            background-position: bottom left;
          }
        }
      `}</style>
      <section
        className={`hero_image flex h-[250px] w-full flex-col p-4 md:h-[500px] md:items-end md:justify-center md:p-10 md:pr-[15%]`}
      >
        <div className="flex w-full max-w-screen-2xl md:justify-end">
          <div className="flex w-fit flex-col gap-2 text-right text-white md:items-end">
            <h1>Guided Tours</h1>
            <p>
              Don&apos;t know where to go? <br />
              Join our tour
            </p>
          </div>
        </div>
      </section>
      <section
        className={`flex w-full flex-col items-center bg-white p-4 pb-16 md:p-10`}
      >
        <div className="align-center grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <CardTour key={`tour-${tour.code}`} tour={tour} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PageTours;
