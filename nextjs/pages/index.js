import axios from 'axios';

const Index = ({ users }) => (
  <div>{users.map(u => (
    <div key={u.id}>{u.firstName}</div>
  ))}</div>
);

Index.getInitialProps = async({ req }) => {
  const resp = await axios.get(`http://${req.headers.host}/api/data`);
  return { users: resp.data };
}

export default Index;