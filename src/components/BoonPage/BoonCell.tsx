import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import {
  setBoonActive,
  setBoonProphecyForetold,
  setDisplayInfo,
} from 'redux/actions';
import {
  AnyBoon,
  BoonTypes,
  Icons,
} from 'redux/domain';
import { getBoons, getDisplay } from 'redux/selectors';

import { BoonStyle } from './Boon.styles';
import { getBoonHoverText } from 'utils';

type Props = {
  basic?: boolean,
  name: AnyBoon,
  style: BoonStyle,
};

const BoonCell = ({
  basic,
  name,
  style,
}: Props) => {
  const dispatch = useDispatch();
  const display = useSelector(getDisplay);
  const boons = useSelector(getBoons);
  const boon = boons[name];

  const handleActive = (event: any) => dispatch(setBoonActive(name, !boon.active));
  const handleProphecyChange = (event: any) => dispatch(setBoonProphecyForetold(name, !boon.prophecyForetold));

  const { active, image, prophecyForetold, requirements, restricted, restrictedBy, restricts, swapsWith, type, unlocked, unlocks } = boon;
  const { requiresBoons, restrictedByBoons, restrictsBoons, swapsWithBoons, unlocksBoons } = display;

  const clickable = (active || unlocked) && !restricted;

  const displayRelatedBoons = (show: boolean) => {
    if (requirements || restrictedBy || restricts || swapsWith || unlocks) {
      dispatch(setDisplayInfo(show ? {requirements, restrictedBy, restricts, swapsWith, unlocks} : {}));
    }
  };

  let activeClass, activeImage, activeStyle;
  if (requiresBoons.map(({boons}) => boons).flat().includes(name as AnyBoon)) { // TODO: next commit: requirements (more complex)
    activeImage = boons[Icons.Requires].image;
  } else if (restrictedByBoons.includes(name)) { // TODO: after this becomes a Set, restrictedByBoons.has(name)
    activeImage = boons[Icons.Codex_Locked].image;
  } else if (restrictsBoons.includes(name)) { // TODO: after this becomes a Set, restrictsBoons.has(name)
    activeImage = boons[Icons.Restricted].image;
  } else if (swapsWithBoons.includes(name)) { // TODO: after this becomes a Set, swapsWithBoons.has(name)
    activeImage = boons[Icons.Swap].image;
  } else if (unlocksBoons.includes(name)) { // TODO: after this becomes a Set, unlocksBoons.has(name)
    activeImage = boons[Icons.Chthonic_Key].image;
  } else {
    activeStyle = { opacity: `${unlocked && !restricted ? 1 : .3}` };
    activeImage = boons[active ? Icons.Active : restricted ? Icons.Restricted : Icons.Inactive].image;
    activeImage.title = getBoonHoverText(boon, clickable, name);
  }
  activeClass = `${clickable ? '' : 'un'}clickable`;

  const displayText = () => (
    <td className='outlineText'>{!basic && name}</td>
  );

  const displayProphecy = () => {
    const prophecyImage = boons[prophecyForetold ? Icons.Prophecy_Foretold : Icons.Prophecy_Not_Foretold].image;
    prophecyImage.title = `${prophecyForetold ? 'Remove' : 'Foretell'} prophecy ${name}`;

    if (type === BoonTypes.Tracked) {
      return (
        <td className='rowIconCell'>
          <img className='rowIcon clickable' {...prophecyImage} alt={prophecyImage.alt} onClick={handleProphecyChange}/>
        </td>
      )
    } else if (type === BoonTypes.Not_Tracked_Boon) {
      return <td className='rowIconCell'></td>;
    }
  };

  return (
    <Segment style={{...style}}>
      <table className='boonCellTable'>
        <tbody>
          <tr>
            <td className='rowIconCell' style={{...activeStyle}}>
              <img className={`rowIcon ${unlocked ? '' : 'greyscale'}`} {...image} alt={image.alt} />
            </td>
            { displayText() }
            { displayProphecy() }
            <td className='rowIconCell'>
              <img {...(clickable && { onClick: handleActive })}
              onMouseEnter={() => displayRelatedBoons(true)}
              onMouseLeave={() => displayRelatedBoons(false)} className={`rowIcon ${activeClass}`} {...activeImage} alt={activeImage.alt} style={{...activeStyle}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </Segment>
  );
};

export default BoonCell;
