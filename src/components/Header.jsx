import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import '../styles/header.css'
const Header = () => {
  return (
    <div className='shadow' style={{background:'linear-gradient(90deg, rgba(99,42,0,1) 6%, rgba(91,39,0,1) 27%, rgba(82,35,0,1) 38%, rgba(83,36,1,1) 90%)',
        borderBottom:'1.4px solid  black',
        boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    }}>
      <MDBNavbar light >
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1 fw-bold text-light'><span className='ms-2 paint-effect'>SECLOB</span></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header