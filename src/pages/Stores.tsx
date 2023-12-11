import hero from '/hero-store.webp';
import store_1 from '/store-1.jpg';

function PageStores() {
  return (
    <main className="flex flex-col items-center pb-36">
      <style>{`
    .hero_image {
      background: linear-gradient(180deg, rgb(0,0,0,0.8) 0%, rgb(0,0,0,0.6) 90%), url(${hero}) no-repeat;
      background-size: cover;
      background-position: top left;
    }
    @media screen and (min-width: 1024px){
      .hero_image {
        background: linear-gradient(90deg, rgb(127,127,127,9%) 0%, rgb(0,0,0,0.85) 61%), url(${hero}) no-repeat;
        background-size: cover;
        background-position: top left;
      }
    }
  `}</style>
      <section
        className={`hero_image flex h-[250px] w-full flex-col p-4 md:h-[500px] md:items-end md:justify-center md:p-10 md:pr-[15%]`}
      >
        <div className="flex w-full max-w-screen-2xl md:justify-end">
          <div className="flex w-fit flex-col gap-2 text-white md:items-end">
            <h1>Our Stores</h1>
            <p>Where to find us</p>
          </div>
        </div>
      </section>
      <section
        className={`flex w-full max-w-3xl flex-col items-center gap-4 bg-white p-4 pb-16 md:p-10`}
      >
        <h2>Locations</h2>
        <p className="self-start">
          We have multiple stores across the city. Ensuring you can pickup your
          ride easily
        </p>
        <div className="mt-8 flex flex-col items-start justify-start gap-12 self-start pl-4">
          <div className="grid grid-cols-[7fr,3fr]">
            <h3 className="before:top relative col-span-2 before:absolute before:-left-4 before:h-full before:w-1 before:bg-almost_black">
              Station Store
            </h3>
            <div className="flex flex-col gap-1">
              <p>In front of the Train Station</p>
              <span className="flex flex-col md:flex-row">
                Address
                <address>Station Street No.13, Left Side, Brick</address>
              </span>
              <span className="flex flex-col md:flex-row">
                Phone
                <address>123-4567</address>
              </span>
            </div>
            <img src={store_1} alt="store" className="w-50 h-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageStores;
