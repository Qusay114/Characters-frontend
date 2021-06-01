import React, { Component } from 'react';
import FavCharCard from './FavCharCard';
import {Row} from 'react-bootstrap';

export class ShowFavChars extends Component {
  render() {
    const CharsCards = this.props.favCharacters.map((data , index) => {
      return(
        <FavCharCard data={data} key={index} deleteFavChar={this.props.deleteFavChar} />
      )
    })
    return (
      <Row>
        {CharsCards}
      </Row>
    )
  }
}

export default ShowFavChars;
