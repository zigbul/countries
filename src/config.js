const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
const BASE_URL = "https://api.countrylayer.com/v2/";

export const ALL_COUNTRIES = BASE_URL + 'all';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join('');