import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS } from 'semantic-ui-react';

import { AnyBoon, AppState } from 'redux/domain';

import BoonHeader from './BoonHeader';
import BoonRowGroup from './BoonRowGroup';

const mapStateToProps = (state: AppState) => ({
  groupBoons: state.groups.boons,
  groupRowOrder: state.groups.rowOrder,
});

type Props = ReturnType<typeof mapStateToProps> & {
  basic?: boolean,
  boonType: string,
  hideHeader?: boolean,
  hideRowHeader?: boolean,
  horizontal?: boolean,
  split?: number,
};

const BoonTable = ({
  basic,
  groupBoons,
  groupRowOrder,
  boonType,
  hideHeader,
  hideRowHeader,
  horizontal,
  split,
}: Props): JSX.Element => {
  const rowHeaderWidth = (horizontal && split ? Math.ceil(16 / split) : undefined) as SemanticWIDTHS;

  const displayRowHeader = (index: number, rowHeader: JSX.Element) => {
    if (index === 0) {
      return !hideRowHeader && rowHeader;
    } else {
      return <Grid.Column width={rowHeaderWidth}></Grid.Column>;
    }
  };

  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(groupBoons).filter((boonKey: string) => groupBoons[boonKey][boonType]);
    const boonRows = groupRowOrder[boonType];
    let boonColumns = (boonKeys.length + 1) as SemanticWIDTHS;
    const columnHeader: string[] = hideHeader ? [] : ['header'];

    //@ts-ignore // TODO: fix this TS issue
    return [...columnHeader, ...boonRows].map((boonRow: string) => {
      const rowHeader = (
        <BoonHeader
          key={`${boonRow}Header`}
          boonType={boonType}
          headerType='row'
          name={boonRow}
          rowHeaderWidth={rowHeaderWidth}
        />
      );

      const rows: JSX.Element[][] = [[]];

      boonKeys.forEach((boonKey: string) => {
        let rowBoons: AnyBoon[] = groupBoons[boonKey][boonType][boonRow] as AnyBoon[];
        if (horizontal && boonRow !== 'header' && split) {
          boonColumns = (split + 1) as SemanticWIDTHS;
          // TODO: make this work for >2 rows
          const rowCount = Math.ceil(rowBoons.length / split);
          for (let rowNumber = 0; rowNumber < rowCount; rowNumber++) {
            const start = rowNumber * (split - 1);
            const end = (rowNumber + 1) * (split - 1);
            let slicedRowBoons = rowBoons.slice(start, end);
            if (!rows[rowNumber]) {
              rows.push([]);
            }
            // TODO: clean the duplicated code up
            rows[rowNumber].push(
              boonRow === 'header'
                ? <BoonHeader
                    key={`${boonKey}${boonRow}ColumnHeader`}
                    name={boonKey}
                    boonType={boonType}
                    headerType='column'
                  />
                : <BoonRowGroup
                    key={`${boonKey}${boonRow}Column`}
                    basic={basic}
                    boonKey={boonKey}
                    boonType={boonType}
                    boonRow={boonRow}
                    horizontal={horizontal}
                    rowBoons={slicedRowBoons}
                  />
            );
            const remainder = (split - 1) - slicedRowBoons.length;
            if (remainder) {
              for (let emptyColumns = 0; emptyColumns < remainder; emptyColumns++) {
                rows[rowNumber].push(<Grid.Column key={`${boonRow}Filler${emptyColumns+1}`}></Grid.Column>);
              }
            }
          }
        } else {
          rows[0].push(
            boonRow === 'header'
              ? <BoonHeader
                  key={`${boonKey}${boonRow}ColumnHeader`}
                  name={boonKey}
                  boonType={boonType}
                  headerType='column'
                />
              : <BoonRowGroup
                  key={`${boonKey}${boonRow}Column`}
                  basic={basic}
                  boonKey={boonKey}
                  boonType={boonType}
                  boonRow={boonRow}
                  horizontal={horizontal}
                  rowBoons={rowBoons}
                />
          );
        }
      });

      return rows.map((row, i) => (
        <Grid.Row key={`${boonRow}Row${i}`} columns={boonColumns}>
          {displayRowHeader(i, rowHeader)}
          {row}
        </Grid.Row>
      ));
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
