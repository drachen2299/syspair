import axios from "axios";
import next from "next";

// const apiURL = process.env.REACT_APP_API_URL || "http://localhost:8000";

const apiURL = process.env.PROD_URL;
export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// GET all users
export const surveyResults = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// GET languages
export const getAllLanguages = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/languages`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
// GET language by id
export const findLanguageById = async (langId) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/languages/${langId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// GET user by id
export const findUserById = async (userId) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// GET user by username
export const findUserByName = async (username) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/users/${username}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// find language selected
export const findLanguageByName = async (language) => {
  try {
    const response = await axios.get(`${apiURL}/api/v1/languages/${language}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
// Sign-up user
export const userSignUp = async (newUser) => {
  try {
    await axios.post(`${apiURL}/api/v1/users/sign-up`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// Login user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${apiURL}/api/v1/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// logout user
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/api/v1/users/logout`);
  } catch (error) {
    console.error(error.message);
  }
};
// POST user survey
export const createSurvey = async (surveyAnswers) => {
  try {
    const response = await axios.post(`${apiURL}/api/v1/users/`, surveyAnswers);
  } catch (error) {
    console.error(error.message);
  }
};

// PUT user survey
export const editUserSurvey = async (id, editSurvey) => {
  try {
    await axios.put(`${apiURL}/api/v1/users/${id}`, editSurvey);
  } catch (error) {
    console.error(error.message);
  }
};

// DELETE user survey
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${apiURL}/api/v1/users/${id}`);
  } catch (error) {
    console.error(error.message);
  }
};
