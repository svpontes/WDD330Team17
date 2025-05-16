// Import the getParam function from the utils.mjs module
// This function is used to get query parameters from the URL (e.g., ?product=810NV)
import { getParam } from "./utils.mjs";

// Import the ProductData class from the ProductData.mjs module
// This class is responsible for loading product data from a JSON file
import ProductData from "./ProductData.mjs";

// Import the ProductDetails class from the ProductDetails.mjs module
// This class handles finding a specific product and rendering its details on the page
import ProductDetails from "./ProductData.mjs";

// Create a new instance of ProductData for the "tents" category
// This means it will load data from the "tents" JSON file
const dataSource = new ProductData("tents");

// Get the value of the "product" query parameter from the URL
// Example: if the URL is product.html?product=810NV → returns "810NV"
const productID = getParam("product");

// Create an instance of the ProductDetails class, passing in the product ID and data source
// This object now has everything it needs to load and display the product info
const product = new ProductDetails(productID, dataSource);

// Call the init() method from the ProductDetails class
// This method will fetch the product data and render it into the HTML
product.init();