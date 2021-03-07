import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';

import {
  AppState,
  BoonTables,
} from 'redux/domain';

import Boon from './Boon';
import { BoonStyles } from './Boons.styles';
import BoonHeader from './BoonHeader';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
  currentPage: state.pages.current,
  groupBoons: state.groups.boons,
  groupRowOrder: state.groups.rowOrder,
});

type Props = ReturnType<typeof mapStateToProps>;

const boonTypes: {[key: string]: string} = {
  Other: BoonTables.Other,
  Chaos: BoonTables.Chaos,
  Duo: BoonTables.Duo,
  'Infernal Arms': BoonTables.Weapon,
}

const BoonTable = ({
  boons,
  currentPage,
  groupBoons,
  groupRowOrder,
}: Props): JSX.Element => {
  const boonType = boonTypes[currentPage] || BoonTables.Solo;

  const generateBoonRows = (boonType: string, hideHeader?: boolean): JSX.Element[] => {
    const boonKeys = Object.keys(groupBoons).filter((boonKey: string) => groupBoons[boonKey][boonType]);
    const boonRows = groupRowOrder[boonType];
    const boonColumns = (boonKeys.length + 1) as SemanticWIDTHS;
    const columnHeader: string[] = hideHeader ? [] : ['header'];

    return [...columnHeader, ...boonRows].map((boonRow: string) => {
      const rowHeader = <BoonHeader name={boonRow} boonType={boonType} headerType='row' />;
      const columns = boonKeys.map((boonKey: string) => {
        if (boonRow === 'header') {
          return (
            <BoonHeader
              key={`${boonKey}${boonRow}ColumnHeader`}
              name={boonKey}
              boonType={boonType}
              headerType='column'
            />
          );
        } else {
          const rowBoons = groupBoons[boonKey][boonType][boonRow];
          return (
            <Grid.Column key={`${boonKey}${boonRow}`}>
              <Segment.Group raised size='mini'>{
                rowBoons && rowBoons.map((individualBoon, i) => {
                  const style = BoonStyles({boonKey, boonType, boonRow, individualBoon});
                  return (
                    <Segment key={`${boonKey}${boonRow}${i}`} style={{...style}}>
                      {<Boon name={individualBoon} />}
                    </Segment>
                  );
                })
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
      key={boonType}
      columns='equal'
      verticalAlign='middle'
      textAlign='center'
      padded='horizontally'
    >
      {generateBoonRows(boonType)}
    </Grid>
  );
};

export default connect(mapStateToProps)(BoonTable);
