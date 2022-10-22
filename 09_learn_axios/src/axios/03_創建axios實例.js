console.log('-----------------');

// axios默認庫提供給我們的實例對象
// axios.get("xxxx")

// 創建其他的實例發送網路請求
// 可以針對單獨的 baseURL 配置一個實例
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:9001',
  timeout: 6000,
  headers: {},
});
instance1
  .get('/lyric', {
    params: {
      id: 500665346,
    },
  })
  .then((res) => {
    console.log('res', res.data);
  });

const instance2 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 10000,
  headers: {},
});
