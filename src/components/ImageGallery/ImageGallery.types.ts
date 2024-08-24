import { Result } from '../App/App.types';

export interface ImageGalleryProps {
  results: Result[];
  onImageClick: (result: Result) => void;
}
