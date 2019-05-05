module.exports = (req, res) => {
  console.time('api:data');
  let data = [];
  for (let i=0; i<1000; i++) {
    data.push({
      id: i,
      FirstName: `First_${i}`,
      LastName: `Last_${i}`,
      DateOfBirth: '2011-10-05T14:48:00.000Z',
      Address: {
        Street: `${i} Pearl St.`,
        City: 'Boulder',
        State: 'CO',
        Zip: '80302',
        Country: 'United States of America',
      }
    })
  }
  res.end(JSON.stringify(data));
  console.timeEnd('api:data');
};