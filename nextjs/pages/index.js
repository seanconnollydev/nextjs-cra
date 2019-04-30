import axios from 'axios';

const Index = () => (<div>Next.js</div>);

Index.getInitialProps = async({ req }) => {
  const host = req ? req.headers.host : '';
  console.log('req.headers.host', req.headers.host);
  const resp = await axios.get(`http://${host}/api/data`);
  console.log('resp', resp.data);
  return {};
}

export default Index;