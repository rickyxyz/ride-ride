import Button from './components/common/Button';
import hero_desktop from '/hero-desktop-home.webp';
import hero_mobile from '/hero-mobile-home.webp';

function App() {
  const dividerClass =
    'lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:h-28 lg:after:w-full lg:after:skew-y-3';

  return (
    <main>
      <style>{`
        .hero_image {
          background: linear-gradient(180deg, rgba(251,251,255,0.6) 0%, rgba(172,172,172,0.9) 100%), url(${hero_mobile}) no-repeat;
          background-size: 100% auto;
          background-position: top right;
        }
        @media screen and (min-width: 1024px){
          .hero_image {
            background: linear-gradient(90deg, rgba(251,251,255,0.8) 50%, rgba(0,0,0,0.3) 81%), url(${hero_desktop}) no-repeat;
            background-position: right;
          }
        }
      `}</style>
      <section
        className={`hero_image ${dividerClass} relative bg-contain bg-no-repeat p-5 md:h-[750px] md:px-[11%] md:py-[9%] lg:after:bg-white`}
      >
        <div className="flex w-max flex-col items-end gap-3">
          <h1 className="md:font-hero font-hero-sm">
            Explore the city
            <br />
            with a bike
          </h1>
          <p>Best prices, best bikes</p>
          <Button
            onClick={() => console.log('a')}
            text="Rent a bike"
            className="mt-6"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
