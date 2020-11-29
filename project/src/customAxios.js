import axios from 'axios'; // 액시오스

export default function customAxios(url, callback) {
  axios(
    {
      url: url,
      method: 'post',
      baseURL: 'http://210.117.181.106:12331',
      withCredentials: true,
    }
  ).then(function (response) {
    callback(response.data);
  });

}