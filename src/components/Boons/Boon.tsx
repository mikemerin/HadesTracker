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
  const generateBoon = (): JSX.Element => {
    const { image, unlocked } = boons[name];
    const size = '20px';
    return (
      <table style={{opacity: `${unlocked ? 1 : .3}`}}><tbody><tr>
        <td><img {...image} alt={image.alt} width={size} height={size}/></td>
        <td>{name}</td>
      </tr></tbody></table>
    );
  };

  return (
    generateBoon()
  );
};

export default connect(mapStateToProps)(Boon);
