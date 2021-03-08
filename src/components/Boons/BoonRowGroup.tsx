import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import {
  AppState, Boons
} from 'redux/domain';

import BoonCell from './BoonCell';
import { BoonStyles } from './Boon.styles';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
  groupBoons: state.groups.boons,
});

type Props = ReturnType<typeof mapStateToProps> & {
  boonKey: string,
  boonType: string,
  boonRow: string,
};

const BoonRowGroup = ({
  boons,
  groupBoons,
  boonKey,
  boonType,
  boonRow,
}: Props): JSX.Element => {
  const rowBoons = groupBoons[boonKey][boonType][boonRow];
  return (
    <Grid.Column key={`${boonKey}${boonRow}`}>
      <Segment.Group raised size='mini'>{
        rowBoons && rowBoons.map((individualBoon, i) => {
          const style = BoonStyles({boonKey, boonType, boonRow, individualBoon});
          return (
            <Segment key={`${boonKey}${boonRow}${i}`} style={{...style}}>
              {<BoonCell name={individualBoon} />}
            </Segment>
          );
        })
      }</Segment.Group>
    </Grid.Column>
  );
};

export default connect(mapStateToProps)(BoonRowGroup);
