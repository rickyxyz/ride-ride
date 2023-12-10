import Button from './components/common/Button';
import CardBike from './components/common/CardBike';
import hero_desktop from '/hero-desktop-home.webp';
import hero_mobile from '/hero-mobile-home.webp';
import bike from '/bike-1.png';
import town from '/tour-town.jpg';
import lake from '/tour-lake.jpg';

function App() {
  const dividerClassBefore =
    'relative lg:before:absolute lg:before:-top-12 lg:before:left-0 lg:before:h-24 lg:before:w-full lg:before:skew-y-3 pt-12';
  const dividerClassAfter =
    'relative lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:h-24 lg:after:w-full lg:after:skew-y-3 pt-12';

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
              // eslint-disable-next-line no-console
              onClick={() => console.log('a')}
              text="Rent a bike"
              className="mt-6"
            />
          </div>
        </div>
      </section>
      <section
        className={`p-10 pb-16 ${dividerClassBefore} flex w-full flex-col items-center bg-white lg:before:bg-white`}
      >
        <div className="grid w-full max-w-screen-2xl gap-x-4 gap-y-10 py-10 lg:grid-cols-[4fr,6fr]">
          <div>
            <h2 className="relative mb-2 text-orange before:absolute before:-left-5 before:top-0 before:h-full before:w-2 before:bg-orange">
              Bike Rental
            </h2>
            <span className="text-big">Find your bike</span>
            <p>
              With a diverse range of models in various sizes and types, we have
              the perfect bike for everyone.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center gap-3">
            <CardBike
              code="mb1"
              name="climb"
              size="mini"
              image={bike}
              description="Bike"
              price={1}
              className="absolute -left-10 top-1/2 z-20 -translate-y-1/2 scale-75 blur-[2px]"
            />
            <CardBike
              code="mb1"
              name="center"
              size="mini"
              image={bike}
              description="Bike"
              price={1}
              className="z-30 w-4/6"
            />
            <CardBike
              code="mb1"
              name="climb"
              size="mini"
              image={bike}
              description="Bike"
              className="absolute -right-10 top-1/2 z-20 -translate-y-1/2 scale-75 blur-[2px]"
              price={1}
            />
            <ol className="flex flex-row items-center gap-2">
              <li className="h-2 w-2 rounded-full bg-black" />
              <li className="h-3 w-3 rounded-full bg-orange" />
              <li className="h-2 w-2 rounded-full bg-black" />
            </ol>
          </div>
        </div>
      </section>
      <section
        className={`p-10 ${dividerClassBefore} ${dividerClassAfter} flex w-full flex-col items-center bg-ghost_white lg:before:bg-ghost_white lg:after:bg-ghost_white`}
      >
        <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-x-4 gap-y-10 py-10 lg:grid-cols-[4fr,6fr]">
          <div>
            <h2 className="relative mb-2 text-orange before:absolute before:-left-5 before:top-0 before:h-full before:w-2 before:bg-orange">
              Guided Tour
            </h2>
            <span className="text-big">Discover new area</span>
            <p>
              Embark on an unforgettable 2-hour city tour with our expert guide,
              exploring both iconic landmarks and hidden gems, such as:
              <ul className="my-2 ml-8 list-disc">
                <li>The Majestic Tower</li>
                <li>The Serene Deep Lake</li>
                <li>The Lush Green Park</li>
              </ul>
              Experience the city&apos;s beauty like never before!
            </p>
          </div>
          <div className="relative flex flex-row items-center justify-center">
            <div className="z-40 lg:-translate-x-1 lg:translate-y-20">
              <img
                src={town}
                alt="tour of the city"
                className="w-10/12 overflow-hidden rounded-xl lg:h-[500px] lg:w-auto"
              />
            </div>
            <div className="absolute translate-x-[10vw] scale-90 lg:relative lg:-translate-x-32 lg:-translate-y-10 lg:scale-100">
              <img
                src={lake}
                alt="tour of the bridge"
                className="w-10/12 overflow-hidden rounded-xl blur-[2px] lg:h-[600px] lg:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`mt-16 flex w-full flex-col items-center bg-white p-10 pb-16 lg:before:bg-white`}
      >
        <div className="grid h-[900px] w-full max-w-screen-2xl grid-cols-1 gap-x-4 gap-y-10 py-10 lg:grid-cols-[4fr,6fr]">
          <div>
            <h2 className="relative mb-2 text-orange before:absolute before:-left-5 before:top-0 before:h-full before:w-2 before:bg-orange">
              Our Shops
            </h2>
            <span className="text-big">
              Book online,
              <br />
              Pickup anywhere
            </span>
            <p>
              Ready to roll? Book your bike online and grab it at any of our
              store.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
