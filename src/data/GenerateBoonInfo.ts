import {
  Boon,
  BoonRow,
  BoonRows,
  BoonState,
  BoonTables,
  Gods,
  GroupBoons,
  Image,
  Requirements,
  Weapons
} from 'redux/domain';
import { boonRequirements } from './BoonRequirements';
import { boonRestrictionGroups } from './BoonRestrictionGroups';
import { nameSanitizer } from 'utils';

const paths: {[key: string]: string} = {
  [BoonTables.Aspects]: 'aspects',
  [BoonTables.Chaos]: 'chaos',
  [BoonTables.Items]: 'items',
  [BoonTables.TBD]: 'items',
  [BoonTables.Weapon]: 'daedalus',
};

const generateBoonInfo = (groupBoons: GroupBoons): BoonState => {
  const boonState: BoonState = {};
  const restrictedBoonList: {[key: string]: Boon[]} = {};
  boonRestrictionGroups.forEach((boonRestrictionGroup) => restrictedBoonList[boonRestrictionGroup] = []);

  const boonLoader = (
    owner: string,
    path: string,
    boon: string,
  ): void => {
    if (boonState[boon]) {
      boonState[boon].owners.push(owner);
    } else {
      const src = `${process.env.PUBLIC_URL}/assets/${path}/${nameSanitizer(boon)}.png`;
      const image: Image = { src, alt: boon };
      boonState[boon] = {
        image,
        owners: [owner],
        active: false,
        prophecyForetold: false,
        restricted: false,
        unlocked: true,
      };
    };
  };

  Object.entries(groupBoons).forEach(([owner, boonGroupObj]) => {
    Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
      let path = paths[boonGroup] || 'boons';
      Object.keys(boonRowObj).forEach((boonRow) => {
        const rowBoons: Boon[] = [...boonRowObj[boonRow], ...(boonState[boonRow] ? [] : [boonRow])] as Boon[];
        rowBoons.forEach((boon: Boon) => {
          // TBD: this works here, but later down the line it may need to be handled in the boonLoader as:
          // if (boonState[boon] && boonState[boon].owners[0] === 'Icon')
          if ((BoonRows as any)[boon]) {
            boonLoader('Icon', path, boon);
          } else if (!(Gods as any)[boon]) {
            boonLoader(owner, path, boon);
          }

          if (boonRestrictionGroups.has(boonRow as BoonRow) && boon !== boonRow) {
            restrictedBoonList[boonRow].push(boon);
          }
        });
      });
    });
  });

  boonRequirements.forEach(({boon, requirements}) => {
    boonState[boon] = {
      ...boonState[boon],
      requirements,
      unlocked: false,
    };

  requirements.forEach((requirements: Requirements) => {
      requirements.boons.forEach((requiredBoon: Boon) => {
        boonState[requiredBoon] = {
          ...boonState[requiredBoon],
          unlocks: [
            ...(boonState[requiredBoon].unlocks || []),
            boon,
          ],
        };
      });
    });
  });

  Object.values(Weapons).forEach((weapon) => boonLoader(weapon, 'weapons', weapon));
  Object.values(Gods).forEach((god) => boonLoader('Gods', 'gods', god));

  Object.values(restrictedBoonList).forEach((boons) => {
    boons.forEach((boon, index) => {
      boonState[boon].restrictions = [...boons.slice(0, index), ...boons.slice(index + 1)];
    });
  });

  return boonState;
};

export {
  generateBoonInfo,
};
