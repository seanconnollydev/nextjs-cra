import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { ThemeProvider } from 'mineral-ui/themes';
import Table from 'mineral-ui/Table';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/api/data');
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

  if (users.length === 0) return 'Loading...';

  return (
    <ThemeProvider>
      <Table
         data={users}
         rowKey="id"
         title="Users"
         hideTitle />
     </ThemeProvider>
  );
}

export default App;
