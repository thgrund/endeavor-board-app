import React, { Component } from 'react';
import { Card, Container, List, Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class AlphaStateCard extends Component {

  render() {
    const { alphaTitle, alphaColor, alphaState, isCriteriaCheckable}= this.props;
    return (
      <div className="asc-card-wrapper">
        <Card>
          <Card.Content className="asc-alpha-header" style={{backgroundColor: alphaColor}}>
            <Card.Header >
              {alphaTitle}
            </Card.Header>
          </Card.Content>

          <Card.Content textAlign="center">
            <Container className="asc-alpha-state-header-container">
              {alphaState.title}
            </Container>
          </Card.Content>

          <Card.Content className="asc-alpha-state-checklist-container">
            <List bulleted={!isCriteriaCheckable}>
                {Object.keys(alphaState.checklistMap).map(key => (
                    <List.Item key={key} className={alphaState.checklistMap[key] ? "list-item-checked" : null }>
                      {!isCriteriaCheckable ?
                          key :
                          <Checkbox
                              onClick={() => this.props.onToggleCriteria(alphaState.id, key)}
                              label={key}
                              checked={alphaState.checklistMap[key]} />
                      }
                    </List.Item>
                ))}

            </List>
          </Card.Content>

          <Card.Content textAlign="center">
            <Container className="asc-alpha-state-counter" style={{backgroundColor: alphaColor}}>
              {alphaState.order} / 6
            </Container>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

AlphaStateCard.propTypes = {
  alphaTitle: PropTypes.string.isRequired,
  alphaColor: PropTypes.string.isRequired,
  alphaState: PropTypes.object.isRequired,
  isCriteriaCheckable: PropTypes.bool.isRequired,
};

