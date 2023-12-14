import CardBike from '../components/common/CardBike';
import hero from '/hero-tours.webp';
import { BICYCLE_EN, BICYCLE_ID } from '../constants/Bicycles';
import { useTranslation } from 'react-i18next';

function PageBikes() {
  const { i18n } = useTranslation('bikes');
  const [t] = useTranslation('bikes');
  const bikes = i18n.language === 'id' ? BICYCLE_ID : BICYCLE_EN;

  return (
    <main>
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
          <div className="flex w-fit flex-col gap-2 text-white md:items-end">
            <h1>{t('hero title')}</h1>
            <p>{t('hero subtitle')}</p>
          </div>
        </div>
      </section>
      <section
        className={`flex w-full flex-col items-center bg-white p-4 pb-16 md:p-10`}
      >
        <div className="align-center grid w-full max-w-screen-2xl grid-cols-1 justify-items-center gap-x-4 gap-y-5 pb-16 pt-8 md:grid-cols-2 md:pb-32 lg:grid-cols-4">
          {bikes.map((bike) => (
            <CardBike bike={bike} size="full" key={`bike-${bike.code}`} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PageBikes;
