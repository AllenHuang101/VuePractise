import axios from 'axios'

// axios 實例對象
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'Allen',
      age: 30
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'Allen',
      age: 30
    }
  })
  .then((res) => {
    console.log(res.data)
  })
