import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  BoonTables,
  Weapons,
} from 'redux/domain';

import { Grid, SemanticWIDTHS } from 'semantic-ui-react';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons
});

type Props = ReturnType<typeof mapStateToProps> & {
  name: string,
  boonColumns: SemanticWIDTHS,
  boonType: string,
  headerType: string,
};

const weaponNames: {[key: string]: string} = {
  [Weapons.Blade]: 'Stygius',
  [Weapons.Bow]: 'Coronacht',
  [Weapons.Fists]: 'Malphon',
  [Weapons.Rail]: 'Exagryph',
  [Weapons.Shield]: 'Aegis',
  [Weapons.Spear]: 'Varatha',
};

const BoonHeader = ({
  boons,
  name,
  boonColumns,
  boonType,
  headerType,
}: Props) => {
  const generateHeader = (): JSX.Element => {
    const { image } = boons[name] || {};

    if (headerType === 'row') {
      const size = '20px';
      const width = boonColumns > 5 ? 1 : 2;
      return (
        <Grid.Column key={`${name}RowHeader`} width={width}>
          {name !== 'header' && (
            <table><tbody><tr>
              <td><img {...image} alt={image.alt} width={size} height={size}/></td>
              <td>{name}</td>
            </tr></tbody></table>
          )}
        </Grid.Column>
      );
    } else {
      const size = '40px';
      const text = name + (boonType === BoonTables.Weapon ? ` (${weaponNames[name]})` : '')
      return (
        <Grid.Column key={`${name}Header`}>
          <b>{text}</b>
          <br />
          <img {...image} alt={image.alt} width={size} height={size}/>
        </Grid.Column>
      );
    }
  };

  return (
    generateHeader()
  );
};

export default connect(mapStateToProps)(BoonHeader);
