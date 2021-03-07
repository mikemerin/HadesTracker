import {
  GroupBoons,
  BoonTables,
  God,
  Gods,
} from 'redux/domain';

const boonDuoGods: {[key: string]: God[]} = {
  'Curse of Longing': [Gods.Ares, Gods.Aphrodite],
  'Heart Rend': [Gods.Artemis, Gods.Aphrodite],
  'Parting Shot': [Gods.Athena, Gods.Aphrodite],
  'Cold Embrace': [Gods.Demeter, Gods.Aphrodite],
  'Low Tolerance': [Gods.Dionysus, Gods.Aphrodite],
  'Sweet Nectar': [Gods.Poseidon, Gods.Aphrodite],
  'Smoldering Air': [Gods.Zeus, Gods.Aphrodite],

  'Hunting Blades': [Gods.Artemis, Gods.Ares],
  'Merciful End': [Gods.Athena, Gods.Ares],
  'Freezing Vortex': [Gods.Demeter, Gods.Ares],
  'Curse of Nausea': [Gods.Dionysus, Gods.Ares],
  'Curse of Drowning': [Gods.Poseidon, Gods.Ares],
  'Vengeful Mood': [Gods.Zeus, Gods.Ares],

  'Deadly Reversal': [Gods.Athena, Gods.Artemis],
  'Crystal Clarity': [Gods.Demeter, Gods.Artemis],
  'Splitting Headache': [Gods.Dionysus, Gods.Artemis],
  'Mirage Shot': [Gods.Poseidon, Gods.Artemis],
  'Lightning Rod': [Gods.Zeus, Gods.Artemis],

  'Stubborn Roots': [Gods.Demeter, Gods.Athena],
  'Calculated Risk': [Gods.Dionysus, Gods.Athena],
  'Unshakable Mettle': [Gods.Poseidon, Gods.Athena],
  'Lightning Phalanx': [Gods.Zeus, Gods.Athena],

  'Ice Wine': [Gods.Dionysus, Gods.Demeter],
  'Blizzard Shot': [Gods.Poseidon, Gods.Demeter],
  'Cold Fusion': [Gods.Zeus, Gods.Demeter],

  'Exclusive Access	': [Gods.Poseidon, Gods.Dionysus],
  'Scintillating Feast': [Gods.Zeus, Gods.Dionysus],

  'Sea Storm': [Gods.Zeus, Gods.Poseidon],
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
