import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import {
  BoonTables,
  Pages,
} from 'redux/domain';

import BoonTable from './BoonTable';
import { getPages } from 'redux/selectors';

const BoonPage = (): JSX.Element => {
  const { current } = useSelector(getPages);

  if (current === Pages.Weapons.text) {
    return (
      <>
        <BoonTable boonType={BoonTables.Weapon} />
        <BoonTable boonType={BoonTables.Aspects} hideHeader />
      </>
    );
  } else {
    return (
      <Grid key={current} padded>
        <Grid.Row key={`${current}_active_row`} className='topRow'>
          <Grid.Column key={'Keepsakes_Table'} width={6}>
            <BoonTable boonType={BoonTables.Keepsakes} split={14} basic horizontal hideHeader/>
          </Grid.Column>
          <Grid.Column key={'Companions_Table'} width={4}>
            <BoonTable boonType={BoonTables.Companions} split={7} basic horizontal hideHeader/>
          </Grid.Column>
          <Grid.Column key={'Talents_Table'} width={4}>
            <BoonTable boonType={BoonTables.Talents} split={7} basic horizontal hideHeader/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key={`${current}_boon_row`}>
          <Grid.Column key={'Solo_Duo_Tables'} width={10}>
            <BoonTable boonType={BoonTables.Solo} />
            <BoonTable boonType={BoonTables.Duo} hideHeader />
          </Grid.Column>
          <Grid.Column key={'Other_Table'} width={2}>
            <BoonTable boonType={BoonTables.Other} />
          </Grid.Column>
          <Grid.Column key={'Chaos_Table'} width={2}>
            <BoonTable boonType={BoonTables.Chaos} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

};

export default BoonPage;
