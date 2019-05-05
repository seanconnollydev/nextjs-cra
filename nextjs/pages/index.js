import axios from 'axios';
import { ThemeProvider } from 'mineral-ui/themes';
import Table from 'mineral-ui/Table';

const Index = ({ users }) => (
  <ThemeProvider>
    <Table
       data={users}
       rowKey="id"
       title="Users"
       hideTitle />
   </ThemeProvider>
);

Index.getInitialProps = async({ req }) => {
  const resp = await axios.get(`http://${req.headers.host}/api/data`);
  const users = resp.data.map(({ id, FirstName }) => ({ id, FirstName }));
  return { users };
}

export default Index;