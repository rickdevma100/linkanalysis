import axios from "axios";

export const getLinkSummary = async (postData,language) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/linkSummarize?language='+language, postData);
    return response.data.brandSummaryDescription; // Return the response data
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
    throw error; // Rethrow the error if needed
  }
};


export const getAllLinkSummary = async (postData) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/allLinkSummarize', postData);
    return response.data.summary; // Return the response data
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
    throw error; // Rethrow the error if needed
  }
};

export const getLinkExtendedComparison = async (postData) => {
  axios
  .post(`http://127.0.0.1:8000/linkAnalysis`,postData) 
  .then((response) => {
    console.log(response.data.brandQuality);
    return response.data.brandQuality;
  });
};

// export const getLinkExtendedComparison = async (postData)=> {
//   try {
//     console.log("Before Brand Quality "+postData.data);
//     const response = await axios.post('http://127.0.0.1:8000/linkAnalysis', postData);
//     console.log("BRAND Quality "+response.data.brandQuality);
//     return response.data.brandQuality; // Return the response data
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle errors
//     throw error; // Rethrow the error if needed
//   }
// }