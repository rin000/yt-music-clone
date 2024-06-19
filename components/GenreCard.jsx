import { generateRandomHex } from '@/lib/utils';
import React from 'react';

const GenreCard = ({ genre }) => {
  const hex = generateRandomHex();
  return (
    <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-lg">
      <div className="h-full w-2 rounded-l-lg" style={{ backgroundColor: hex }}></div>
      <div className="px-4 flex justify-center items-center">{genre}</div>
    </div>
  );
};

export default GenreCard;
