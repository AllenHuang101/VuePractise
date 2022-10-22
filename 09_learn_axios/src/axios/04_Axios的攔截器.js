// 給實例配置攔截器
axios.interceptors.request.use(
  (config) => {
    console.log('請求成功的攔截');

    // 1. 顯示loading的動畫
    // 2. 對原來的配置進行依些修改
    //  2.1 header
    //  2.2 token
    //  2.3 請求參數進行某些轉換

    if (config.url === '/user/info') {
      config.headers['token'] = 'xxx';
    }
    return config;
  },
  (err) => {
    console.log('請求成功的攔截');
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log('response 成功攔截');
    // 1. 結束loading的動畫
    // 2. 對返回數據進行轉換
    return res.data;
  },
  (err) => {
    console.log('response 失敗攔截');
    return err;
  }
);
axios
  .get('http://123.207.32.32:9001/lyric?id=500665346')
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });
