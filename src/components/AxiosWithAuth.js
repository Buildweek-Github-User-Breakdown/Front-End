import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

<<<<<<< HEAD
  return axios.create({
    baseURL: "https://github-user-breakdown.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      Authority: `${token}`
    }
  });
};
=======
    return axios.create({
        baseURL: 'https://github-user-breakdown.herokuapp.com/',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    })
}
>>>>>>> a0da1893b1d927146628babf98be7c137133ef77
