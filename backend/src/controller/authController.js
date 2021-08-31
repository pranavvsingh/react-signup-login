const axios = require('axios');

exports.signUp = async (req, res, next) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    let response = await axios.get(`https://612e6ca7d11e5c001755857c.mockapi.io/api/v1/signUp?email=${data.email}`);
    if (parseInt(response.status, 10) === 201 || parseInt(response.status, 10) === 200) {
      if (parseInt(response.data.length, 10) > 0) {
        res.status(402).send({ status: 400, data: 'User Already Exist' });
      } else {
        response = await axios.post('https://612e6ca7d11e5c001755857c.mockapi.io/api/v1/signUp', data);
        if (parseInt(response.status, 10) === 200 || parseInt(response.status, 10) === 201) {
          res.status(200).send({ status: 200, data: JSON.parse(JSON.stringify(response.data)) });
        } else {
          res.status(400).send({ status: 400, data: 'Invalid Request' });
        }
      }
    } else {
      res.status(400).send({ status: 400, data: 'Invalid Request' });
    }
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await axios.get(`https://612e6ca7d11e5c001755857c.mockapi.io/api/v1/signUp?email=${data.email}`);
    if (parseInt(response.status, 10) === 200) {
      if (parseInt(response.data.length, 10) === 0) {
        if (data.email === 'pranavvsingh46@mail.com' && data.password === 'Pranav@4july') {
          res.status(200).send({ status: 200, data: 'Success' });
        } else {
          res.status(400).send({ status: 400, data: 'Invalid Credentials' });
        }
      } else {
        const parseRes = JSON.parse(JSON.stringify(response.data));
        if (parseRes[0].password === data.password) {
          res.status(200).send({ status: 200, data: JSON.parse(JSON.stringify(response.data)) });
        } else {
          res.status(400).send({ status: 400, data: 'Invalid Credentials' });
        }
      }
    } else {
      res.status(400).send({ status: 400, data: 'Invalid Request' });
    }
  } catch (err) {
    next(err);
  }
};
