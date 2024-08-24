import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import fetchImages from '../../services/api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Result } from './App.types';

function App() {
  const [results, setResults] = useState<Result[]>([]);
  const [query, setQuery] = useState<string>('sky');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Result | null>(null);

  useEffect(() => {
    if (!query) return;

    const getData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages({ query, page });
        setResults((prev) => [...prev, ...response.results]);
        setTotal(response.total);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery: string): void => {
    setQuery(newQuery);
    setResults([]);
    setPage(1);
  };

  const handleSetPage = (): void => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image: Result): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {isError === true && <ErrorMessage />}
      <ImageGallery results={results} onImageClick={openModal} />
      {isLoading && <Loader />}
      {total > results.length && !isLoading && (
        <LoadMoreBtn onClick={handleSetPage} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
