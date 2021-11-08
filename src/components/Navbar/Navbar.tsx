import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, Segment } from 'semantic-ui-react';

import { setCurrentPage } from 'redux/actions';
import { getPages } from 'redux/selectors';

import ActionButtons from './ActionButtons';
import LinkButtons from './LinkButtons';

const Navbar = (): JSX.Element => {
  const dispatch = useDispatch();
  const { current, list } = useSelector(getPages);

  const handlePageChange = (event: any, result: any) => dispatch(setCurrentPage(result.id));

  const generatePageButtons = () => (
    list.map(({ text, url }) => (
      <Link key={`page${text}`} to={url}>
        <Button
          className='NavbarButton'
          key={`navButton${text}`}
          id={text}
          active={ current === text }
          color='black'
          size='small'
          onClick={handlePageChange}
        >
          { text }
        </Button>
      </Link>
    ))
  );

  return (
    <Segment inverted>
      <Menu className='Navbar' color='black' fluid widths={3} inverted pointing fixed='top'>
        <Menu.Item name='pages'>
          { generatePageButtons() }
        </Menu.Item>
        <ActionButtons />
        <LinkButtons />
      </Menu>
    </Segment>
  )
}

export default Navbar;
