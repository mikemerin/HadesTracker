import {
  AnyBoon,
  Aspects,
  BoonRow,
  BoonRows,
  BoonState,
  BoonTables,
  BoonTypes,
  ChaosBoons,
  Companions,
  Gods,
  GroupBoons,
  GroupRestrictions,
  Image,
  Icons,
  Keepsakes,
  Requirements,
  Talents,
  Weapons
} from 'redux/domain';
import { nameMaps } from 'data/NameMaps';

import { boonRequirements } from './BoonRequirements';
import { boonRestrictionGroups, boonRestrictions, boonSwappableGroups } from './BoonRestrictions';
import { descriptions } from './Descriptions';
import { prophecyBoonExceptions, prophecyBoonRows } from './ProphecyBoonRows';
import { nameSanitizer } from 'utils';

type GeneratedBoonInfo = {
  boonState: BoonState,
  boonRestrictionGroups: GroupRestrictions,
};

const paths: {[key: string]: string} = { // TODO: try to remove this, let getPath handle it all
  [BoonTables.Aspects]: 'aspects',
  [BoonTables.Extras]: 'icons',
  [BoonTables.Weapon]: 'daedalus',
};

const getPath = (boon: string, boonGroup: string): string => {
  if ((Aspects as any)[boon]) return 'aspects';
  if ((ChaosBoons as any)[boon]) return 'chaos';
  if ((Companions as any)[boon]) return 'companions';
  if ((Gods as any)[boon]) return 'gods';
  if ((Icons as any)[boon]) return 'icons';
  if ((Keepsakes as any)[boon]) return 'keepsakes';
  if ((Talents as any)[boon]) return 'talents';
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
      const sanitizedBoonName = nameSanitizer(boon);
      const path = getPath(sanitizedBoonName, boonGroup);
      const src = `${process.env.PUBLIC_URL}/assets/${path}/${sanitizedBoonName}.png`;
      const image: Image = { src, alt: boon };
      const description = descriptions[sanitizedBoonName.replace(/'/g, '')];
      const type = !boonRow || boonRow === BoonRows.Extras ? BoonTypes.Icon :
                    prophecyBoonExceptions.has(boon as AnyBoon) ? BoonTypes.Not_Tracked_Boon :
                    prophecyBoonRows.has(boonRow) ? BoonTypes.Tracked : BoonTypes.Not_Tracked_Boontype;
      boonState[boon] = {
        description,
        image,
        type,
        owners: [owner],
        ...(boonRow && { boonRow }),
        ...(type !== BoonTypes.Icon && { active: false }),
        ...(type !== BoonTypes.Icon && { restricted: false }),
        ...(type === BoonTypes.Tracked && { prophecyForetold: false }),
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
            const boonRowName: BoonRow = (nameMaps[boonRow] || boonRow) as BoonRow;
            boonLoader(owner, boonGroup, boon, boonRowName);
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

  [...boonSwappableGroups, ...Object.values(boonRestrictionGroups)].forEach((swappableBoons) => {
    swappableBoons.forEach((boon, index) => {
      boonState[boon].swapsWith = [...swappableBoons.slice(0, index), ...swappableBoons.slice(index + 1)];
    })
  });

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
