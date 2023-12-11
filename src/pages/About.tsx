import hero from '/hero-about.webp';
import sideImage from '/about-us.webp';

function PageAbout() {
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
            <h1>About Us</h1>
            <p>Here is our story</p>
          </div>
        </div>
      </section>
      <section
        className={`flex w-full flex-col items-center gap-12 bg-white p-4 pb-16 md:p-10`}
      >
        <h2>Who are we?</h2>
        <div className="grid w-full max-w-7xl grid-cols-1 justify-items-center md:grid-cols-[5fr,4fr]">
          <img
            src={sideImage}
            alt=""
            className="hidden h-4/6 rounded-xl md:block"
          />
          <div className="flex flex-col gap-5 text-justify">
            <p>Hey there, fellow riders!</p>
            <p>
              I&apos;m John Smith, co-founder of &quot;Ride Ride&quot; a vibrant
              hub born out of our love for bikes and our incredible city. When
              my buddy William Turner and I started this journey, we envisioned
              more than just a bike rental shop; we wanted to create a space
              where the thrill of cycling and the spirit of our city could come
              together.
            </p>
            <p>
              At &quot;Ride Ride,&quot; we&apos;re not just renting out bikes;
              we&apos;re inviting you to join us on a journey through the heart
              of our urban paradise. As passionate cyclists, we&apos;ve
              carefully chosen each bike in our fleet to ensure you experience
              the city in the most exhilarating way possible.
            </p>
            <p>
              Our story is one of exploration, shared joy, and a commitment to
              sustainability. We believe that riding a bike is more than just a
              mode of transport it&apos;s a celebration of freedom, a connection
              to the surroundings, and a chance to uncover hidden gems in every
              street.
            </p>
            <p>
              Beyond rentals, we offer curated guided tours that bring the city
              to life. Whether you&apos;re a local looking to rediscover
              familiar streets or a traveler seeking an authentic adventure,
              &quot;Ride Ride&quot; is your ticket to an unforgettable
              experience.
            </p>
            <p>
              Join us, not just as customers, but as part of the &quot;Ride
              Ride&quot; family. Let&apos;s share the thrill of cycling and
              explore the soul of our city together. Welcome to the ride of a
              lifetime!
            </p>
            <p>See you on the streets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageAbout;
