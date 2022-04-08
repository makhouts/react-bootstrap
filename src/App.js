import './App.css';
import { Nav, Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';

function App() {
  let x = 'x';

  const test = () => {
    if(x != 'x') return console.log('nopes');
    console.log('gelijk !')
  }

  test();

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">Privacy Policy.</Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col md>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Card>
          <Card.Img
            style={{ width: 400 }}
            variant="top"
            src="https://www.autointernationaal.nl/wp-content/uploads/2019/08/AudiRS6AvantPrijsindicatie12.jpg"
          />
          <Card.Body>
            <Card.Title>tHE TITLE</Card.Title>
            <Card.Text>Een tekstje</Card.Text>
            <Button onClick={() => alert("sent!")} variant="danger">
              Send
            </Button>
          </Card.Body>
        </Card>
        <Breadcrumb as="nav">
          <Breadcrumb.Item>ONE</Breadcrumb.Item>
          <Breadcrumb.Item>TWO</Breadcrumb.Item>
          <Breadcrumb.Item active>THREE</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is an alert!</Alert>
        <Button>Test btn</Button>
      </Container>
    </div>
  );
}

export default App;
