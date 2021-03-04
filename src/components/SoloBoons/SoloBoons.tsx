import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS, Segment } from 'semantic-ui-react';

import { setCurrentPage } from 'redux/actions';
import { AppState, Boons } from 'redux/domain';

import { soloBoons } from 'data/boons';
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

const SoloBoons = ({
  currentPage,
  onChangeCurrentPage,
  pageList
}: Props): JSX.Element => {
  console.log(images)
  const soloBoonCount = Object.keys(soloBoons).length;
  const soloBoonColumns = (soloBoonCount + 1) as SemanticWIDTHS;

  const generateSoloBoonRows = (): JSX.Element[] => {
    return ['header', ...Object.keys(Boons)].map((boonType: string) => {
      const rowHeader = (
        <Grid.Column key={`${boonType}RowHeader`} width={1}>
          {boonType !== 'header' &&
            <table><tbody><tr>
              <td><img {...images[boonType]} alt={images[boonType].alt} /></td>
              <td>{boonType}</td>
            </tr></tbody></table>
          }
        </Grid.Column>
      );

      const columns = Object.keys(soloBoons).map((god: string) => {
        if (boonType === 'header') {
          return (
            <Grid.Column key={`${god}Header`}>
              <b>{god}</b>
              <br />
              <img {...images[god]} alt={images[god].alt} />
            </Grid.Column>
          );
        } else {
          const color = colors[god];
          const boonName = soloBoons[god][boonType];
          if (Array.isArray(boonName)) {
            return (
              <Grid.Column key={`${god}${boonType}`}>
                <Segment.Group raised size='mini'>{
                  boonName.map((individualBoon, i) => (
                      <Segment key={`${god}${boonType}${i}`} style={{padding: 0, border: `1px solid ${color}`}}>
                        <table><tbody><tr>
                          <td>{<img {...images[individualBoon || 'Other_Empty']} alt={images[individualBoon || 'Other_Empty'].alt} />}</td>
                          <td>{individualBoon || 'N/A'}</td>
                        </tr></tbody></table>
                      </Segment>
                  ))
                }</Segment.Group>
              </Grid.Column>
            );
          } else {
            return (
              <Grid.Column key={`${god}${boonType}`}>
                <Segment size='mini' raised style={{padding: '0', border: `1px solid ${color}`}}>
                  <table><tbody><tr>
                    <td>{<img {...images[boonName || 'Other_Empty']} alt={images[boonName || 'Other_Empty'].alt} />}</td>
                    <td>{boonName || 'N/A'}</td>
                  </tr></tbody></table>
                </Segment>
              </Grid.Column>
            );
          }
        }
      });

      return (
        <Grid.Row key={boonType} columns={soloBoonColumns}>
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
      {generateSoloBoonRows()}
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SoloBoons);
