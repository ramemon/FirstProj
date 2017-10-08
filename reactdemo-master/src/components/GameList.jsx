import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class GameList extends Component{

  render() {
  const style={
	display: 'flex',
	flexWrap: 'wrap'
  }

    let games = this.props.games.filter(function(game) {
      return movie.poster_path != null;
    }).map(function(game) {
        return(
            <Col xs={6} sm={4} md={3} key={game.id} >
            <Link to={'/games/'+game.id} ><Poster id={game.id} path={game.screenshot_path} responsive /></Link>
          </Col>
        );
    });

    return(
      <Grid fluid={false}>
        <Row style={style}>
          {games}
        </Row>
      </Grid>
    );
  }
}
