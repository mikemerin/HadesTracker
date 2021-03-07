import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'redux/domain';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons
});

type Props = ReturnType<typeof mapStateToProps> & {
  name: string
};

const Boon = ({
  boons,
  name,
}: Props) => {
  const generateBoonTable = (): JSX.Element => (
    <table><tbody><tr>
      <td><img {...boons[name].image} alt={boons[name].image.alt} /></td>
      <td>{name}</td>
    </tr></tbody></table>
  );

  return (
    generateBoonTable()
  );
};

export default connect(mapStateToProps)(Boon);
