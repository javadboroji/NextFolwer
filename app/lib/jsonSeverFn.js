// const getUser =async()=>{
//     const res =await fetch(`http://localhost:3000/users`)
//       const users=await res.json();
//       console.log(users);
//       return users
//   }

//   export{getUser}
import axios from 'axios';

const fetchDataUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export default fetchDataUsers;
