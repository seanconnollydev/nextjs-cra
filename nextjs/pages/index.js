import axios from 'axios';
import moment from 'moment';
import { ThemeProvider } from 'mineral-ui/themes';
import { PrimaryNav, NavItem } from 'mineral-ui/Navigation';
import Table from 'mineral-ui/Table';
import Text from 'mineral-ui/Text';

const Index = ({ users }) => (
  <ThemeProvider>
    <div>
      <Text as="h1">Next.js</Text>
      <PrimaryNav align="left" maxItemWidth="20rem">
        <NavItem href="/">Create React App</NavItem>
        <NavItem href="/nextjs" selected>Next.js</NavItem>
      </PrimaryNav>
      <Table
         data={users}
         rowKey="id"
         title="Users"
         hideTitle />
     </div>
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