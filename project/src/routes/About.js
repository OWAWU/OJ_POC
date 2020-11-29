import React, {useState, useEffect} from "react";
import axios from 'axios';

function About(){
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get('http://210.117.181.106:12331/ip');
               
            console.log(response.data);
          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.code})
          </li>
        ))}
      </ul>
    );
}

export default About;