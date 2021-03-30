import { ChangeEvent } from 'react';
import { AppState, Boon, BoonInfo, BoonState, Requirements } from 'redux/domain';
import { setLocalState } from 'redux/state';

const tempLocalStorageName = 'temp';

const getBoonHoverText = (
  boon: BoonInfo,
  clickable: boolean,
  name: Boon,
) => {
  const { active, requirements, restricted, unlocks } = boon;

  const baseText = [clickable
    ? `${restricted ? 'Swap to' : active ? 'Deactivate' : 'Activate'} ${name}`
    : `Unlock ${name} before you can activate it`];

  if (requirements) {
    const requirementText: string[] = [];
    requirements.forEach(({ number, boons }) => {
      requirementText.push([`Requires ${number} of the following:`, ...boons].join('\n'))
    });
    baseText.push(requirementText.join('\n\n'));
  } else {
    baseText.push('Requirements: none');
  }

  if (unlocks) {
    baseText.push([`Helps unlock the following:`, ...unlocks].join('\n'))
  }

  return baseText.join('\n\n');
};

const boonFileChecker = (changeEvent: ChangeEvent<HTMLInputElement>) => {
  //@ts-ignore // TODO: fix this ts issue
  var file = changeEvent?.target?.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = (loadEvent) => {
    var fileContent = loadEvent?.target?.result as string;
    if (fileContent) {
      // TODO: error checking
      setLocalState(fileContent, tempLocalStorageName);
    }
  };
  reader.readAsText(file);
};

const getBoonStatuses = (
  state: AppState,
  boons: Boon[],
  allInactive?: boolean,
): BoonState => {
  let stateBoons: BoonState = state.boons;

  boons.forEach((boon: Boon) => {
    if (allInactive) {
      stateBoons[boon].active = false;
    }

    const { requirements, restrictions } = stateBoons[boon];

    const restricted = !restrictions || allInactive ? false : isRestricted(state, restrictions);
    if (restricted && stateBoons[boon].active) {
      stateBoons[boon].active = false;
      stateBoons = getBoonStatuses(state, getRelatedBoons(stateBoons[boon]));
    }
    stateBoons[boon].restricted = restricted;
    stateBoons[boon].unlocked = !requirements || (!allInactive && isUnlocked(state, requirements));
  });
  return stateBoons;
};

const getRelatedBoons = (boon: BoonInfo): Boon[] => {
  const { restrictions, unlocks } = boon;

  let boonList: Boon[] = [];
  if (restrictions) {
    boonList = restrictions;
  }
  if (unlocks) {
    boonList = [...boonList, ...unlocks];
  }

  return boonList;
};

const isRestricted = (
  state: AppState,
  restrictions: string[],
): boolean => (
  !!restrictions.filter((boon) => state.boons[boon].active).length
);

const isUnlocked = (
  state: AppState,
  requirements: Requirements[],
): boolean => (
  requirements.every((requirement) => {
    const requiredActiveBoons = requirement.boons.filter((boon) => state.boons[boon].active);
    return requiredActiveBoons.length >= requirement.number;
  })
);

const nameSanitizer = (filename: string): string => {
  return filename.replace(/ /g, '_').replace(/[()]/g, '');
};

export {
  boonFileChecker,
  getBoonHoverText,
  getBoonStatuses,
  getRelatedBoons,
  isUnlocked,
  nameSanitizer,
}
