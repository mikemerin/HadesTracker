import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';

import { AppState, BoonTable } from 'redux/domain';
import { boonGroups, boonGroupRows } from 'data/BoonGroups';
import { images } from 'visuals/images';
import { colors } from 'visuals/colors';

import Boon from './Boon';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.pages.current
});

type Props = ReturnType<typeof mapStateToProps>;

const Boons = ({
  currentPage
}: Props): JSX.Element => {
  const boonTypes: {[key: string]: string} = {
    Other: BoonTable.Other,
    Chaos: BoonTable.Chaos,
    Duo: BoonTable.Duo,
    'Infernal Arms': BoonTable.Weapon,
  }

  const boonType = boonTypes[currentPage] || BoonTable.Solo;

  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(boonGroups).filter((boonKey: string) => boonGroups[boonKey][boonType]);
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
          const color = colors[god];
          const color2 = colors[boonType === BoonTable.Duo ? boonRow : 'background'];
          const style = {
            padding: 0,
            borderRadius: '3px',
            backgroundImage: `linear-gradient(to right, ${color}, ${colors.background}), linear-gradient(to bottom, ${color}, ${color2})`,
            backgroundSize: '100% 2px, 2px 100%, 100% 4px, 1px 400%',
            backgroundOrigin: 'content-box',
            backgroundRepeat: 'no-repeat',
          }

          const boons = boonGroups[god][boonType][boonRow];
          return (
            <Grid.Column key={`${god}${boonRow}`}>
              <Segment.Group raised size='mini'>{
                boons && boons.map((individualBoon, i) => (
                  <Segment key={`${god}${boonRow}${i}`} style={{...style}}>
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
