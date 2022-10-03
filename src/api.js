import { CONFIG } from "./config";

const getAllCategories = async () => {
  const response = await fetch(CONFIG + "categories.php");
  console.log(response);
  return response.json();
};

const getFiltredCategories = async (name) => {
  const response = await fetch(CONFIG + "filter.php?c=" + name);
  //console.log(response);
  return response.json();
};

const getCategoryById = async (id) => {
  const response = await fetch(CONFIG + "/lookup.php?i=" + id);
  //console.log(response);
  return response;
};
export { getAllCategories, getFiltredCategories, getCategoryById };
