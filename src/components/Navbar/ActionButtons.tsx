import React, { useState } from 'react';
import { Button, Dropdown, Header, Icon, Menu, Modal } from 'semantic-ui-react';

import { copyLocalStorage } from 'redux/state';

const ShowModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='mini'
      trigger={<Button className='NavbarButton' color='black'>Data</Button>}
    >
      <Header icon>
        <Icon name='trash' />
        Reset Data
      </Header>
      <Modal.Content className='modalText'>Are you sure? You cannot undo this action.</Modal.Content>
      <Modal.Actions className='modalButtons'>
        <Button color='blue' inverted onClick={() => copyLocalStorage()}>
          <Icon name='save' /> Save First
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const ActionButtons = (): JSX.Element => {
  return (
    <Menu.Item name='actions'>
      <Dropdown className='NavbarButton' text='Data'>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => copyLocalStorage()}
>Export</Dropdown.Item>
          <Dropdown.Item>Import</Dropdown.Item>
          <Dropdown.Item>Reset</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ShowModal />
    </Menu.Item>
  );
};

export default ActionButtons;
