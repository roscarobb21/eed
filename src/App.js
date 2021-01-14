import React from 'react';
import {Container, Row, Col} from 'reactstrap'


/**
 * Constant
 */
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
/**
 * Pages
 */
import Homepage from './components/Pages/Homepage';
import AnunturiPage from './components/Pages/AnunturiPage';
/**
 * React Router for pages
 */
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


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
                    <Row>
                        <Col>
                            <Router>
                                <Switch>
                                    
                                    <Route exact path="/" component={Homepage} />
                                    <Route exact path='/anunturi/:id'
                                        component={AnunturiPage}/>
                                </Switch>
                            </Router>
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
