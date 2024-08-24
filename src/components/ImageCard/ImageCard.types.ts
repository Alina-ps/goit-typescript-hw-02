import { Result } from '../App/App.types';

export interface ImageCardProps {
  src: string;
  alt: string;
  onClick: (result: Result) => void;
  result: Result;
}
