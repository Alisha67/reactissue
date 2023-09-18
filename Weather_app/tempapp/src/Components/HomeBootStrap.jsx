import Button from 'react-bootstrap/Button'; //bootstrap ko button
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row,Col } from 'react-bootstrap';
import { Button as CustomBUtton } from './sass/component/buttonCompStlye'; //This is my custom css so react ko button pani plus afno style comp ko nutton ni chahinay bayeko lay garda 'as Custom' garera name diyeko


const HomeBootStrap = ()=>{
return(
<>
<section className="header">

<section className="ribbon">
<Row>
        <Col lg={12}>
            <div className="info_detail_wrapper">
            <div className='details'>
<span>New Baneshwor , Shankhamul</span>
</div>
<div className='details'>
<span>981000000</span>
</div>
            </div>

        </Col>
    </Row>
</section>


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerice</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/homepage">Home</Nav.Link>
           
           
           <Nav.Link href="/aboutpage">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Blog</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 <CustomBUtton >hello world</CustomBUtton >

   <CustomBUtton $primary >hello world</CustomBUtton >
   <CustomBUtton secondary >hello world</CustomBUtton >  
    </section>
</>
)
}

export default HomeBootStrap;