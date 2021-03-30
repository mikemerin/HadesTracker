import {
  Aspects,
  Boon,
  BoonRow,
  BoonState,
  BoonTables,
  ChaosBoons,
  Gods,
  GroupBoons,
  Items,
  Image,
  Requirements,
  Weapons
} from 'redux/domain';
import { boonRequirements } from './BoonRequirements';
import { boonRestrictionGroups } from './BoonRestrictionGroups';
import { nameSanitizer } from 'utils';

const paths: {[key: string]: string} = {
  [BoonTables.Aspects]: 'aspects',
  [BoonTables.Extras]: 'items',
  [BoonTables.Weapon]: 'daedalus',
};

const getPath = (boon: string, boonGroup: string): string => {
  if ((Aspects as any)[boon]) return 'aspects';
  if ((ChaosBoons as any)[boon]) return 'chaos';
  if ((Gods as any)[boon]) return 'gods';
  if ((Items as any)[boon]) return 'items';
  if ((Weapons as any)[boon]) return 'weapons';

  return paths[boonGroup] || 'boons';
};

const generateBoonInfo = (groupBoons: GroupBoons): BoonState => {
  const boonState: BoonState = {};
  const restrictedBoonList: {[key: string]: Boon[]} = {};
  boonRestrictionGroups.forEach((boonRestrictionGroup) => restrictedBoonList[boonRestrictionGroup] = []);

  const boonLoader = (
    owner: string,
    boonGroup: string,
    boon: string,
  ): void => {
    if (boonState[boon]) {
      boonState[boon].owners.push(owner);
    } else {
      const path = getPath(nameSanitizer(boon), boonGroup);
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

  Object.values(Weapons).forEach((weapon) => boonLoader(weapon, 'weapons', weapon));
  Object.values(Gods).forEach((god) => boonLoader('Gods', 'gods', god));

  Object.entries(groupBoons).forEach(([owner, boonGroupObj]) => {
    Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
      Object.keys(boonRowObj).forEach((boonRow) => {
        const rowBoons: Boon[] = [...boonRowObj[boonRow], ...(boonState[boonRow] ? [] : [boonRow])] as Boon[];
        rowBoons.forEach((boon: Boon) => {
          // TBD: this works here, but later down the line it may need to be handled in the boonLoader as:
          // if (boonState[boon] && boonState[boon].owners[0] === 'Icon')
          // if (!(Gods as any)[boon]) {
            boonLoader(owner, boonGroup, boon);
          // }

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
