import axios from 'axios';
import React, { Component } from 'react';
import ShowFavChars from './ShowFavChars';

export class FavoriteCharacters extends Component {
  constructor(props){
    super(props);
    this.state = {
      favCharacters:[]
    }
  }

  componentDidMount = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/favorite`;
    const request = await axios.get(url);
    this.setState({favCharacters:request.data});
    console.log(request.data);
  }

  deleteFavChar = async (id) => {
    const updatedFavCards = this.state.favCharacters.filter(data => data.id !== id);
    this.setState({favCharacters:updatedFavCards});
    const url = `${process.env.REACT_APP_BACKEND_URL}/favorite/${id}`;
    const request = await axios.delete(url);
    console.log(request);
  }


  render() {
    return (
      <>
        <ShowFavChars favCharacters={this.state.favCharacters} deleteFavChar={this.deleteFavChar} />
      </>
    )
  }
}

export default FavoriteCharacters;
