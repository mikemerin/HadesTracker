import React from 'react';
import { connect } from 'react-redux';
import { Grid, SemanticWIDTHS } from 'semantic-ui-react';

import {
  AppState,
  BoonRows,
  BoonTables,
  Items,
  Weapons,
} from 'redux/domain';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons
});

interface Mapping {
  [key: string]: string;
};

type Props = ReturnType<typeof mapStateToProps> & {
  name: string,
  boonColumns: SemanticWIDTHS,
  boonType: string,
  headerType: string,
};

const nameMaps: Mapping = {
  [Items.Fated_List]: 'Active Items/Aspects',
  [BoonRows.Aspect]: 'Aspect Unlocks',
  [BoonRows.Daedalus]: 'Daedalus Upgrades',
}

const weaponNames: Mapping  = {
  [Weapons.Stygian_Blade]: 'Stygius',
  [Weapons.Heart_Seeker_Bow]: 'Coronacht',
  [Weapons.Twin_Fists]: 'Malphon',
  [Weapons.Adamant_Rail]: 'Exagryph',
  [Weapons.Shield_of_Chaos]: 'Aegis',
  [Weapons.Eternal_Spear]: 'Varatha',
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
      if (!image && name !== 'header') {
        console.error('can not find the following row:');
        console.error('name:', name);
        console.error('boonColumns:', boonColumns);
        console.error('boonType:', boonType);
        console.error('headerType:', headerType);
        return <></>;
      }

      const size = '20px';
      const width = boonColumns > 5 ? 1 : 2;
      return (
        <Grid.Column key={`${name}RowHeader`} width={width}>
          {name !== 'header' && (
            <table><tbody><tr>
              <td><img {...image} alt={image.alt} width={size} height={size}/></td>
              <td>{nameMaps[name] || name}</td>
            </tr></tbody></table>
          )}
        </Grid.Column>
      );
    } else {
      if (!image) {
        console.error('can not find the following header:');
        console.error('name:', name);
        console.error('boonColumns:', boonColumns);
        console.error('boonType:', boonType);
        console.error('headerType:', headerType);
        return <></>;
      }

      const size = '40px';
      const text = (nameMaps[name] || name) + (boonType === BoonTables.Weapon ? ` (${weaponNames[name]})` : '')
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
