import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/api/data');
      const users = resp.data.map(({ id, firstName }) => ({ id, firstName }));
      setUsers(users);
    };
    fetchData();
  }, []);

  if (users.length === 0) return 'Loading...';

  return (
    <div>{users.map(u => (
      <div key={u.id}>{u.firstName}</div>
    ))}</div>
  );
}

export default App;
