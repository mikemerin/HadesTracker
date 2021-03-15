import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react';

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
    <Dropdown className='NavbarButton' text='Data'>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => exportLocalStorage()}>Export</Dropdown.Item>
        <Dropdown.Item>Import</Dropdown.Item>
        <Dropdown.Item><ActionModal type='Reset'/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </Menu.Item>
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
