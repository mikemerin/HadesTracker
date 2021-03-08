import React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'redux/domain';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
});

type Props = ReturnType<typeof mapStateToProps> & {
  name: string
};

const Boon = ({
  boons,
  name,
}: Props) => {
  const generateBoon = (): JSX.Element => {
    const { image, prophecyForetold, unlocked } = boons[name];
    const size = '20px';
    const style = {
      opacity: `${unlocked ? 1 : .3}`,
      width: '100%',
    };
    return (
      <table style={{...style}}><tbody><tr>
        <td width='10%'><img {...image} alt={image.alt} width={size} height={size}/></td>
        <td width='60%'>{name}</td>
        <td width='30%'>{prophecyForetold ? 'Y' : 'N'}</td>
      </tr></tbody></table>
    );
  };

  return (
    generateBoon()
  );
};

export default connect(mapStateToProps)(Boon);
