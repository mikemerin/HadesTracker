import {
  AnyBoon,
  Aspects,
  BoonRow,
  BoonState,
  BoonTables,
  ChaosBoons,
  Gods,
  GroupBoons,
  GroupRestrictions,
  Items,
  Image,
  Requirements,
  Weapons
} from 'redux/domain';
import { boonRequirements } from './BoonRequirements';
import { boonRestrictionGroups, boonRestrictions } from './BoonRestrictions';
import { nameSanitizer } from 'utils';

type GeneratedBoonInfo = {
  boonState: BoonState,
  boonRestrictionGroups: GroupRestrictions,
}

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

const generateBoonInfo = (groupBoons: GroupBoons): GeneratedBoonInfo => {
  const boonState: BoonState = {};

  const boonLoader = (
    owner: string,
    boonGroup: string,
    boon: string,
    boonRow?: BoonRow,
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
        ...(boonRow && {boonRow}),
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
        const rowBoons: AnyBoon[] = [...boonRowObj[boonRow], ...(boonState[boonRow] ? [] : [boonRow])] as AnyBoon[];
        rowBoons.forEach((boon: AnyBoon) => {
          if (boon !== boonRow) {
            boonLoader(owner, boonGroup, boon, boonRow as BoonRow); // TODO: if boon!==boonRow, activeBoon = true, then can have prophecy/restrict/unlock/etc
            if (
              boonRestrictionGroups[boonRow] &&
              !boonRestrictionGroups[boonRow].includes(boon)
            ) {
              boonRestrictionGroups[boonRow].push(boon);
            }
          } else {
            boonLoader(owner, boonGroup, boon);
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
      requirements.boons.forEach((requiredBoon: AnyBoon) => {
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

  Object.values(boonRestrictionGroups).forEach((boonRestrictionGroup) => {
    boonRestrictionGroup.forEach((boon, index) => {
      boonState[boon].swapsWith = [...boonRestrictionGroup.slice(0, index), ...boonRestrictionGroup.slice(index + 1)];
    })
  })

  boonRestrictions.forEach(({boon, restricts}) => {
    boonState[boon].restricts = restricts;
    restricts.forEach((restrictsBoon) => {
      if (boonState[restrictsBoon].restrictedBy) {
        //@ts-ignore TODO: remove this ignore for 'possibly undefined'
        boonState[restrictsBoon].restrictedBy.push(boon);
      } else {
        boonState[restrictsBoon].restrictedBy = [boon];
      }
    })
  });

  return {
    boonRestrictionGroups,
    boonState,
  };
};

export {
  generateBoonInfo,
};
