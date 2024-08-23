import axios from "axios";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      client_id: "_soVHS32Pd5zH1PgNHtQg0IhnnU-LSc2Z1UR8qS4r1g",
    },
  });

  return response.data;
};

export default fetchImages;
