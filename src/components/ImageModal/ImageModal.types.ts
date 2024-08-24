import { Result } from '../App/App.types';

export interface ImageModalProps {
  image: Result | null;
  isOpen: boolean;
  closeModal: () => void;
}
