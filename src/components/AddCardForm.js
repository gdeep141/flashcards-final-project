import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddCardForm = ({
  handleSubmit,
  front,
  handleFrontChange,
  back,
  handleBackChange,
}) => (
  <Form onSubmit={handleSubmit} className="w-50 p-3 card">
    <Form.Group className="mb-3">
      <Form.Label>Front</Form.Label>
      <Form.Control type="text" value={front} onChange={handleFrontChange} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Back</Form.Label>
      <Form.Control type="text" value={back} onChange={handleBackChange} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Add
    </Button>
  </Form>
);

export default AddCardForm;
