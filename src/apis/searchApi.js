export const getUsers = () => {
  return fetch("https://reqres.in/api/users").then((resp) => resp.json());
};
