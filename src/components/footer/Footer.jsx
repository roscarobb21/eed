import {Container, Row, Col} from 'reactstrap';
import './Footer.css'

function Footer(){
return(
<div className="footer-wrapper">
<Container>
    <Row>
        <Col md="12" lg="4"><p className="footer-text">Universitatea „Ştefan cel Mare” din Suceava Str. Universităţii 13, 720229 Suceava, Romania Tel (centrală): +40 230 216 147 Tel (robot): +40 230 520 080 Fax: +40 0230 520 080 GPS: 47° 38′ 29.03″ N | 26° 14′ 45.54″ E</p></Col>
        <Col md="0"></Col>
        <Col md="0"></Col>
    </Row>
</Container>
</div>
)
}

export default Footer;