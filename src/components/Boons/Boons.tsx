import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';


import { setCurrentPage } from 'redux/actions';
import { AppState, BoonTypes, SoloBoons } from 'redux/domain';

import { boonList } from 'data/boons';
import { colors } from 'data/gods';
import images from 'assets/images';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.currentPage,
  pageList: state.pageList
});

const mapDispatchToProps = {
  onChangeCurrentPage: (currentPage: string) => setCurrentPage(currentPage),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Boons = ({
  currentPage,
  onChangeCurrentPage,
  pageList
}: Props): JSX.Element => {
  // const params = useRouteMatch().params;
  // console.log(params)
  // console.log(images)

  const generateBoonRows = (boonType: string): JSX.Element[] => {
    const boonKeys = Object.keys(boonList).filter((boonKey) => boonList[boonKey][boonType]);
    const boonRows = Object.keys(boonList[boonKeys[0]][boonType]);
    const boonCount = boonKeys.length;
    const boonColumns = (boonCount + 1) as SemanticWIDTHS;

    return ['header', ...boonRows].map((boonRow: string) => {
      console.log(boonRow, images[boonRow])
      const rowHeader = (
        <Grid.Column key={`${boonRow}RowHeader`} width={1}>
          {boonRow !== 'header' &&
            <table><tbody><tr>
              <td><img {...images[boonRow]} alt={images[boonRow].alt} /></td>
              <td>{boonRow}</td>
            </tr></tbody></table>
          }
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
                      <table><tbody><tr>
                        <td>{<img {...images[individualBoon || 'Other_Empty']} alt={images[individualBoon || 'Other_Empty'].alt} />}</td>
                        <td>{individualBoon || 'N/A'}</td>
                      </tr></tbody></table>
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
      {generateBoonRows(BoonTypes.Solo)}
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Boons);
