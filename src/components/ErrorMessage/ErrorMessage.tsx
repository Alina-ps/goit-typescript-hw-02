import { FC } from 'react';
import s from './ErrorMessage.module.css';

const ErrorMessage: FC = () => {
  return <h2 className={s.errorMessage}>Something went wrong! Try again...</h2>;
};

export default ErrorMessage;
