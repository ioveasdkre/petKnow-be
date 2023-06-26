// https://codingpr.com/test-your-express-api-with-jest/#run_your_first_api

// const axios = require('axios');

// const url = 'http://127.0.0.1:8000';

// describe('The router', () => {
// 	test('The get route', async () => {
// 		const res = await axios.get(url);

// 		expect(res).toBeTruthy();
// 		expect(res.status).toBe(200);
// 		expect(res.data).toEqual('PetKnow');
// 	});

//   test('The login route with the user', async () => {
//     const res = await axios.post(`${url}/auth`, {
//       username: 'jane@email.com',
//       password: 'Jane123'
//     })
//     expect(res.status).toBe(200)
//     expect(res.data).toEqual('Welcome jane@email.com')
//   });

//   test('The login route with the wrong user', async () => {
//     try {
//       await axios.post(`${url}/auth`, {
// 				username: 'john@email.com',
// 				password: 'john123',
// 			});
//     } catch (error) {
//       expect(error.response.status).toBe(404)
//       expect(error.message).toEqual(
//         'Request failed with status code 404'
//       )
//     }
//   })

// });
describe('math', () => {
  test('math', async () => {
    expect(3 * 3).toBe(9);
  });
});
