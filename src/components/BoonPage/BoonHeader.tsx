import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, SemanticWIDTHS } from 'semantic-ui-react';

import { BoonTables } from 'redux/domain';
import { getBoons } from 'redux/selectors';

import { nameMaps, weaponNameMaps } from 'data/NameMaps';

type Props = {
  name: string,
  boonType: string,
  headerType: string,
  rowHeaderWidth?: SemanticWIDTHS,
};

const BoonHeader = ({
  boonType,
  headerType,
  name,
  rowHeaderWidth,
}: Props): JSX.Element => {
  const boons = useSelector(getBoons);
  const { image } = boons[name] || {};

  if (headerType === 'row') {
    if (!image && name !== 'header') {
      console.error('can not find the following row:');
      console.error('name:', name);
      console.error('boonType:', boonType);
      console.error('headerType:', headerType);
      return <></>;
    }

    const size = '20px';
    return (
      <Grid.Column key={`${name}RowHeader`} width={rowHeaderWidth}>
        {name !== 'header' && (
          <table className='rowHeaderTable'><tbody><tr>
            <td className='rowTextCell'>{nameMaps[name] || name}</td>
            <td className='rowIconCell'><img {...image} alt={image.alt} width={size} height={size}/></td>
          </tr></tbody></table>
        )}
      </Grid.Column>
    );
  } else {
    if (!image) {
      console.error('can not find the following header:');
      console.error('name:', name);
      console.error('boonType:', boonType);
      console.error('headerType:', headerType);
      return <></>;
    }

    const size = '40px';
    const text = (nameMaps[name] || name) + (boonType === BoonTables.Weapon ? ` (${weaponNameMaps[name]})` : '')
    return (
      <Grid.Column key={`${name}Header`}>
        <b>{text}</b>
        <br />
        <img {...image} alt={image.alt} width={size} height={size}/>
      </Grid.Column>
    );
  }
};

export default BoonHeader;
