import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import {
  setBoonActive,
  setBoonProphecyForetold,
  setDisplayInfo,
} from 'redux/actions';
import {
  AppState,
  Boon,
  Items,
  Requirements,
} from 'redux/domain';

import { BoonStyle } from './Boon.styles';

type DisplayInfo = {
  requirements?: Requirements[],
  restrictions?: Boon[],
  unlocks?: string[],
}

type OwnProps = {
  name: Boon,
  style: BoonStyle,
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  boon: state.boons[ownProps.name],
  boons: state.boons,
  display: state.display,
  name: ownProps.name,
});

const mapDispatchToProps = {
  onSetBoonActive: (boon: any, active: any) => setBoonActive(boon, active),
  onSetDisplayInfo: ({requirements = [], restrictions = [], unlocks = []}: DisplayInfo) => setDisplayInfo(requirements, restrictions, unlocks),
  onSetBoonProphecyForetold: (boon: any, prophecyForetold: any) => setBoonProphecyForetold(boon, prophecyForetold),
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  style: any,
};

const BoonCell = ({
  boon,
  boons,
  display,
  onSetBoonActive,
  onSetBoonProphecyForetold,
  onSetDisplayInfo,
  name,
  style,
}: Props) => {
  const handleActive = (event: any) => onSetBoonActive(name, !boon.active);
  const handleProphecyChange = (event: any) => onSetBoonProphecyForetold(name, !boon.prophecyForetold);

  const { active, image, prophecyForetold, requirements, restricted, restrictions, unlocked, unlocks } = boon;
  const { requiresBoons, restrictsBoons, unlocksBoons } = display;
  const clickable = active || unlocked;

  const displayRelatedBoons = (show: boolean) => {
    if (requirements || restrictions || unlocks) {
      if (show) {
        onSetDisplayInfo({requirements, restrictions, unlocks});
      } else {
        onSetDisplayInfo({});
      }
    }
  };

  const prophecyImage = boons[prophecyForetold ? Items.Prophecy_Foretold : Items.Prophecy_Not_Foretold].image;
  prophecyImage.title = `${prophecyForetold ? 'Remove' : 'Foretell'} prophecy ${name}`;

  let activeClass, activeImage, activeStyle;
  if (requiresBoons.map(({boons}) => boons).flat().includes(name as Boon)) { // TODO: next commit: requirements (more complex)
    activeImage = boons[Items.Codex_Locked].image;
  } else if (restrictsBoons.includes(name)) { // TODO: after this becomes a Set, restrictsBoons.has(name)
    activeImage = boons[Items.Restricted].image;
  } else if (unlocksBoons.includes(name)) { // TODO: after this becomes a Set, unlocksBoons.has(name)
    activeImage = boons[Items.Chthonic_Key].image;
  } else {
    activeStyle = { opacity: `${unlocked && !restricted ? 1 : .3}` };
    activeImage = boons[active ? Items.Active : restricted ? Items.Restricted : Items.Inactive].image;
    activeImage.title = clickable
      ? `${restricted ? 'Swap to' : active ? 'Deactivate' : 'Activate'} ${name}`
      : `Unlock ${name} before you can activate it`;
  }
  activeClass = `${clickable ? '' : 'un'}clickable`;

  return (
    <Segment style={{...style}}>
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
              {...(clickable && { onClick: handleActive })}
              onMouseEnter={() => displayRelatedBoons(true)}
              onMouseLeave={() => displayRelatedBoons(false)}
            >
              <img className={`rowIcon ${activeClass}`} {...activeImage} alt={activeImage.alt} style={{...activeStyle}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </Segment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoonCell);
