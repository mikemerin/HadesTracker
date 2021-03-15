import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal, SemanticICONS } from 'semantic-ui-react';

import { resetBoons, setBoons } from 'redux/actions';
import { AppState, BoonState } from 'redux/domain';
import { exportLocalStorage } from 'redux/state';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
});

const mapDispatchToProps = {
  onResetBoons: () => resetBoons(),
  onSetBoons: (boons: BoonState) => setBoons(boons),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  type: string,
};

const ActionModal = ({
  boons,
  onResetBoons,
  onSetBoons,
  type,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const icon: {[key: string]: string} = {
    Export: 'upload',
    Reset: 'trash',
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
        <Icon name={icon[type] as SemanticICONS} />
        {type} Data
      </Header>
      <Modal.Content className='modalText'>Are you sure? You cannot undo this action.</Modal.Content>
      <Modal.Actions className='modalButtons'>
        <Button color='blue' inverted onClick={() => exportLocalStorage()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ActionModal);
