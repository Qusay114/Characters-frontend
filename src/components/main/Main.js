import axios from 'axios';
import React, { Component } from 'react';
import ShowCharacters from './ShowCharacters';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters:[]
    }
  }

  componentDidMount = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/get-characters`;
    const request = await axios.get(url);
    this.setState({characters:request.data});
    console.log(request.data);
  }
  render() {
    return (
      <>
        <ShowCharacters characters={this.state.characters} />
      </>
    )
  }
}

export default Main;
