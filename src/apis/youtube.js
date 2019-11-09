import axios from 'axios';

const KEY = 'AIzaSyBq1eBEp9hPwj3t0b1sfdLFZkXODCYxE80';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

