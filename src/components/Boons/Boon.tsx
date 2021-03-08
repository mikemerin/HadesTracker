import React from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  Items,
} from 'redux/domain';

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
    const { active, image, prophecyForetold, unlocked } = boons[name];
    let activeImage;

    if (active) {
      activeImage = boons[Items.Active].image;
      activeImage.title = `Click to deactivate ${name}`;
    } else {
      activeImage = boons[Items.Inactive].image;
      if (unlocked) {
        activeImage.title = `Click to activate ${name}`;
      } else {
        activeImage.title = `Unlock first before activating ${name}`;
      }
    }

    let prophecyImage;
    if (prophecyForetold) {
      prophecyImage = boons[Items.Prophecy_Foretold].image;
      prophecyImage.title = `Click to forget prohecy for ${name}`
    } else {
      prophecyImage = boons[Items.Prophecy_Not_Foretold].image;
      prophecyImage.title = `Click to fortell prohecy for ${name}`
    }

    const size = '20px';
    const style = {
      opacity: `${unlocked ? 1 : .3}`,
      width: '100%',
    };
    return (
      <table style={{...style}}><tbody><tr>
        <td width='10%'><img {...image} alt={image.alt} width={size} height={size}/></td>
        <td width='70%'>{name}</td>
        <td width='10%' className='prophecyIcon'><img {...prophecyImage} alt={prophecyImage.alt} width={size} height={size}/></td>
        <td width='10%'><img {...activeImage} alt={activeImage.alt} width={size} height={size}/></td>
      </tr></tbody></table>
    );
  };

  return (
    generateBoon()
  );
};

export default connect(mapStateToProps)(Boon);
