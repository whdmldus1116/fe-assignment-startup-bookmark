import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const getAuthHeaders = (): { Authorization?: string } => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...getAuthHeaders(),
    'Content-Type': 'application/json',
  },
});
