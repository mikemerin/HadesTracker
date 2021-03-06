import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';

import { setCurrentPage } from 'redux/actions';
import { AppState } from 'redux/domain';

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

  const generateButtons = () => (
    pageList.map(({ text, url }) => (
      <Link key={`page${text}`} to={url}>
        <Button
          className="NavbarButton"
          key={`navButton${text}`}
          id={text}
          active={ currentPage === text }
          color='black'
          style={{color: '#e8c423'}}
          onClick={handlePageChange}
        >
          { text }
        </Button>
      </Link>
    ))
  );

  return (
    <Menu className="Navbar" color='black' borderless inverted fixed='top'>
      <Menu.Item name='links'>
        { generateButtons() }
      </Menu.Item>
    </Menu>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
