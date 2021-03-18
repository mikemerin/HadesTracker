import { ChangeEvent } from 'react';
import { AppState, Boon, BoonState, Requirements } from 'redux/domain';
import { setLocalState } from 'redux/state';

const tempLocalStorageName = 'temp';

const boonFileChecker = (changeEvent: ChangeEvent<HTMLInputElement>) => {
  //@ts-ignore
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

const getUnlockedAndActiveBoons = (
  state: AppState,
  boons: Boon[],
  allInactive?: boolean,
): BoonState => {
  const stateBoons: BoonState = state.boons;
  boons.forEach((boon: Boon) => {
    if (allInactive) {
      stateBoons[boon].active = false;
    }

    const { requirements } = stateBoons[boon];
    stateBoons[boon].unlocked = !requirements || (!allInactive && isUnlocked(state, requirements));
  });
  return stateBoons;
};

const isUnlocked = (
  state: AppState,
  requirements: Requirements[],
): boolean => (
  requirements.every((requirement) => (
    requirement.boons.filter((boon) => state.boons[boon].active).length
  )
));

const nameSanitizer = (filename: string): string => {
  return filename.replace(/ /g, '_');
};

export {
  boonFileChecker,
  getUnlockedAndActiveBoons,
  isUnlocked,
  nameSanitizer,
}
