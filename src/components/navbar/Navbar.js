import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import './Navbar.css';
const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () =>{
        setClick(!click)
    }
    const closeMobileMenu = () =>{
        setClick(false);
    }
    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    useEffect(()=>{
            showButton()
        },[]
    )
    window.addEventListener('resize',showButton)
    return (
    <>
      <div className ='header-1'>
      <div className='header-1-item'>
      <i class="fa-solid fa-phone header-1-icon"></i>
       <p> +977 9817112439</p></div>
      <div className='header-1-item'>
      <i class="fa-regular fa-envelope header-1-icon"></i>
      <p>thapabasu000@gmail.com</p>  </div>
      <div className='header-1-item'>
      <i class="fa-solid fa-location-dot header-1-icon"></i>
       <p> Ganeshtole,Pokhara</p></div>
        </div>
      <nav className="navbar">
    
        <div className="navbar-container">
            <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
            Raj Global Studies <i className='fab fa-typo3'></i>
            </Link>
            <div className="menu-icon" onClick = {handleClick}>
                <i className={click?'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to ='/' className ='nav-links' onClick={closeMobileMenu}>Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/services' className ='nav-links' onClick={closeMobileMenu}>About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/products' className ='nav-links' onClick={closeMobileMenu}>Learning Language
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/products' className ='nav-links' onClick={closeMobileMenu}>Documentation
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/signup' className ='nav-links-mobile' onClick={closeMobileMenu}>Contact us
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact us</Button>}
        </div>
      </nav>
      <div className="icun">
        <a href="#" className='facebook'> facebook <i className='fab fa-facebook-f'></i></a>
        <a href="#" className='youtube'>youtube<i className='fab fa-youtube'></i></a>
        <a href="#" className='twitter'>twitter<i className='fab fa-twitter'></i></a>
      </div>
    </>
  )
}

export default Navbar
