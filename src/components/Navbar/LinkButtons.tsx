import React, { useState } from 'react';
import { Menu, Modal, Icon, Popup, SemanticICONS } from 'semantic-ui-react';

type ButtonInfo = {
  content: string,
  url: string,
  icon: string,
};

const buttons: ButtonInfo[] = [
  {content: 'Download the Game on Steam!', url: 'https://store.steampowered.com/app/1145360/Hades/', icon: 'download' },
  {content: 'Github', url: 'http://github.com/mikemerin', icon: 'github square' },
  {content: 'Blog', url: 'https://mikemerin.github.io', icon: 'graduation' },
  {content: 'Twitch', url: 'http://twitch.tv/shadowsdieaway', icon: 'twitch' },
  {content: 'Twitter', url: 'https://twitter.com/MikeMerin', icon: 'twitter square' },
];

const buttonTemplate = ({ content, url, icon }: ButtonInfo): JSX.Element => (
  <Popup key={content} position='bottom center' content={content} trigger={
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className='NavbarButton' name={icon as SemanticICONS} />
    </a>
  }/>
);

const LinkButtons = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <Menu.Item name='links'>
      { buttons.map((button) => buttonTemplate({...button})) }
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='tiny'
        dimmer='blurring'
        closeIcon
        className='modalText'
        trigger={<Icon name='info' className='NavbarButton clickable'/>}
      >

        <Modal.Header>Hades Tracker</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>This website was created by ShadowsDieAway</p><br/>
            <p>It was built with React/Redux/TypeScript and Semantic-UI-React</p><br/>
            <p>Please use the other icons for game and profile links</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Menu.Item>
  );
};

export default LinkButtons;
