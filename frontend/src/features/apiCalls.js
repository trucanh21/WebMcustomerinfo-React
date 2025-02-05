import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/contacts/";
const ADDRESS_API_BASE_URL = "http://localhost:3000/api";
const ADDRESS_API_BASE_URL_test = "http://localhost:3000/api";

// ----------------------- API INVOICE --------------------

export const fetchInvoice = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/invoice`);
    return response.data.invoices;
  } catch (error) {
    console.error("Error fetching invoicess", error);
    throw error;
  }
};

export const addInvoice = async (invoice) => {
  try {
    const response = await axios.post(`${ADDRESS_API_BASE_URL}/invoice`, invoice);
    return response.data;
  } catch (error) {
    console.error('Error adding invoice', error);
    throw error;
  }
};

// Update contract invoice status
export const updateContractInvoice = async (HD_ID) => {
  try {
    const response = await axios.put(`${ADDRESS_API_BASE_URL}/contract/${HD_ID}`);
    return response.data;
  } catch (error) {
    console.error('Error updating contract invoice status', error);
    throw error;
  }
};

export const updateContractMaintenance = async (HD_ID) => {
  try {
    const response = await axios.put(`${ADDRESS_API_BASE_URL}/contract/maintenance/${HD_ID}`);
    return response.data;
  } catch (error) {
    console.error('Error updating contract invoice status', error);
    throw error;
  }
};

// ----------------------- API MAINTENANCE --------------------

export const fetchMaintenance = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/maintenance`);
    return response.data.maintenances;
  } catch (error) {
    console.error("Error fetching maintenances", error);
    throw error;
  }
};

export const addMaintenance = async (maintenance) => {
  try {
    const response = await axios.post(`${ADDRESS_API_BASE_URL}/maintenance`, maintenance);
    return response.data;
  } catch (error) {
    console.error('Error adding maintenance', error);
    throw error;
  }
};


// ----------------------- API CUSTOMER --------------------
export const fetchCustomers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.customers;
  } catch (error) {
    console.error("Error fetching customers", error);
    throw error;
  }
};

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(API_BASE_URL, customer);
    return response.data;
  } catch (error) {
    console.error("Error adding customer", error);
    throw error;
  }
};

export const updateCustomer = async (id, customer) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${id}`, customer);
    return response.data;
  } catch (error) {
    console.error("Error updating customer", error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting customer", error);
    throw error;
  }
};

//auth

export const authRegister = async (form) => {
  try {
    console.log("hihi");
    const response = await axios.post(
      `${ADDRESS_API_BASE_URL_test}/auth/register`,
      form
    );
    // return response.data.products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const authLogin = async (form) => {
  try {
    const response = await axios.post(
      `${ADDRESS_API_BASE_URL_test}/auth/login`,
      form
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

// ----------------------- API PRODUCT --------------------

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/product`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};


export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${ADDRESS_API_BASE_URL}/product`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product', error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${ADDRESS_API_BASE_URL}/product/${id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error updating product', error);
    throw error;
  }
};

// ----------------------- API Tỉnh thành --------------------

export const fetchDistricts = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS_API_BASE_URL_test}/districts/index`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
  }}

export const fetchProvinces = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/provinces`);
    return response.data;
  } catch (error) {
    console.error("Error fetching provinces", error);
    throw error;
  }
};

export const fetchDistrictsByProvince = async (provinceId) => {
  try {
    const response = await axios.get(
      `${ADDRESS_API_BASE_URL}/districts?province_id=${provinceId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching districts", error);
    throw error;
  }
};

export const fetchWardsByDistrict = async (districtId) => {
  try {
    const response = await axios.get(
      `${ADDRESS_API_BASE_URL}/wards?district_id=${districtId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching wards", error);
    throw error;
  }
};

// ----------------------- API CONTRACTS --------------------

export const fetchContracts = async ({ fromDate, toDate, fromDateInvoice, toDateInvoice, KH_Ten }) => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/contract`, {
      params: { fromDate, toDate, fromDateInvoice, toDateInvoice, KH_Ten }
    });
    return response.data.contracts;
  } catch (error) {
    console.error('Error fetching contracts', error);
    throw error;
  }
};

export const addContract = async (contract) => {
  try {
    const response = await axios.post(`${ADDRESS_API_BASE_URL}/contract`, contract);
    return response.data;
  } catch (error) {
    console.error('Error adding contract', error);
    throw error;
  }
};

export const fetchTypeContract = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/typecontract`);
    return response.data.typeContracts;
  } catch (error) {
    console.error('Error fetching typeContracts', error);
    throw error;
  }
};


