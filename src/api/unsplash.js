import axios from 'axios';
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 39vCxJGqPnmiT9mjghvNZRjStkY4yUAHwUQlCdjsoMU"
  }
});
