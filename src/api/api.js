import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4567';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchContacts() {
  const response = await axios.get(`contacts`);
  return response.data;
}

export async function postContact(newContact) {
  const response = await axios.post(`contacts`, newContact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}

export async function patchContact(id) {
  const response = await axios.patch(`contacts/${id}`);
  return response.data;
}

export async function postSignUp(newUser) {
  const { data } = await axios.post(`users/signup`, newUser);
  token.set(data.token);
  return data;
}

export async function postLogIn(user) {
  const { data } = await axios.post(`users/login`, user);
  token.set(data.token);
  return data;
}

export async function postLogOut() {
  const { data } = await axios.post(`users/logout`);
  token.unset();
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get(`users/current`);
  return data;
}
