import React, { Component } from 'react';
import {Card , Button , Row , Modal , Form , ListGroup} from 'react-bootstrap';
import axios from 'axios' ;

export class FavCharCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      show:false,
      name:this.props.data.name,
      gender:this.props.data.gender
    }
  }

  updateCard = async (event) => {
    event.preventDefault();
    this.handleClose();
    const bodyData = {
      name:this.state.name,
      gender:this.state.gender
    }
    const url = `${process.env.REACT_APP_BACKEND_URL}/favorite/${this.props.data.id}`;
    const request = await axios.put(url , bodyData);
    console.log(request);
  } 

  handleShow = () => this.setState({show:true});
  handleClose = () => this.setState({show:false});
  updateNameState = (event) => this.setState({name:event.target.value});
  updateGenderState = (event) => this.setState({gender:event.target.value});

  render() {
    const psiPowers = this.props.data.psiPowers.map((data , index) => {
      return(
        <>
          {/* <Card.Img src={data.img} alt='' style={{width:'3rem'}} /> */}
          <ListGroup.Item style={{display:'inline' , width:'7rem'}} key={index} >{data.name}</ListGroup.Item>
        </>
      )
    })
    return (
      <>
        <Card style={{width:'25rem' , marginLeft:'10rem' , marginTop:'5rem' }}>
          {/* <Card.Img src={this.props.data.img} alt='' style={{height:'25rem'}} /> */}
          <Card.Body>
            <Card.Title>
              {this.state.name}
            </Card.Title>
            <Card.Text>
              Gender: {this.state.gender}
            </Card.Text>
          </Card.Body>
          <Card.Footer  >
            <ListGroup  >

            {psiPowers}
            </ListGroup>
          </Card.Footer>
          <Card.Footer>
            <Button onClick={() => this.props.deleteFavChar(this.props.data.id)} >
              remove
            </Button>
        <Button variant="primary" onClick={this.handleShow} style={{marginLeft:'7rem'}} >
        Update
      </Button>
          </Card.Footer>
        </Card>

      <Modal show={this.state.show} >
        <Modal.Header >
          <Modal.Title>Update Name and Gender</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.updateCard} >
          <Form.Control type='text' placeholder='name' name='name' onChange={this.updateNameState} value={this.state.name} />
          <Form.Control as="select" name='gender' onChange={this.updateGenderState} value={this.state.gender} >
              <option>male</option>
            <option>female</option>
          </Form.Control>
          <Button variant="primary" type='submit' style={{marginTop:'2rem'}} >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default FavCharCard;

