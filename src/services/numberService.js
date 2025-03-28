import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

const api = axios.create({
  timeout: 500,

  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTU1MzY3LCJpYXQiOjE3NDMxNTUwNjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjllYjZmODY4LWU0YzItNGU4NS1iNmRiLTI5ZWM0NTViZGI3ZSIsInN1YiI6ImJhcmF0aG1haGVuZHJha3VtYXJAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI5ZWI2Zjg2OC1lNGMyLTRlODUtYjZkYi0yOWVjNDU1YmRiN2UiLCJjbGllbnRTZWNyZXQiOiJxaWhjak9pd0REb2l4VGJaIiwib3duZXJOYW1lIjoiUmFodWwiLCJvd25lckVtYWlsIjoiYmFyYXRobWFoZW5kcmFrdW1hckBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTM1MjJJVDUwMiJ9.0HxKUK_NsADS1yUMrONpoStvMKvzGVgoM8NGeAKQxAQ",
  },
});

export const fetchNumbers = async (numberType) => {
  try {
    const endpoint = getEndpoint(numberType);
    const response = await api.get(endpoint);
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching ${numberType} numbers:`, error);
    return [];
  }
};

const getEndpoint = (type) => {
  switch (type) {
    case "p":
      return `${BASE_URL}/primes`;
    case "f":
      return `${BASE_URL}/fibo`;
    case "e":
      return `${BASE_URL}/even`;
    case "r":
      return `${BASE_URL}/rand`;
    default:
      throw new Error("Invalid number type");
  }
};
