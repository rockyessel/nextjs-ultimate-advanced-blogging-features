import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_OUTERBASE_API_URL!;

export const findUserByEmail = async (email: string) => {
  const { data } = await axios.get(`${baseURL}/email?email=${email}`);

  if (data.success) {
    return data;
  }
};

export const createUserUsingProvider = async (formData: any) => {
  const { data } = await axios.get(`${baseURL}/users`, {
    headers: { 'Content-Type': 'application/json' },
    data: { ...formData },
  });

  if (data.success) {
    return data;
  }
};
export const createUserUsingCredential = async (formData: any) => {
  const { data } = await axios.get(`${baseURL}/users`, {
    headers: { 'Content-Type': 'application/json' },
    data: { ...formData },
  });

  if (data.success) {
    return data;
  }
};
