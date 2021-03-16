import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';

import { resetBoons, setBoons } from 'redux/actions';
import { AppState, BoonState } from 'redux/domain';
import { exportLocalStorage } from 'redux/state';

import ActionModal from './ActionModal';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
});

const mapDispatchToProps = {
  onResetBoons: () => resetBoons(),
  onSetBoons: (boons: BoonState) => setBoons(boons),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const ActionButtons = ({
  boons,
  onResetBoons,
  onSetBoons,
}: Props): JSX.Element => (
  <Menu.Item name='actions'>
    <Button className='NavbarButton' color='black'
      onClick={() => exportLocalStorage()}>Export Data
    </Button>
    <Button className='NavbarButton' color='black'>
      <ActionModal type='Import'/>
    </Button>
    <Button className='NavbarButton' color='black'>
      <ActionModal type='Reset ALL'/>
    </Button>
  </Menu.Item>
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
