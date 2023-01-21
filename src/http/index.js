import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: { from: '0', size: size || '20', tags },
      headers: {
          'X-RapidAPI-Key': "984442c384msh37d091dcb9cc6d7p15d5bbjsn7552dcf3be4b",
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
  };
  return await axios.request(options)
}