import axios from 'axios';
import { Response, Params } from './types';

export const fetchImages = async ({
  query,
  page = 1,
  per_page = 15,
}: Params): Promise<Response> => {
  const params: Params = {
    query,
    page,
    per_page,
    client_id: '_soVHS32Pd5zH1PgNHtQg0IhnnU-LSc2Z1UR8qS4r1g',
  };

  const response = await axios.get<Response>(
    `https://api.unsplash.com/search/photos`,
    {
      params,
    }
  );

  return response.data;
};

export default fetchImages;
