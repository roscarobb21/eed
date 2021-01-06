import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem,
    Popover, PopoverHeader, PopoverBody,
  } from 'reactstrap';
import search from '../../assets/search.png'
import {Container, Row, Col} from 'reactstrap';
  import './Navbar.css'


class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = { width: 0, height: 0, isOpen:false, searching:false, searchText:"" 
      ,LocalDropdown:false,
      InfoDropdown:false,
      EduDropdown:false,
      popoverOpen:false,
      popoverOpenMic:false,
    };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      toggleSearch=()=>{
          this.setState({searching:!this.state.searching})
      }
    toggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    fetchSearch=(evt)=>{
        let url;
        if(evt.charCode===13){
            url= "https://www.google.com/search?num=10&hl=ro&ie=UTF-8&oe=UTF-8&as_ft=i&as_qdr=all&as_dt=i&as_sitesearch=eed.usv.ro&as_oq="+document.getElementById("search-box").value.toString()
            /**
             * assign, to be able to use the back button
             */
            window.location.assign(url);
            return;
        }
    }
    checkSearch=()=>{
        if(this.state.searching){
        return(<input id="search-box" autoFocus className="search-bar" type="text" placeholder="Press enter to search" defaultValue={this.state.searchText} onBlur={()=>{this.setState({searching:false, searchText:document.getElementById("search-box").value})}} onKeyPress={evt=>this.fetchSearch(evt)}>
            
        </input>)
        }
        else {
            return(<p></p>)
        }
    }
    toggleLocalOn=()=>{
        this.setState({LocalDropdown:true})
    }
    toggleLocalOff=()=>{
      this.setState({LocalDropdown:false})
  }
  toggleInfoOn=()=>{
    this.setState({InfoDropdown:true})
}
toggleInfoOff=()=>{
  this.setState({InfoDropdown:false})
}
toggleEduOn=()=>{
  this.setState({EduDropdown:true})
}
toggleEduOff=()=>{
this.setState({EduDropdown:false})
}
togglePopover=()=>{
  this.setState({popoverOpen:!this.state.popoverOpen})
}
togglePopoverMic=()=>{
  this.setState({popoverOpenMic:!this.state.popoverOpenMic})
}
    render(){
        return(
         
            <div>
            
            <div className="second-wrapper h-100">
                <Container>
<Navbar className="second-navbar" expand="lg" sticky="top">
  <Nav navbar className="">
        <NavbarBrand href="/" style={{color:'#f1b404'}} className="brand-hover">Home</NavbarBrand>
        </Nav>
        {this.state.width<990?<img id="img-search-mic" src={search} className="search-img" onClick={this.toggleSearch}></img>:null}
        <Popover placement="bottom" isOpen={this.state.popoverOpenMic} target="img-search-mic" toggle={this.togglePopoverMic} onMouseLeave={()=>{this.setState({popoverOpenMic:false})}}>
        <PopoverHeader>Search on EED</PopoverHeader>
        <PopoverBody><input id="search-box" autoFocus className="search-bar" type="text" placeholder="Press enter to search" defaultValue={this.state.searchText} onBlur={()=>{this.setState({searching:false, searchText:document.getElementById("search-box").value})}} onKeyPress={evt=>this.fetchSearch(evt)}>
            
            </input></PopoverBody>
            </Popover>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          
            <Nav navbar className="mx-auto">
            <NavItem >
            <UncontrolledDropdown isOpen={this.state.InfoDropdown} nav inNavbar onMouseEnter={this.toggleInfoOn} onMouseLeave={this.toggleInfoOff} >
              <DropdownToggle nav caret>
                Informatii
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <a href="http://www.eed.usv.ro/fiesc/eed_files/manifestari/FIESC_30_ani_1985_2015.pdf">Istoric</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/facultate.html">Facultate</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/html/misiune.html">Misiune</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/eed_files/facultate/Plan_strategic.pdf">Plan Strategic</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/eed_files/facultate/Plan_operational.pdf">Plan Operațional</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/html/personal.html">Personal</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/premii.html">Premii</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/departamente.html">Departamente</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.ceac.eed.usv.ro">CEAC</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/html/parteneri.html">Parteneri</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/campus.html">Campus</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/realizari_studentesti.html">Realizări studențești</a>
                </DropdownItem>
                  <DropdownItem>
                  <a href="http://www.alumni.usv.ro">Alumni</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/fiesc/eed_files/prezentari/Prezentare_FIESC.pdf">Prezentare generală</a>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
     
            <NavItem>
            <UncontrolledDropdown isOpen={this.state.EduDropdown} nav inNavbar onMouseEnter={this.toggleEduOn} onMouseLeave={this.toggleEduOff}>
              <DropdownToggle nav caret>
                Educatie
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="http://www.eed.usv.ro/html/curricula_licenta.html">Licență</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://www.eed.usv.ro/html/curricula_masterat.html">Masterat</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://www.eed.usv.ro/html/doctorat.html">Doctorat</a>
                </DropdownItem>
                <DropdownItem>
                <a href="https://orar.usv.ro">Orar</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://scolaritate.usv.ro">Situație școlară</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://www.eed.usv.ro/fiesc/eed_files/studenti/Ghidul_Studentului_FIESC.pdf">Ghidul Studentului</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://www.eed.usv.ro/html/mobilitati.html">Mobilități</a>
                </DropdownItem>
                <DropdownItem>
                <a href="http://moodle.usv.ro">Biblioteca</a>
                </DropdownItem>
                <DropdownItem>
                <a href="https://usv.ro/relint/methodology.php">Cetățeni străini</a>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
       
          <NavItem>
              <NavLink href="http://www.eed.usv.ro/html/admitere.html">Admitere</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://www.eed.usv.ro/cercetare.html">Cercetare</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://www.eed.usv.ro/manifestari.html">Manifestari</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://www.eed.usv.ro/html/documente.html">Documente</NavLink>
            </NavItem>
                <NavItem>
                <UncontrolledDropdown nav inNavbar isOpen={this.state.LocalDropdown} onMouseEnter={this.toggleLocalOn} onMouseLeave={this.toggleLocalOff}>
              <DropdownToggle nav caret>
                Local
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="https://eed.usv.ro/webmail/src/login.php">Webmail profesori</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.radio.usv.ro">Radio USV</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://foto.usv.ro">Galerie</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="http://www.radio.usv.ro">Radio USV</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="https://www.facebook.com/universitateasuceava">USV Facebook</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                </NavItem>
                </Nav>
                <Nav className="ml-auto">
        <NavItem className="">
        <img id="search-click" className="search-img" src={this.state.width>990?search:null} alt={this.state.width>990?"search":""} onClick={this.toggleSearch} ></img>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="search-click" toggle={this.togglePopover} onMouseLeave={()=>{this.setState({popoverOpen:false})}}>
        <PopoverHeader>Search on EED</PopoverHeader>
        <PopoverBody><input id="search-box" autoFocus className="search-bar" type="text" placeholder="Press enter to search" defaultValue={this.state.searchText} onBlur={()=>{this.setState({searching:false, searchText:document.getElementById("search-box").value})}} onKeyPress={evt=>this.fetchSearch(evt)}>
            
            </input></PopoverBody>
      </Popover>
        </NavItem>
        </Nav>

      
        
        </Collapse>
        
      </Navbar>
      
      </Container>
      </div>
  </div>
 
        )
    }
}

/**
 * Collapse pe 990px
 */
/**
 * Search replaced with popOver
 *  <Container fluid style={{height:this.state.searching?"":"0vh"}}>
          <Row className="">
          <Col></Col>
          <Col xs="12" sm="12" md="4">
      <div className="mx-auto">
      {this.checkSearch()}
  </div>
  </Col>
  <Col></Col>
  </Row>
  </Container>
 */
export default NavBar;