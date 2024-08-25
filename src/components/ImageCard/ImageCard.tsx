import s from './ImageCard.module.css';
import { FC } from 'react';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({ src, alt, onClick, result }) => {
  const handleClick = (): void => {
    onClick(result);
  };
  return (
    <div onClick={handleClick}>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
