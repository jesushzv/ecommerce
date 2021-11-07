//Get all items
export const itemsAPI = "https://ecomerce-master.herokuapp.com/api/v1/item";
export const signup = "https://ecomerce-master.herokuapp.com/api/v1/signup";
export const login = "https://ecomerce-master.herokuapp.com/api/v1/login";
export const getUserMe = "https://ecomerce-master.herokuapp.com/api/v1/user/me";

//Dummy data
export const dummyLoginTrue = {
  email: "danylo@gmail.com",
  password: "gatito123",
};

export const dummyLoginFalse = {
  email: "stone@cold.con",
  password: "sucker",
};

export const dummySignup = {
  first_name: "Danylo",
  last_name: "Koval",
  email: "dany@koval.com",
    password: "gatito123",
    birth_date: "12/12/12",
    gender:'M',
}
