import React , {useState } from 'react';
import { Button , Modal , Form } from 'react-bootstrap';

const AddMovie = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");
    const [rating,setRating] = useState(0);
    console.log(rating)




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Name" name="name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image..." name="image" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Desc</Form.Label>
        <Form.Control type="text" placeholder="Enter Desc..." name="description" onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number"  name="rating" onChange={(e)=>setRating(e.target.value)}/>
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{addMovie({name,image,rating:Number(rating),description,id:Math.random()}) ;handleClose()}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddMovie