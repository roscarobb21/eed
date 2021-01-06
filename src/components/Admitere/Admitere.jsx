import {Container, Row, Col } from 'reactstrap';

import './Admitere.css'
function Admitere(){
    return(
        <div className="admitere-wrapper">
            <Container>
                <Row>
                    <Col>
                <Row style={{marginTop:'2vh', padding:'2vh'}}>
                    <Col>
                    <div className="admitere-option" onClick={()=>{window.location.assign("http://www.eed.usv.ro/html/admitere.html")}}><p className="admitere-text-option">Admitere</p></div></Col>
                    <Col><div className="admitere-option" onClick={()=>{window.location.assign("http://www.eed.usv.ro/html/admitere.html")}}><p className="admitere-text-option">Programe de Studiu </p></div></Col>
                    <Col><div className="admitere-option" onClick={()=>{window.location.assign("http://www.eed.usv.ro/fiesc/eed_files/studenti/Ghidul_Studentului_FIESC.pdf")}}><p className="admitere-text-option" >Ghidul studentului FIESC</p></div></Col>
                </Row>
                </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Admitere;