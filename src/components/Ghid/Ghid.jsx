import {Container, Row, Col} from 'reactstrap'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
} from 'reactstrap';

import './Ghid.css'
import ghidul from '../../assets/ghidul.jpg'
function Ghid() {
    return (
        <div className="ghid-wrapper">
            <Container>
                <Row>

                    <Col md="12" lg="6">
                        <Card md="12" lg="6">
                            <CardImg top width="100%" height="100%"
                                src={ghidul}
                                alt="Card image cap"/>
                               
                            <CardBody style={
                                {
                                    backgroundColor: '#aa0000',
                                    textAlign: 'center'
                                }
                            } className="ghid-link"
                            onClick={
                                () => {
                                    window.location.assign("https://usv.ro/wp-content/uploads/2020/09/Ghid-organizare-cursuri-2020-2021-coperta-v8-web.pdf")
                                }
                        }>

                                <CardText style={
                                        {color: 'white'}
                                    }
                                   >Ghid privind organizarea activitatilor în anul universitar 2020-2021</CardText>

                            </CardBody>
                        </Card>
                </Col>
                <Col md="12" lg="6"  >
                        <Card mg="12" lg="6" >
                            <CardImg top width="100%" height="100%" src="https://3.bp.blogspot.com/-xpAhFcCktzQ/WRAu7v_k2mI/AAAAAAAAcd0/5puFmetKOc0g4yBZNmEQhCbbFarL9yUEACLcB/s1600/ims-maxims.jpg" alt="Card image cap"/>
                            <CardBody style={
                                {
                                    backgroundColor: '#aa0000',
                                    textAlign: 'center'
                                }
                            }  className="ghid-link"
                            onClick={
                                () => {
                                    window.location.assign("http://foto.usv.ro")
                                }
                        }>
                                <CardText style={
                                        {color: 'white'}
                                    }
                                    >Galerie Foto</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Ghid;
