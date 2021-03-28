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

const Boons = ({
  currentPage,
}: Props): JSX.Element => {
  if (currentPage === Pages.Other.text) {
    return (
      <Grid key={currentPage} padded>
        <Grid.Row columns={2} >
          <Grid.Column>
            <BoonTable boonType={BoonTables.Other} />
          </Grid.Column>
          <Grid.Column>
            <BoonTable boonType={BoonTables.Chaos} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else if (currentPage === Pages.Weapons.text) {
    return (
      <>
        <BoonTable boonType={BoonTables.Weapon} />
        <BoonTable boonType={BoonTables.Aspects} hideHeader />
      </>
    );
  } else {
    return (
      <Grid key={currentPage} padded>
        <Grid.Row key={`${currentPage}_row`} columns={16}>
          <Grid.Column key={'Solo_Duo_Tables'} width={14}>
            <BoonTable boonType={BoonTables.Solo} />
            <BoonTable boonType={BoonTables.Duo} hideHeader />
          </Grid.Column>
          <Grid.Column key={'Item_Table'} width={2}>
            <BoonTable boonType={BoonTables.Items} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

};

export default connect(mapStateToProps)(Boons);
