import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';

import { AppState, BoonGroup } from 'redux/domain';
import { boonList, boonGroupRows } from 'data/BoonList';
import { images } from 'visuals/images';
import { colors } from 'visuals/colors';

import Boon from './Boon';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.currentPage
});

type Props = ReturnType<typeof mapStateToProps>;

const Boons = ({
  currentPage
}: Props): JSX.Element => {
  const boonTypes: {[key: string]: string} = {
    Other: BoonGroup.Other,
    Chaos: BoonGroup.Chaos,
    Duo: BoonGroup.Duo,
    'Infernal Arms': BoonGroup.Weapon,
  }

  const boonType = boonTypes[currentPage] || BoonGroup.Solo;

  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(boonList).filter((boonKey: string) => boonList[boonKey][boonType]);
    const boonRows: string[] = boonGroupRows[boonType];
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
          // console.log(god)
          // console.log(images)
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
                boons && boons.map((individualBoon, i) => (
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
