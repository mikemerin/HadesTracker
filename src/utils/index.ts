import { ChangeEvent } from 'react';
import { AnyBoon, AppState, BoonInfo, BoonState, Requirements } from 'redux/domain';
import { setLocalState } from 'redux/state';

const tempLocalStorageName = 'temp';

const getBoonHoverText = (
  boon: BoonInfo,
  clickable: boolean,
  name: AnyBoon,
) => {
  const { active, requirements, restricted, restrictedBy, swappable, unlocks } = boon;

  const baseText = [clickable
    ? `${swappable ? 'Swap to' : active ? 'Deactivate' : 'Activate'} ${name}`
    : `${restricted ? 'Remove restrictions on' : 'Unlock'} ${name} before you can activate it`];

  if (requirements) {
    const requirementText: string[] = [];
    requirements.forEach(({ number, boons }) => {
      requirementText.push([`Requires ${boons.length > 1 ? `${number} of ` : ''}the following:`, ...boons].join('\n'))
    });
    baseText.push(requirementText.join('\n\n'));
  } else {
    baseText.push('Requirements: none');
  }

  if (restrictedBy) {
    baseText.push([`Restricted By the following:`, ...restrictedBy].join('\n'))
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
  boons: AnyBoon[],
  allInactive?: boolean,
): BoonState => {
  let stateBoons: BoonState = state.boons;

  boons.forEach((boon: AnyBoon) => {
    if (allInactive) {
      stateBoons[boon].active = false;
    }

    const { requirements, restrictedBy, swapsWith } = stateBoons[boon];

    const restricted = !restrictedBy || allInactive ? false : isRestricted(state, restrictedBy);
    const swappable = !swapsWith || allInactive ? false : isSwappable(state, swapsWith);
    if ((restricted || swappable) && stateBoons[boon].active) {
      stateBoons[boon].active = false;
      stateBoons = getBoonStatuses(state, getRelatedBoons(stateBoons[boon]));
    }
    stateBoons[boon].restricted = restricted;
    stateBoons[boon].swappable = swappable;
    stateBoons[boon].unlocked = !requirements || (!allInactive && isUnlocked(state, requirements));
  });
  return stateBoons;
};

const getRelatedBoons = (boon: BoonInfo): AnyBoon[] => {
  const { restrictedBy, restricts, swapsWith, unlocks } = boon;
  return [restrictedBy, restricts, swapsWith, unlocks].filter(x => x).flat() as AnyBoon[];
};

const isRestricted = (
  state: AppState,
  restrictedBy: string[],
): boolean => (
  !!restrictedBy.filter((boon) => state.boons[boon].active).length
);

const isSwappable = (
  state: AppState,
  swapsWith: string[],
): boolean => (
  !!swapsWith.filter((boon) => state.boons[boon].active).length
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
