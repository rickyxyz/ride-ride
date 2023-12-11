import { ButtonLink } from '../components/common/Button';
import hero_desktop from '/hero-desktop-home.webp';
import hero_mobile from '/hero-mobile-home.webp';
import store from '/stores.webp';
import town from '/tour-town.webp';
import lake from '/tour-lake.webp';
import CarouselBike from '../components/CarouselBike';

function PageHome() {
  const dividerClassBefore =
    'relative lg:before:absolute lg:before:-top-12 lg:before:left-0 lg:before:h-24 lg:before:w-full lg:before:skew-y-3 pt-12';
  const dividerClassAfter =
    'relative lg:after:absolute lg:after:-bottom-12 lg:after:left-0 lg:after:h-24 lg:after:w-full lg:after:skew-y-3 pt-12';
  const sectionStyle = 'p-10 pb-16 flex w-full flex-col items-center';
  const contentStyle =
    'grid w-full max-w-screen-2xl gap-x-4 gap-y-10 py-10 lg:grid-cols-[4fr,6fr]';
  const sectionHeaderStyle =
    'relative mb-2 text-orange before:absolute before:-left-5 before:top-0 before:h-full before:w-2 before:bg-orange';

  const heroSection = (
    <>
      <style>{`
  .hero_image {
    background: linear-gradient(180deg, rgba(251,251,255,0.6) 0%, rgba(172,172,172,0.9) 100%), url(${hero_mobile}) no-repeat;
    background-size: 100% auto;
    background-position: top right;
  }
  .store_image {
    background: white;
    background-size: 100% auto;
    background-position: top right;
    background-size: cover;
  }
  @media screen and (min-width: 1024px){
    .hero_image {
      background: linear-gradient(90deg, rgba(251,251,255,0.8) 50%, rgba(0,0,0,0.3) 81%), url(${hero_desktop}) no-repeat;
      background-position: right;
    }
    .store_image {
      background: linear-gradient(180deg, rgba(251,251,255,0.2) 0%, rgba(172,172,172,0.2) 100%), url(${store}) no-repeat;
      background-size: 100% auto;
      background-position: top right;
      background-size: cover;
    }
  }
`}</style>
      <section
        className={`hero_image flex h-[300px] w-full flex-col items-center bg-contain bg-no-repeat p-4 md:h-[850px] md:p-10 md:pt-[9%]`}
      >
        <div className="w-full max-w-screen-2xl">
          <div className="flex w-fit flex-col items-end gap-2">
            <h1>
              Explore the city
              <br />
              with a bike
            </h1>
            <p>Best prices, best bikes</p>
            <ButtonLink text="Rent a bike" className="mt-6" target={'/bike'} />
          </div>
        </div>
      </section>
    </>
  );

  const bikeSection = (
    <section
      className={`${sectionStyle} ${dividerClassBefore} before:bg-white`}
    >
      <div className={`${contentStyle}`}>
        <div className="flex flex-col gap-2">
          <h2 className={`${sectionHeaderStyle}`}>Bike Rental</h2>
          <span className="text-big">Find your bike</span>
          <p>
            With a diverse range of models in various sizes and types, we have
            the perfect bike for everyone.
          </p>
          <ButtonLink
            text={'See all bikes'}
            target={'/bike'}
            className="mt-8 self-start"
          />
        </div>
        <CarouselBike />
      </div>
    </section>
  );

  const tourSection = (
    <section
      className={`${sectionStyle} ${dividerClassBefore} ${dividerClassAfter} bg-ghost_white lg:before:bg-ghost_white lg:after:bg-ghost_white`}
    >
      <div className={`${contentStyle}`}>
        <div className="flex flex-col gap-2">
          <h2 className={`${sectionHeaderStyle}`}>Guided Tour</h2>
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
          <ButtonLink
            text={'See all tours'}
            target={'/tour'}
            className="mt-8 self-start"
          />
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
  );

  const storeSection = (
    <section className={`store_image ${sectionStyle} md:pt-32`}>
      <div className={`${contentStyle}`}>
        <div className="flex flex-col gap-2">
          <h2 className={`${sectionHeaderStyle}`}>Our Shops</h2>
          <span className="text-big">
            Book online,
            <br />
            Pickup anywhere
          </span>
          <p>
            Ready to roll? Book your bike online and grab it at any of our
            store.
          </p>
          <ButtonLink
            text={'Book Now'}
            target={'/bike'}
            className="mt-8 self-start"
          />
        </div>
      </div>
    </section>
  );

  return (
    <main>
      {heroSection}
      {bikeSection}
      {tourSection}
      {storeSection}
    </main>
  );
}

export default PageHome;
