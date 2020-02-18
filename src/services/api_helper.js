import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

// AUTH

// LOGIN
export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem("authToken", resp.data.auth_token);
  localStorage.setItem("name", resp.data.user.name);
  localStorage.setItem("email", resp.data.user.email);
  return resp.data.user;
};

// REGISTER
export const registerUser = async registerData => {
  try {
    console.log("got here 1");
    const resp = await api.post("/signup", registerData);
    console.log("got here 2");
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem("authToken", resp.data.auth_token);
    localStorage.setItem("name", resp.data.user.name);
    localStorage.setItem("email", resp.data.user.email);
    return resp.data.user;
  } catch (e) {
    console.log("got here 3");
    console.log(e.response);
    if (e.response.status === 422) {
      return {
        errorMessage:
          "Email is already associated with a user, please login to continue"
      };
    }
  }
};

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
};

// GARAGE
// GET ALL GARAGES
export const indexGarages = async () => {
  const resp = await api.get("/garages");
  return resp.data;
};

//POST THE GARAGES
export const postGarage = async postData => {
  const resp = await api.post("/garages", postData);
  return resp.data;
};

// UPDATE GARAGES
export const putGarage = async (id, postData) => {
  const resp = await api.put(`/garages/${id}`, postData);
  const garage = { id: id, title: resp.data.data };
  return garage;
};
