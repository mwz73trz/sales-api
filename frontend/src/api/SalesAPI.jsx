import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFectch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const SalesAPI = {};

SalesAPI.getAllProduct = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}products/`));
};

SalesAPI.getSingleProduct = async (productId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}products/${productId}/`)
  );
};

SalesAPI.addProduct = async (productData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}products/`, productData)
  );
};

SalesAPI.updateProduct = async (productId, productData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}products/${productId}/`, productData)
  );
};

SalesAPI.deleteProduct = async (productId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}products/${productId}/`)
  );
};

export default SalesAPI;
