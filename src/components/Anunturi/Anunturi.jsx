import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import { Badge } from 'reactstrap';
import { ListGroup, ListGroupItem, List } from 'reactstrap';
import './Anunturi.css'

class Anunturi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            anunturi:null,
            practica:null,
            locuri:null,
            fetchSuccess:false,
        }
    }
    async componentWillMount(){
        let url = "http://localhost:80/eed/index.php";
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
            this.setState({anunturi:response[0],practica:response[1], locuri:response[2], fetchSuccess:true})
        }
    }
    generateAnunturi=()=>{
        console.log('generate ', this.state.anunturi)
        
        return this.state.anunturi.map((element)=>{
            console.log('map element ', element)
            return(
                <li>
                <Badge color="secondary">{element.data}</Badge><a style={{marginLeft:'10px'}} href={element.link}>{element.text}</a></li>
            )
        })
    }
    generatePractica=()=>{
        return this.state.practica.map((element)=>{
            return(
                <li>
                    <Badge color="secondary">{element.data}</Badge><a style={{marginLeft:'10px'}} href={element.link}>{ element.text}</a></li>
            )
        })
    }
    generateLocuriMunca=()=>{
        return this.state.locuri.map((element)=>{
            return(
                <li>
                    <Badge color="secondary">{element.data}</Badge><a style={{marginLeft:'10px'}} href={element.link}>{element.text}</a></li>
            )
        })
    }
    render(){
        if(this.state.anunturi===null){
            return null;
        }
        return(<div className="anunturi-wrapper">
<Container>
    <Row style={{textAlign:'center'}}>
        <Col  md={{ size: 4, order: 1 }} lg="4"><div>
            <p>Anunturi</p>
            <List type="unstyled">
             {this.generateAnunturi()}
            </List>
    </div></Col>

        <Col md={{ size: 4, order: 3 }} lg="4"><div>
            <p>Locuri de munca</p>
            <List type="unstyled">
             {this.generateLocuriMunca()}
            </List></div>
    </Col >
        <Col md={{ size: 4, order: 2 }} lg="4"><div>
            <p>Anunțuri de practică</p>
            <List type="unstyled">
             {this.generatePractica()}
            </List></div>
    </Col>
    </Row>
</Container>
        </div>)
    }
}


export default Anunturi