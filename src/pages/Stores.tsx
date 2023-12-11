import hero from '/hero-store.webp';

function PageStores() {
  return (
    <main className="pb-36">
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
        className={`flex w-full flex-col items-center gap-4 bg-white p-4 pb-16 md:p-10`}
      >
        <h2>Locations</h2>
        <p>
          We have multiple stores across the city. Ensuring you can pickup your
          ride easily
        </p>
        <div className="grid w-full max-w-7xl grid-cols-2"></div>
      </section>
    </main>
  );
}

export default PageStores;
