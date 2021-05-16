import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import {
  AppState,
  BoonTables,
  Pages,
} from 'redux/domain';

import BoonTable from './BoonTable';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.pages.current,
});

type Props = ReturnType<typeof mapStateToProps>;

const BoonPage = ({
  currentPage,
}: Props): JSX.Element => {
  if (currentPage === Pages.Weapons.text) {
    return (
      <>
        <BoonTable boonType={BoonTables.Weapon} />
        <BoonTable boonType={BoonTables.Aspects} hideHeader />
      </>
    );
  } else {
    return (
      <Grid key={currentPage} padded>
        <Grid.Row key={`${currentPage}_active_row`} className='topRow'>
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

        <Grid.Row key={`${currentPage}_boon_row`}>
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

export default connect(mapStateToProps)(BoonPage);
