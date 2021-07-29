import React from 'react';

export interface FilmImageProps {
  cover: string | undefined;
  className?: string;
}

export const FilmImage: React.FC<FilmImageProps> = ({ cover, className }) => {
  if (!cover) {
    return null;
  }
  return <img src={`/images/${cover}`} alt="Film item" className={className} />;
};
