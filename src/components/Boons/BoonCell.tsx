import React from 'react';
import { connect } from 'react-redux';

import { setBoonActive, setBoonProphecyForetold } from 'redux/actions';
import {
  AppState,
  Items,
} from 'redux/domain';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
});

const mapDispatchToProps = {
  onSetBoonActive: (boon: any, active: any) => setBoonActive(boon, active),
  onSetBoonProphecyForetold: (boon: any, prophecyForetold: any) => setBoonProphecyForetold(boon, prophecyForetold),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  name: string
};

const BoonCell = ({
  boons,
  onSetBoonActive,
  onSetBoonProphecyForetold,
  name,
}: Props) => {

  const handleActive = (event: any) => onSetBoonActive(name, !boons[name].active);
  const handleProphecyChange = (event: any) => onSetBoonProphecyForetold(name, !boons[name].prophecyForetold);

  const generateBoonCell = (): JSX.Element => {
    const { active, image, prophecyForetold, requirements, unlocked, unlocks } = boons[name];

    const displayRelatedBoons = (event: any) => {
      // name;
      // requirements;
      // unlocks;
      // TODO: turn other icons into lock if it requires that boon / key if it unlocks that boon
    };

    const activeImage = boons[active ? Items.Active : Items.Inactive].image;
    const activeClass = `${unlocked ? '' : 'un'}clickable`;
    activeImage.title = unlocked ? `Click to ${active ? 'de' : ''}activate ${name}` : `Unlock ${name} before activating`;

    const prophecyImage = boons[prophecyForetold ? Items.Prophecy_Foretold : Items.Prophecy_Not_Foretold].image;
    prophecyImage.title = `Click to ${prophecyForetold ? 'remove' : 'foretell'} prophecy ${name}`;

    const style = {
      opacity: `${unlocked ? 1 : .3}`,
    };
    return (
      <table className='boonCellTable'>
        <tbody>
          <tr>
            <td width='10%' style={{...style}}>
              <img className={`rowIcon ${unlocked ? '' : 'greyscale'}`} {...image} alt={image.alt} />
            </td>
            <td width='70%' className='outlineText'>{name}</td>
            <td width='10%' onClick={handleProphecyChange}>
              <img className='rowIcon clickable' {...prophecyImage} alt={prophecyImage.alt} />
            </td>
            <td width='10%'
              style={{...style}}
              {...(unlocked && { onClick: handleActive })}
              onMouseOver={displayRelatedBoons}
            >
              <img className={`rowIcon ${activeClass}`} {...activeImage} alt={activeImage.alt} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    generateBoonCell()
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoonCell);
