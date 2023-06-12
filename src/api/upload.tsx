import axios from 'axios';

export function uploadImage(formData: FormData) {
  return new Promise((resolve, reject) => {
    axios
      .post('https://www.activeminds.co.kr/ai/example', formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
