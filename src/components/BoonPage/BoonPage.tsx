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
        <Grid.Row key={`${currentPage}_row`}>
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
          <Grid.Column key={'Active_Table'} width={2}>
            <BoonTable boonType={BoonTables.Keepsakes} />
            <BoonTable boonType={BoonTables.Talents} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

};

export default connect(mapStateToProps)(BoonPage);
