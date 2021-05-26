import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Menu, Segment } from 'semantic-ui-react';

import { setCurrentPage } from 'redux/actions';
import { AppState } from 'redux/domain';

import ActionButtons from './ActionButtons';
import LinkButtons from './LinkButtons';

const mapStateToProps = (state: AppState) => ({
  currentPage: state.pages.current,
  pageList: state.pages.list
});

const mapDispatchToProps = {
  onChangeCurrentPage: (currentPage: string) => setCurrentPage(currentPage),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Navbar = ({
  currentPage,
  onChangeCurrentPage,
  pageList
}: Props): JSX.Element => {
  const handlePageChange = (event: any, result: any) => onChangeCurrentPage(result.id);

  const generatePageButtons = () => (
    pageList.map(({ text, url }) => (
      <Link key={`page${text}`} to={url}>
        <Button
          className='NavbarButton'
          key={`navButton${text}`}
          id={text}
          active={ currentPage === text }
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
