import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios"

import CardHome from "./cardHome"

import {withAuth0}from "@auth0/auth0-react"
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      frutsArr: [],
      email:this.props.auth0.user.email,
    }
  }
  componentDidMount = () => {
    axios.get("https://frutexam401.herokuapp.com/frutis").then((founderFruts) => {

      this.setState({
        frutsArr: founderFruts.data
      })
    })

  }

addToFav=(name,photos,prices)=>{

  const reqBody={
    name:name ,
    photos:photos,
    prices:prices,
    email:this.state.email

  }

axios.post("https://frutexam401.herokuapp.com/frutis",reqBody ).then((creatfrut)=>{
  console.log(creatfrut.data)
})

};

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <CardHome frutsArr={this.state.frutsArr} addToFav={this.addToFav}/>
      </>
    )
  }
}

export default withAuth0 (Home);
