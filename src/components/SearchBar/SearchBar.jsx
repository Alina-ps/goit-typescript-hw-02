import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = { query: "" };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.query) {
      toast.error("Please enter a search term.");
      return;
    }
    setQuery(values.query);
    resetForm();
  };

  return (
    <header className={s.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.searchForm}>
          <Field
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
