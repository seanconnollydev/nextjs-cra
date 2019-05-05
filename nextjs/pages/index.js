import axios from 'axios';
import Table from 'mineral-ui/Table';
import { ThemeProvider } from 'mineral-ui/themes';

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
  const users = resp.data.map(({ id, firstName }) => ({ id, firstName }));
  return { users };
}

export default Index;