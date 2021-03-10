import React from 'react';
import { connect } from 'react-redux';

import {
  setBoonActive,
  setBoonProphecyForetold,
  setDisplayInfo,
} from 'redux/actions';
import {
  AppState,
  Items,
} from 'redux/domain';

const mapStateToProps = (state: AppState) => ({
  boons: state.boons,
  display: state.display,
});

const mapDispatchToProps = {
  onSetBoonActive: (boon: any, active: any) => setBoonActive(boon, active),
  onSetDisplayInfo: (unlocksBoons: string[]) => setDisplayInfo(unlocksBoons),
  onSetBoonProphecyForetold: (boon: any, prophecyForetold: any) => setBoonProphecyForetold(boon, prophecyForetold),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  name: string
};

const BoonCell = ({
  boons,
  display,
  onSetBoonActive,
  onSetBoonProphecyForetold,
  onSetDisplayInfo,
  name,
}: Props) => {
  const handleActive = (event: any) => onSetBoonActive(name, !boons[name].active);
  const handleProphecyChange = (event: any) => onSetBoonProphecyForetold(name, !boons[name].prophecyForetold);

  const generateBoonCell = (): JSX.Element => {
    const { active, image, prophecyForetold, unlocked, unlocks } = boons[name];
    const { unlocksBoons } = display;

    const displayRelatedBoons = (show: boolean) => {
      if (unlocks) {
        if (show) {
          onSetDisplayInfo(unlocks);
        } else {
          onSetDisplayInfo([]);
        }
      }
    };

    const prophecyImage = boons[prophecyForetold ? Items.Prophecy_Foretold : Items.Prophecy_Not_Foretold].image;
    prophecyImage.title = `Click to ${prophecyForetold ? 'remove' : 'foretell'} prophecy ${name}`;

    let activeClass, activeImage, activeStyle;

    // if (requiresBoons.includes(name)) { // TODO: next commit: requirements (more complex)
    //   activeImage = boons[Items.Codex_Locked].image;
    if (unlocksBoons.includes(name)) { // TODO: after this becomes a Set, unlocksBoons.has(name)
      activeImage = boons[Items.Chthonic_Key].image;
    } else {
      activeImage = boons[active ? Items.Active : Items.Inactive].image;
      activeClass = `${unlocked ? '' : 'un'}clickable`;
      activeImage.title = unlocked ? `Click to ${active ? 'de' : ''}activate ${name}` : `Unlock ${name} before activating`;
      activeStyle = { opacity: `${unlocked ? 1 : .3}` };
    }

    return (
      <table className='boonCellTable'>
        <tbody>
          <tr>
            <td width='10%' style={{...activeStyle}}>
              <img className={`rowIcon ${unlocked ? '' : 'greyscale'}`} {...image} alt={image.alt} />
            </td>
            <td width='70%' className='outlineText'>{name}</td>
            <td width='10%' onClick={handleProphecyChange}>
              <img className='rowIcon clickable' {...prophecyImage} alt={prophecyImage.alt} />
            </td>
            <td width='10%'
              {...(unlocked && { onClick: handleActive })}
              onMouseEnter={() => displayRelatedBoons(true)}
              onMouseLeave={() => displayRelatedBoons(false)}
            >
              <img className={`rowIcon ${activeClass}`} {...activeImage} alt={activeImage.alt} style={{...activeStyle}}/>
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
