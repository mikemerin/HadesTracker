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
  const generateBoonTable = (): JSX.Element => {
    const { image, unlocked } = boons[name];
    return (
      <table style={{opacity: `${unlocked ? 1 : .3}`}}><tbody><tr>
        <td><img {...image} alt={image.alt} /></td>
        <td>{name}</td>
      </tr></tbody></table>
    );
  };

  return (
    generateBoonTable()
  );
};

export default connect(mapStateToProps)(Boon);
