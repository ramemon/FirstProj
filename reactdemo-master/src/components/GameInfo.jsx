import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function GameInfo(props){
  const style = {
    paddingLeft: '15px'
  };

    return(
      <div style={style}>
        <Row>
          <Title title={props.game.name} />
        </Row>
        <Row>
          <Col xs={4}>
            <Rating icon={'star'} title={props.game.ratings} />
          </Col>
          <Col xs={4}>
            <Rating icon={'heart'} title={props.game.total_rating_count} />
          </Col>
          <Col xs={4}>
            <ReleaseDate title={props.game.first_release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <Description category={'Summary'} description={props.game.summary} />
        </Row>
      </div>
    );
}
