import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';

import { AppState, BoonTypes } from 'redux/domain';
import { boonList } from 'data/boons';
import { colors } from 'data/gods';
import images from 'assets/images';

import Boon from './Boon';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.currentPage
});

type Props = ReturnType<typeof mapStateToProps>;

const Boons = ({
  currentPage
}: Props): JSX.Element => {
  const boonType = currentPage === 'Other Collectables' ? BoonTypes.Other : BoonTypes.Solo;

  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(boonList).filter((boonKey) => boonList[boonKey][boonType]);
    const boonRows = Object.keys(boonList[boonKeys[0]][boonType]);
    const boonCount = boonKeys.length;
    const boonColumns = (boonCount + 1) as SemanticWIDTHS;

    return ['header', ...boonRows].map((boonRow: string) => {
      const rowHeader = (
        <Grid.Column key={`${boonRow}RowHeader`} width={1}>
          {boonRow !== 'header' && <Boon name={boonRow} />}
        </Grid.Column>
      );

      const columns = boonKeys.map((god: string) => {
        if (boonRow === 'header') {
          return (
            <Grid.Column key={`${god}Header`}>
              <b>{god}</b>
              <br />
              <img {...images[god]} alt={images[god].alt} />
            </Grid.Column>
          );
        } else {
          const color = colors[god]; // TODO: expand this to have the faded colors / others using it
          const boons = boonList[god][boonType][boonRow];
          return (
            <Grid.Column key={`${god}${boonRow}`}>
              <Segment.Group raised size='mini'>{
                boons.map((individualBoon, i) => (
                  <Segment key={`${god}${boonRow}${i}`} style={{padding: 0, border: `1px solid ${color}`}}>
                    {<Boon name={individualBoon} />}
                  </Segment>
                ))
              }</Segment.Group>
            </Grid.Column>
          );
        }
      });

      return (
        <Grid.Row key={boonRow} columns={boonColumns}>
          {rowHeader}
          {columns}
        </Grid.Row>
      );
    });
  }

  return (
    <Grid
      columns='equal'
      verticalAlign='middle'
      textAlign='center'
      padded='horizontally'
    >
      {generateBoonRows(boonType)}
    </Grid>
  );
};

export default connect(mapStateToProps)(Boons);
