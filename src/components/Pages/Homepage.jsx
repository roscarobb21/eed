import { Row, Col } from 'reactstrap';


import Admitere from '../Admitere/Admitere'
import Ghid from '../Ghid/Ghid'
import Anunturi from '../Anunturi/Anunturi'


function Homepage(){


    return(
        <div>
      
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
                    
                    </div>
    )

}

export default Homepage;