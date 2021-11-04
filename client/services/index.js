import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;


export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const surveyResults = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const findUserByName = async (username) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/${username}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export const createSurvey = async (surveyAnswers) => {
  try {
    const response = await axios.post(`${apiURL}/api/v1/users`, surveyAnswers);
  } catch (error) {
    console.error(error.message);
  }
}

// export const deleteComment = async (id) => {
//   try {
//     await axios.delete(`${apiURL}/api/comments/${id}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// };