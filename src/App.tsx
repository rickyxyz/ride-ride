import Button from './components/common/Button';
import hero_desktop from '/hero-desktop-home.webp';
import hero_mobile from '/hero-mobile-home.webp';

function App() {
  const dividerClass =
    'relative lg:before:absolute lg:before:-top-12 lg:before:left-0 lg:before:h-24 lg:before:w-full lg:before:skew-y-3 pt-12';

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
        className={`hero_image flex h-[300px] w-full flex-col items-center bg-contain bg-no-repeat p-4 md:h-[850px] md:p-10 md:pt-[9%]`}
      >
        <div className="w-full max-w-screen-2xl">
          <div className="flex w-fit flex-col items-end">
            <h1>
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
        </div>
      </section>
      <section
        className={`p-10 pb-16 ${dividerClass} flex w-full flex-col items-center bg-white lg:before:bg-white `}
      >
        <div className="grid w-full max-w-screen-2xl grid-cols-2">
          <div>
            <h2 className="relative text-orange before:absolute before:-left-5 before:top-0 before:h-full before:w-2 before:bg-orange">
              Rent a Bike Now
            </h2>
            <span className="text-big">A Bike for Everyone</span>
            <p>
              Discover your ideal ride at our bicycle rental shop. With a
              diverse range of models in various sizes and types, we have the
              perfect bike for everyone. Find the one that suits your needs and
              start your biking journey with us!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
