import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
const Registration = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
      fetchUsers()
  },[])

    const fetchUsers = () => {
        axios.get('https://localhost:3000/register')
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/register',{email,username,password})
        .then(() => {
          alert('Registration Successfull')
          setEmail('')
          setUsername('')
          setPassword('')
          fetchUsers()
          navigate('/profile')
        })
        .catch((error) => {
          console.log("Unable to register")
        })
      }

     return (
    <div>
        <Nav/>
         
<section class="vh-100 nav-top">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" placeholder='Enter Username' id="form3Example1c" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" placeholder='Enter Email' id="form3Example3c" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" placeholder='Enter Password' id="form3Example4c" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src='https://img.freepik.com/premium-vector/sign-up-flat-illustration-call-action-concept-light-blue-yellow-color-isometric-minimal-style_146120-296.jpg'
                  className="img-fluid" alt='register'/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
  )
}

export default Registration