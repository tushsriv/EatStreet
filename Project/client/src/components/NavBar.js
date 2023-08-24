import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart} from '../components/ContextReducer';
export default function NavBar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  const navigate=useNavigate();
  const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/login")
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <img src='eatstreet-logo.png' style={{height: "80px",marginLeft:"20px",marginRight:"10px"}}/>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5 text-dark" aria-current="page" to="/">Home</Link>
        </li>
       {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5 text-dark " aria-current="page" to="/myOrder">My Orders</Link>
      </li>
       :""
       }
      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
        <Link className="btn btn-outline-dark mx-1" to="/login">Login</Link>
        <Link className="btn bg-dark text-white  mx-1" to="/createuser">Signup</Link>
      </div>
        :
        <div>
          <div className="btn bg-white text-dark mx-2" onClick={()=>{setCartView(true)}}>
          My Cart{" "}
          <Badge pill bg="dark">{data.length}</Badge>
        </div>
        {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
        <div className="btn bg-white text-dark mx-2" onClick={handleLogout}>
          Logout
        </div>
        </div>
      }   
        
    </div>
  </div>
</nav>
    </div>
  )
}
