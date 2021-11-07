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

// GET all users
export const surveyResults = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// GET languages
export const getAllLanguages = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/languages`)
    return response.data;
  } catch (error) {
    console.error(error.message)
  }
}
// GET language by id
export const findLanguageById = async (langId) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/languages/${langId}`)
    return response.data;
  } catch (error) {
    console.error(error.message)
  }
}

// GET user by id
export const findUserByName = async (usersName) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/${usersName}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
// POST user 
export const userSignUp = async (userData) => {
  try {
    await axios.post(`${apiURL}/api/v1/users/`, userData)
  } catch (error) {
    console.error(error.message)
  }
}

// POST user survey
export const createSurvey = async (surveyAnswers) => {
  try {
    const response = await axios.post(`${apiURL}/api/v1/users/`, surveyAnswers);
  } catch (error) {
    console.error(error.message);
  }
}

// PUT user survey
export const editUserSurvey = async (id, editSurvey) => {
  try {
    await axios.put(`${apiURL}/api/v1/users/${id}`, editSurvey);
  } catch (error) {
    console.error(error.message);
  }
}

// DELETE user survey
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${apiURL}/api/v1/users/${id}`);
  } catch (error) {
    console.error(error.message);
  }
}
