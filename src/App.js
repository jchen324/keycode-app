import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <Container className="p-3">
      <Header />
      <Row>
        <Card title={"event.key"} />
        <Card title={"event.location"} />
        <Card title={"event.which"} />
        <Card title={"event.code"} />
      </Row>
    </Container>
  );
}

export default App;
