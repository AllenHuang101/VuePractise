// 1.baseURL
const baseURL = 'http://123.207.32.32:8000';

// 給axios實例配置共用的配置
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;
axios.defaults.headers = {};

// 1.1 get: /home/multidata
axios.get('/home/multidata').then((res) => {
  console.log(res);
});

// 1.2 get: /home/data

// 2.axios發送多個請求
axios
  .all([axios.get('/home/multidata'), axios.get('/home/data')])
  .then((res) => {
    console.log(res);
  });
