import {
  Boons,
  BoonTables,
  God,
  Gods,
  GroupBoons,
} from 'redux/domain';

const boonDuoGods: {[key: string]: God[]} = {
  [Boons.Curse_of_Longing]: [Gods.Ares, Gods.Aphrodite],
  [Boons.Heart_Rend]: [Gods.Artemis, Gods.Aphrodite],
  [Boons.Parting_Shot]: [Gods.Athena, Gods.Aphrodite],
  [Boons.Cold_Embrace]: [Gods.Demeter, Gods.Aphrodite],
  [Boons.Low_Tolerance]: [Gods.Dionysus, Gods.Aphrodite],
  [Boons.Sweet_Nectar]: [Gods.Poseidon, Gods.Aphrodite],
  [Boons.Smoldering_Air]: [Gods.Zeus, Gods.Aphrodite],

  [Boons.Hunting_Blades]: [Gods.Artemis, Gods.Ares],
  [Boons.Merciful_End]: [Gods.Athena, Gods.Ares],
  [Boons.Freezing_Vortex]: [Gods.Demeter, Gods.Ares],
  [Boons.Curse_of_Nausea]: [Gods.Dionysus, Gods.Ares],
  [Boons.Curse_of_Drowning]: [Gods.Poseidon, Gods.Ares],
  [Boons.Vengeful_Mood]: [Gods.Zeus, Gods.Ares],

  [Boons.Deadly_Reversal]: [Gods.Athena, Gods.Artemis],
  [Boons.Crystal_Clarity]: [Gods.Demeter, Gods.Artemis],
  [Boons.Splitting_Headache]: [Gods.Dionysus, Gods.Artemis],
  [Boons.Mirage_Shot]: [Gods.Poseidon, Gods.Artemis],
  [Boons.Lightning_Rod]: [Gods.Zeus, Gods.Artemis],

  [Boons.Stubborn_Roots]: [Gods.Demeter, Gods.Athena],
  [Boons.Calculated_Risk]: [Gods.Dionysus, Gods.Athena],
  [Boons.Unshakable_Mettle]: [Gods.Poseidon, Gods.Athena],
  [Boons.Lightning_Phalanx]: [Gods.Zeus, Gods.Athena],

  [Boons.Ice_Wine]: [Gods.Dionysus, Gods.Demeter],
  [Boons.Blizzard_Shot]: [Gods.Poseidon, Gods.Demeter],
  [Boons.Cold_Fusion]: [Gods.Zeus, Gods.Demeter],

  [Boons.Exclusive_Access	]: [Gods.Poseidon, Gods.Dionysus],
  [Boons.Scintillating_Feast]: [Gods.Zeus, Gods.Dionysus],

  [Boons.Sea_Storm]: [Gods.Zeus, Gods.Poseidon],
};

const boonDuos: GroupBoons = Object.entries(boonDuoGods).reduce((acc, [boon, gods]): GroupBoons => {
  [true, false].forEach((reverse) => {
    let [god1, god2] = reverse ? gods.slice().reverse() : gods;
    if (!acc[god1]) {
      acc[god1] = { [BoonTables.Duo]: {} };
    }
    acc[god1][BoonTables.Duo][god2] = [boon];
  });
  return acc;
}, {} as GroupBoons);

export {
  boonDuos,
};
