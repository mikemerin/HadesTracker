import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

import { DataActions } from 'redux/domain';
import { exportLocalStorage } from 'redux/state';

import ActionModal from './ActionModal';

const ActionButtons = (): JSX.Element => (
  <Menu.Item name='actions'>
    <Button className='NavbarButton' size='tiny' color='black'>
      <ActionModal type={DataActions.ResetRun}/>
    </Button>
    <Button className='NavbarButton' size='tiny' color='black'
      onClick={() => exportLocalStorage()}>Export Data
    </Button>
    <Button className='NavbarButton' size='tiny' color='black'>
      <ActionModal type={DataActions.Import}/>
    </Button>
    <Button className='NavbarButton' size='tiny' color='black'>
      <ActionModal type={DataActions.ResetAll}/>
    </Button>
  </Menu.Item>
);

export default ActionButtons;
