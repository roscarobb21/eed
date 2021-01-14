import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import { List, Badge } from 'reactstrap';
import {Spinner} from 'reactstrap';
import './Pages.css'
class AnunturiPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: null,
            anunturi:null,
            practica:null,
            locuri:null,
        }
    }
    componentWillMount() {
        setTimeout(() => {
            let path = window.location.pathname;
            let id = path.split('/')[2];
            this.setState({page: id});
        }, 1000)

    }
    async componentDidMount() {
        let url = "http://localhost:80/eed/anunturi/index.php";
        let options={
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
              'Content-Type': 'application/json'
            }
          }
        let fetchRaw = await fetch(url, options);
        let response = await fetchRaw.json();
        if(response){
            this.setState({anunturi:response[0],practica:response[1], locuri:response[2]})
        }
    }
    /**
     * height ---- 100
     * x ----- y 
     * x= height * y/100
     */
    generateList=(listItems)=>{
        if(listItems==="unknown"){
            return(<li>Server Error :((</li>)
        }
        return listItems.map((element)=>{
            return(
                <li>
                    <Badge color="secondary">{element.data}</Badge><a style={{marginLeft:'10px'}} href={element.link}>{ element.text}</a></li>
            )
        })
    }
    render() {
        if (this.state.page === null) {
            let height = window.innerHeight
            return (
                <div style={{height:height-((height * 40)/100)}}>
                     <div className="anunturi-page-header-bg">
                <Container>
                    
                    <Row>
                        <Col></Col>
                        <Col  style={{textAlign:'center'}}><div style={{color:'white', padding:'20px'}} >{this.state.page==="1"?"/Anunturi/Anunțuri":this.state.page==="2"?"/Anunturi/Anunțuri de practica":this.state.page==="3"?"/Anunturi/Locuri de muncă":"Loading"}</div></Col>
                        <Col></Col>
                    </Row>
                </Container>
                </div>
                    <Container >
                        <Row>
                            <Col></Col>
                            <Col style={{paddingTop:'15vh', textAlign:'center'}}>
                                <Spinner color="secondary"/>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            )
        }
        
        return (
            <div>
                <div className="anunturi-page-header-bg">
                <Container>
                    
                    <Row>
                        <Col></Col>
                        <Col  style={{textAlign:'center'}}><div style={{color:'white', padding:'20px'}} >{this.state.page==="1"?"/Anunturi/Anunțuri":this.state.page==="2"?"/Anunturi/Anunțuri de practica":this.state.page==="3"?"/Anunturi/Locuri de muncă":"Unknown Page"}</div></Col>
                        <Col></Col>
                    </Row>
                </Container>
                </div>
                <div style={{marginTop:'10vh'}}>
                <Container>
                    
                    <Row>
                        <Col></Col>
                        <Col md="12" lg="6" style={{textAlign:'center'}}><div style={{color:'black', padding:'20px'}} ><List type="unstyled">{this.generateList(this.state.page==="1"?this.state.anunturi:this.state.page==="2"?this.state.practica:this.state.page==="3"?this.state.locuri:"unknown")}</List></div></Col>
                        <Col></Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default AnunturiPage;
