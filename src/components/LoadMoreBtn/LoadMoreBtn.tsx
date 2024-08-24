import { FC } from 'react';
import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <>
      <button className={s.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
