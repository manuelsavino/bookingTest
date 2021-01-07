const fetch = require('node-fetch');

export default async function handler(req, res) {
  const data = await fetch(
    'https://nl2a9g1h65.execute-api.us-east-1.amazonaws.com/prod/ccl-ch?b=K43RR5'
  );
  var sym = Object.getOwnPropertySymbols(data).find(function (s) {
    return String(s) === 'Symbol(Response internals)';
  });

  console.log(data[sym].url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: data[sym].url }));
}
