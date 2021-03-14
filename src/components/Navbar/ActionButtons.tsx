import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const ActionButtons = (): JSX.Element => {
  return (
    <Menu.Item name='actions'>
      <Dropdown className='NavbarButton' text='Data'>
        <Dropdown.Menu>
          <Dropdown.Item>Export</Dropdown.Item>
          <Dropdown.Item>Import</Dropdown.Item>
          <Dropdown.Item>Reset</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default ActionButtons;
