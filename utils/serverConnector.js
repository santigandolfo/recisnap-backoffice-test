import axios from "axios";

const saveNewUser = async (body) => {
  const response = await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, body)
    .then((response) => {
      console.log(response);
      return response.code == 201;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

const getUserList = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export { saveNewUser, getUserList };