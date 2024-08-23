import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("sky");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page);
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

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setResults([]);
    setPage(1);
  };

  const handleSetPage = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
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
