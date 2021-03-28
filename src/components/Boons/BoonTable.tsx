import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS } from 'semantic-ui-react';

import { AppState } from 'redux/domain';

import BoonHeader from './BoonHeader';
import BoonRowGroup from './BoonRowGroup';

const mapStateToProps = (state: AppState) => ({
  groupBoons: state.groups.boons,
  groupRowOrder: state.groups.rowOrder,
});

type Props = ReturnType<typeof mapStateToProps> & {
  boonType: string,
  hideHeader?: boolean,
};

const BoonTable = ({
  groupBoons,
  groupRowOrder,
  boonType,
  hideHeader,
}: Props): JSX.Element => {
  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(groupBoons).filter((boonKey: string) => groupBoons[boonKey][boonType]);
    const boonRows = groupRowOrder[boonType];
    const boonColumns = (boonKeys.length + 1) as SemanticWIDTHS;
    const columnHeader: string[] = hideHeader ? [] : ['header'];

    return [...columnHeader, ...boonRows].map((boonRow: string) => {
      const rowHeader = (
        <BoonHeader
          key={`${boonRow}Header`}
          name={boonRow}
          boonColumns={boonColumns}
          boonType={boonType}
          headerType='row'
        />
      );

      const columns = boonKeys.map((boonKey: string) => (
        boonRow === 'header'
          ? <BoonHeader
              key={`${boonKey}${boonRow}ColumnHeader`}
              name={boonKey}
              boonColumns={boonColumns}
              boonType={boonType}
              headerType='column'
            />
          : <BoonRowGroup
              key={`${boonKey}${boonRow}Column`}
              boonKey={boonKey}
              boonType={boonType}
              boonRow={boonRow}
            />
      ));

      return (
        <Grid.Row key={`${boonRow}Row`} columns={boonColumns}>
          {rowHeader}
          {columns}
        </Grid.Row>
      );
    });
  }

  return (
    <Grid
      key={boonType}
      textAlign='center'
      padded='horizontally'
    >
      {generateBoonRows(boonType)}
    </Grid>
  );
};

export default connect(mapStateToProps)(BoonTable);
