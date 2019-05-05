import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'mineral-ui/themes';
import Table from 'mineral-ui/Table';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/api/data');
      const users = resp.data.map(({ id, FirstName }) => ({ id, FirstName }));
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
