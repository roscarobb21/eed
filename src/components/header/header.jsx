import usvLogo from '../../assets/logo.png'
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import {Container} from 'reactstrap'
import './header.css'


function Header(){
  return (
    <div className="header-wrapper">
        <Container>
    <Navbar   expand="md">
        <Nav className="mx-auto">
      <NavbarBrand  href="http://usv.ro">
          <img className="logo-img mx-auto" src={usvLogo} alt="usv-logo"></img>
      </NavbarBrand>
      </Nav>
      <Nav className="mx-auto">
      <NavbarBrand  href="/">
          <p className="brand-text mx-auto"> Facultatea de Inginerie Electrică și Știința Calculatoarelor</p>
      </NavbarBrand>
      </Nav>
    </Navbar>
    </Container>
  </div>
  )
}
  

export default Header;
