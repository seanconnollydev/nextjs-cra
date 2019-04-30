import axios from 'axios';

const Index = ({ users }) => (
  <div>{users.map(u => (
    <div key={u.id}>{u.firstName}</div>
  ))}</div>
);

Index.getInitialProps = async({ req }) => {
  const resp = await axios.get(`http://${req.headers.host}/api/data`);
  const users = resp.data.map(({ id, firstName }) => ({ id, firstName }));
  return { users };
}

export default Index;