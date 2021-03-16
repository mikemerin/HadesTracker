import { ChangeEvent } from 'react';
import { AppState, Boon, Requirements } from 'redux/domain';
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

const setUnlocks = (
  state: AppState,
  boons: Boon[],
): AppState => {
  boons.forEach((boon: Boon) => {
    const { requirements } = state.boons[boon];
    state.boons[boon].unlocked = !requirements || isUnlocked(state, requirements);
  });
  return state;
};

export {
  boonFileChecker,
  isUnlocked,
  nameSanitizer,
  setUnlocks,
}
