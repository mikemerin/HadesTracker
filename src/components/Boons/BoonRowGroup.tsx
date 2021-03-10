import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import { AppState } from 'redux/domain';
import { nameSanitizer } from 'utils';

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
  const rowGroupId = `${boonKey} ${boonRow} RowGroup`;
  return (
    <Grid.Column key={rowGroupId} id={rowGroupId}>
      <Segment.Group raised size='mini'>{
        rowBoons && rowBoons.map((individualBoon, i) => {
          const style = BoonStyles({boonKey, boonType, boonRow, individualBoon});
          const segmentId = nameSanitizer(`${individualBoon} BoonCell`);
          return (
            <Segment key={segmentId} id={segmentId} style={{...style}}>
              {<BoonCell name={individualBoon} />}
            </Segment>
          );
        })
      }</Segment.Group>
    </Grid.Column>
  );
};

export default connect(mapStateToProps)(BoonRowGroup);
