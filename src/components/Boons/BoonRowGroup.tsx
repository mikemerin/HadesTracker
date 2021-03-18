import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import { AppState, Boon } from 'redux/domain';
import { nameSanitizer } from 'utils';

import BoonCell from './BoonCell';
import { BoonStyles } from './Boon.styles';

const mapStateToProps = (state: AppState) => ({
  state: state, // BAD! but needed for now
  groupBoons: state.groups.boons,
});

type Props = ReturnType<typeof mapStateToProps> & {
  boonKey: string,
  boonType: string,
  boonRow: string,
};

const BoonRowGroup = ({
  boonKey,
  boonType,
  boonRow,
  groupBoons,
  state,
}: Props): JSX.Element => {
  const rowBoons: Boon[] = groupBoons[boonKey][boonType][boonRow] as Boon[];
  const rowGroupId = `${boonKey} ${boonRow} RowGroup`;
  return (
    <Grid.Column key={rowGroupId} id={rowGroupId}>
      <Segment.Group raised size='mini'>{
        rowBoons && rowBoons.map((individualBoon, i) => {
          const style = BoonStyles({boonKey, boonType, boonRow, individualBoon});
          const boonCellId = nameSanitizer(`${individualBoon} BoonCell`);
          return <BoonCell key={boonCellId} name={individualBoon} style={style}/>;
        })
      }</Segment.Group>
    </Grid.Column>
  );
};

export default connect(mapStateToProps)(BoonRowGroup);
