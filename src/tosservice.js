const axios = require('axios');

const baseUrl = "https://api.tdameritrade.com/v1";
const apiKey = process.env.TS_API_KEY;

async function getOptionChain(ticker) {
  const url = `${baseUrl}/marketdata/chains?apikey=${apiKey}&symbol=${ticker}`;

  try {
    const chain = await axios.get(url, {
    });

    return chain.data;
  } catch (e) {
    console.log(e.message);
    return '';
  }
}

module.exports = {
  getOptionChain
}