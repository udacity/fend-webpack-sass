const fetch = require("node-fetch");
const baseURL = `https://api.nasa.gov/planetary/apod?`;

require("dotenv").config();
console.log(process.env);

exports.getPicture = async function (date) {
  try {
    const url =
      baseURL +
      "api_key=" +
      process.env.API_KEY_APOD +
      "&date=" +
      date +
      "&concept_tags=True";
    console.log(url);
    const res = await fetch(url);

    const picture = await res.json();
    return {
      url: picture.url,
      title: picture.title,
      explanation: picture.explanation,
    };
  } catch (error) {
    console.error(error);
  }
};
