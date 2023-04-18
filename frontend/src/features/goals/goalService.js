import axios from "axios";

const base = "https://goal-setter-rest-api-backend.onrender.com";
const API_URL = base + "/api/goals/";

const createGoal = async (goalData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const getGoal = async (goalID, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(API_URL + goalID, config);

  return response.data;
};

const updateGoal = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.put(API_URL + data.id, data, config);

  return response.data;
};

const deleteGoal = async (goalID, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(API_URL + goalID, config);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  getGoal,
  updateGoal,
};

export default goalService;
