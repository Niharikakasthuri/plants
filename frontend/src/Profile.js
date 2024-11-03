import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
import Nav from './components/Nav';

const Profile = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
      },[])

      const fetchUsers = () => {
        axios.get('http://localhost:3000/register')
        .then((res) => {
          console.log(res.data)
        })
      }

      const handleLogin = async(event) => {
        event.preventDefault()
        try{
            const response = 
        await axios.post('http://localhost:3000/login',{username,password})
        const token = response.data.token
          alert('Login Successfull')
          setUsername('')
          setPassword('')
          fetchUsers()
          navigate('/')
          window.location.reload()
          localStorage.setItem('token',token)
        }
        catch(error) {
          console.log("Login error")
        }
      }
      
  return (
      <div>
        <Nav/>
        <form className='profile-top profile-align' onSubmit={handleLogin}>
  
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Username</label>
    <input type="text" placeholder='Enter Username' id="form2Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
  </div>

  
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password" placeholder='Enter Password' id="form2Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
  </div>

  
  <button  type="submit" className="btn btn-primary mb-4">Sign in</button>
  
  <div class="text-center">
    <p>Not a member? <Link to = '/registration'>Register</Link></p>
  </div>
</form>
    </div>
  );
}

export default Profile;
