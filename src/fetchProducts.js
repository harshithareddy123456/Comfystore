import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const allProductsUrl = "https://course-api.com/javascript-store-products";
  const proxyUrl = "https://api.allorigins.win/get?url=";

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(allProductsUrl));
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // The data will be wrapped inside a contents property by the proxy
    return JSON.parse(data.contents);
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

fetchProducts().then((data) => console.log(data));

export default fetchProducts;
