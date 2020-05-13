import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID OM8l8InL4sBp0pXtE--65oCjTrKp4RGMeTOczovQHCM'
  }
});
