import React, { Component } from 'react';
import { GameScreenshot, TrailerList} from '../components';
import { TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { GameInfo, Screenshot } from '../components';
import { connect } from 'react-redux';
import { fetchGameDetail, fetchTrailerList} from '../actions';

class GameDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchGameDetail(this.props.params.id));
    //dispatch(fetchCastList(this.props.params.id));
    dispatch(fetchTrailerList(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchGameDetail(nextProps.params.id));
         //dispatch(fetchCastList(nextProps.params.id));
         dispatch(fetchTrailerList(nextProps.params.id));
      }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //     if(this.props.movie.id !== nextProps.movie.id) {
  //       //console.log('shouldComponentUpdate');
  //       return true;
  //     }
  //     return false;
  // }

  render() {
    const {game, trailers, isFetcing_game, isFetcing_trailers} = this.props;

    if(isFetcing_game || isFetcing_trailers) {
      return <p>loading...</p>
    }
    if(game.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Screenshot id={game.id} path={game.screenshot_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <GameInfo game={game}/>
            </Col>
          </Row>
          <Row>
            <TrailerList data={trailers.slice(0,TRAILER_MAX_NUM)} />
          </Row>
        </Grid>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {gameDetail, trailerList} = state;
  const {isFetcing_game, item: game, error_game} = gameDetail;
  //const {isFetcing_casts, items: casts, error_casts} = castList;
  const {isFetcing_trailers, items: trailers, error_trailers} = trailerList;

  return {isFetcing_game, game, error_game, isFetcing_trailers, trailers, error_trailers}
}

export default connect(mapStateToProps)(GameDetail);
