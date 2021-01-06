import React from 'react';
import usvLogo from './assets/logo.png'
import {Container, Row, Col} from 'reactstrap'

import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import Admitere from './components/Admitere/Admitere'
import Ghid from './components/Ghid/Ghid'
import Anunturi from './components/Anunturi/Anunturi'
import Footer from './components/footer/Footer'

import TrackVisibility from 'react-on-screen';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            
            <div className="h-100">
                <Container fluid className="px-0"> 
                    <Row className="">
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <Row className="">
                      <Col>
                      <Navbar/>
                      </Col>
                    </Row>
                    <Row className="admitere-remove-padding">
                      <Col>
                      <Admitere/>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col>
                      <Ghid/>
                      </Col>
                    </Row>
                    <Row style={{height:'5vh'}}>
                        <Col></Col>
                    </Row>
                    <Row className="">
                      <Col>
                      <Anunturi/>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Footer/></Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default App;
