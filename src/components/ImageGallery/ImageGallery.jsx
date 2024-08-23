import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ results = [], onImageClick }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <ul className={s.gallery}>
      {results.map((result) => (
        <li className={s.galleryItem} key={result.id}>
          <ImageCard
            src={result.urls.small}
            alt={result.alt_description}
            onClick={() => onImageClick(result)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
