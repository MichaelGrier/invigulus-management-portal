import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://idontknowwhatthisisyet.com'
});

instance.defaults.headers.common['Authorization'] = '';
instance.defaults.headers.post['Content-Type'] = 'application/json';

// instance.interceptors.request...

export default instance;