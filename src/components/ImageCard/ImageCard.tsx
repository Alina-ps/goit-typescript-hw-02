import s from './ImageCard.module.css';
import { Result } from '../App/App.types';
import { FC, MouseEvent } from 'react';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({ src, alt, onClick, result }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    onClick(result);
  };
  return (
    <div onClick={handleClick}>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
