// 1.發送request請求
axios
  .request({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get',
  })
  .then((res) => {
    console.log(res.data);
  });

// 2.發送get請求
// axios.get('http://123.207.32.32:9001/lyric?id=500665346').then((res) => {
//   console.log(res.data);
// });

axios
  .get('http://123.207.32.32:9001/lyric', {
    params: {
      id: 500665346,
    },
  })
  .then((res) => {
    console.log(res.data);
  });

// 3.發送post請求
axios
  .post('http://152.136.185.210:5000/login', {
    name: 'coderwhy',
    password: '123456',
  })
  .then((res) => {
    console.log(res.data);
  });
