import axios from 'axios';
import moment from 'moment';
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
  console.time('nextjs:data');
  const resp = await axios.get(`http://${req.headers.host}/api/data`);
  console.timeEnd('nextjs:data');
  const users = resp.data.map(user => {
    return {
      id: user.id,
      FirstName: user.FirstName,
      DateOfBirth: moment(user.DateOfBirth).format('MMMM Do YYYY'),
    }
  });
  return { users };
}

export default Index;