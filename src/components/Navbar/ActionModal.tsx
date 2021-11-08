import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Header, Icon, Modal, SemanticICONS } from 'semantic-ui-react';

import { resetBoons, setBoons } from 'redux/actions';
import {
  BoonResetTypes,
  DataActions,
} from 'redux/domain';
import { exportLocalStorage } from 'redux/state';

import { boonFileChecker } from 'utils';

const ActionModal = ({ type }: { type: string }): JSX.Element => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const data: {[key: string]: {[key: string]: string}} = {
    [DataActions.Import]: {
      icon: 'upload',
      text: 'Load an exported file from your computer',
    },
    [DataActions.ResetRun]: {
      icon: 'user times',
      text: 'Just like your new runs, you\'ll keep your "Prophecy Foretold" info but remove all "Active" boons',
    },
    [DataActions.ResetAll]: {
      icon: 'trash',
      text: 'This will reset EVERYTHING letting you start from scratch',
    },
  };

  const importIfValid = () => {
    const boons = localStorage.getItem('temp');
    if (boons) {
      dispatch(setBoons(JSON.parse(boons)));
    }
  };

  const importInfo = () => {
    localStorage.removeItem('temp');
    return (
      <span>
        <br /><br />
        <input type='file' id='file-input' onChange={(e) => boonFileChecker(e)} />
      </span>
    );
  };

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='mini'
      trigger={<span>{type}</span>}
    >
      <Header icon>
        <Icon name={data[type].icon as SemanticICONS} />
        {type}
        {type === DataActions.Import && importInfo()}
      </Header>

      <Modal.Content className='modalText'>{data[type].text}</Modal.Content>
      <Modal.Content className='modalText'>Are you sure? You cannot undo this action.</Modal.Content>
      <Modal.Actions className='modalButtons'>
        <Button color='blue' inverted onClick={() => exportLocalStorage()}>
          <Icon name='save' /> Save First
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => {
          type === DataActions.Import && importIfValid();
          type === DataActions.ResetRun && dispatch(resetBoons(BoonResetTypes.Active));
          type === DataActions.ResetAll && dispatch(resetBoons(BoonResetTypes.All));
          setOpen(false);
        }}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ActionModal;
