import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import { AnyBoon } from 'redux/domain';
import { getState } from 'redux/selectors';
import { nameSanitizer } from 'utils';

import BoonCell from './BoonCell';
import { BoonStyles } from './Boon.styles';

type Props = {
  basic?: boolean,
  boonKey: string,
  boonType: string,
  boonRow: string,
  horizontal?: boolean,
  rowBoons: AnyBoon[],
};

const BoonRowGroup = ({
  basic,
  boonKey,
  boonType,
  boonRow,
  horizontal,
  rowBoons,
}: Props): JSX.Element => {
  useSelector(getState); /* TODO: BAD! but needed for now.
  Without listening to state here, the groups do not update (color, disable/enable, etc) */
  const rowGroupId = [boonKey, boonRow, 'RowGroup'].map((id, index) => {
    const idString = id.toString();
    return idString[0].toUpperCase() + idString.slice(1);
  }).join('');

  const generateBoonCell = (boonCellId: string, individualBoon: AnyBoon) => {
    const style = BoonStyles({boonKey, boonType, boonRow, individualBoon});
    return <BoonCell key={boonCellId} name={individualBoon} style={style} basic={basic}/>;
  };

  if (horizontal) {
    return <>{
        rowBoons && rowBoons.map((individualBoon, i) => {
          const boonCellId = nameSanitizer(`${individualBoon} BoonCell`);
          return (
            <Grid.Column key={`${boonCellId}Column`} id={`${boonCellId}_column`}>
              <Segment.Group raised size='mini'>
                { generateBoonCell(boonCellId, individualBoon) }
              </Segment.Group>
            </Grid.Column>
          );
        })
    }</>;
  } else {
    return (
      <Grid.Column key={rowGroupId} id={rowGroupId}>
        <Segment.Group raised size='mini'>{
          rowBoons && rowBoons.map((individualBoon, i) => {
            const boonCellId = nameSanitizer(`${individualBoon} BoonCell`);
            return generateBoonCell(boonCellId, individualBoon);
          })
        }</Segment.Group>
      </Grid.Column>
    );
  };
};

export default BoonRowGroup;
