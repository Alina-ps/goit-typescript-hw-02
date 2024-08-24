import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: FC<ImageGalleryProps> = ({ results, onImageClick }) => {
  if (results.length === 0) {
    return null;
  }

  const uniqueResults = Array.from(
    new Map(results.map((result) => [result.id, result])).values()
  );

  return (
    <ul className={s.gallery}>
      {uniqueResults.map((result) => (
        <li className={s.galleryItem} key={result.id}>
          <ImageCard
            src={result.urls.small}
            alt={result.alt_description}
            onClick={() => onImageClick(result)}
            result={result}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
