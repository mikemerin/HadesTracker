import { AppState, Boon, Requirements } from 'redux/domain';

const isUnlocked = (
  state: AppState,
  requirements: Requirements[],
): boolean => (
  requirements.every((requirement) => (
    requirement.boons.filter((boon) => state.boons[boon].active).length
  )
));

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
  isUnlocked,
  setUnlocks,
}
