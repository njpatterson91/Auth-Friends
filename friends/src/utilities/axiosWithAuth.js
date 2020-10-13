import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("authorization");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000/api",
  });
};
