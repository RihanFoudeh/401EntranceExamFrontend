import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import { Card, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import { withAuth0 } from "@auth0/auth0-react"

import UpdateModal from './updateModal'

class FavFruit extends React.Component {


  constructor(props) {

    super(props);


    this.state = {
      userName: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      userImag: this.props.auth0.user.picture,
      FrutsArr: [],
      selectedFruts_Id: {},
      selectedFruts: {},
      updateshow: false
    }
  }


  componentDidMount = () => {
    axios.get(`https://frutexam401.herokuapp.com/frutis/${this.state.email}`).then((founderFruts) => {

      this.setState({
        FrutsArr: founderFruts.data,
      });
    });
  }
  deleteItem = (id) => {
    axios.delete(`https://frutexam401.herokuapp.com/frutis/${id}`).then((deleteitem) => {
      if (deleteitem.data.deletedCount === 1) {
        const newFrutArr = this.state.FrutsArr.filter((fruts) =>
          fruts._id !== id
        );
        this.setState({ FrutsArr: newFrutArr })
      }
    })

  }

    updateFruts=(e)=>{
  e.preventDefault();

  const reqBody={
  name:e.target.name.value,
  photos:e.target.photos.value,
  prices:e.target.prices.value,
  email:this.state.email
  };

  axios 
  .put (`https://frutexam401.herokuapp.com/frutis/${this.state.selectedFruts._id}`,reqBody)

  .then ((updatedFruts) =>{

  window.location.reload();

  this.setState({

FrutsArr :updatedFruts,
selectedFruts:{},

updateshow :false
});


  })

    }
  showModal = (id) => {

    this.setState({
      updateshow : true,
      selectedFruts:id,
    })
  }


  closeModal = (id) => {
this.setState({
  updateshow:false,
})

  }

  render() {
    return (
      <>
        <img src={this.state.userImag} alt="" />

        <h1>{`Hello ${this.state.userName}`}   </h1>
        <p>{this.state.email} </p>

        <br />

        {this.state.FrutsArr.map((Fruts) => {

          return (
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Fruts.photos} />
                <Card.Body>
                  <Card.Title>{Fruts.name}</Card.Title>
                  <Card.Text>
                    {Fruts.prices}
                  </Card.Text>
                  <Button variant="danger" onClick={() => { this.deleteItem(Fruts._id) }}>Remove</Button>
                  <Button variant="warning" onClick={() => { this.showModal(Fruts) }}>Update</Button>



                </Card.Body>
              </Card>

            </>
          )
        }) }
        <UpdateModal
        NewFruts={this.state.selectedFruts}
        updateFruts={this.updateFruts}
        show={this.state.updateshow}
        closeModal={this.closeModal}
        
        
        />
      </>
    )
  }
}

export default withAuth0(FavFruit);
