import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { ThemeProvider } from 'mineral-ui/themes';
import { PrimaryNav, NavItem } from 'mineral-ui/Navigation';
import Table from 'mineral-ui/Table';
import Text from 'mineral-ui/Text';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.time('cra:data');
      const resp = await axios.get('/api/data');
      console.timeEnd('cra:data');
      const users = resp.data.map(user => {
        return {
          id: user.id,
          FirstName: user.FirstName,
          DateOfBirth: moment(user.DateOfBirth).format('MMMM Do YYYY'),
        }
      });
      setUsers(users);
    };
    fetchData();
  }, []);

  if (users.length === 0) return null;

  return (
    <ThemeProvider>
      <div>
        <Text as="h1">Create React App</Text>
        <PrimaryNav align="left" maxItemWidth="20rem">
          <NavItem href="/" selected>Create React App</NavItem>
          <NavItem href="/nextjs">Next.js</NavItem>
        </PrimaryNav>
        <Table
           data={users}
           rowKey="id"
           title="Users"
           hideTitle />
       </div>
     </ThemeProvider>
  );
}

export default App;
