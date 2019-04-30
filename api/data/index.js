module.exports = (req, res) => {
  console.time('api:data');
  let data = [];
  for (let i=0; i<10000; i++) {
    data.push({
      id: i,
      firstName: `First_${i}`,
      lastName: `Last_${i}`,
      dateOfBirth: '2011-10-05T14:48:00.000Z',
      address: {
        street: `${i} Pearl St.`,
        city: 'Boulder',
        state: 'CO',
        zip: '80302',
        country: 'United States of America',
      }
    })
  }
  res.end(JSON.stringify(data));
  console.timeEnd('api:data');
};