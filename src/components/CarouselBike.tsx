import { useState } from 'react';
import CardBike from './common/CardBike';
import { motion } from 'framer-motion';
import { useBikes } from './useBikes';

function CarouselBike() {
  const bikes = useBikes();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 2) % 3
      );

      return updatedIndexes;
    });
  };

  const positions = ['center', 'left', 'right'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left: { x: '-25%', scale: 0.8, zIndex: 2 },
    right: { x: '25%', scale: 0.8, zIndex: 1 },
  };

  return (
    <div className="relative flex h-[200px] justify-center gap-3 overflow-hidden md:h-[500px]">
      {bikes.map((bike, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{ width: '75%', position: 'absolute' }}
          onClick={() => {
            if (positionIndexes[index] === 1) handleBack();
            else if (positionIndexes[index] === bikes.length - 1) handleNext();
          }}
        >
          <CardBike bike={bike} size="mini" className="w-full" />
        </motion.div>
      ))}
    </div>
  );
}

export default CarouselBike;
