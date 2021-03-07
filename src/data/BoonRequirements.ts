import { BoonRequirements } from 'redux/domain';

const boonRequirements: BoonRequirements[] = [
    {
      boon: 'Black Metal',
      requirements: [
        { number: 1, boons: ['Slicing Shot', 'Blade Dash', 'Ares\' Aid'] },
      ],
    },
    {
      boon: 'Dire Misfortune',
      requirements: [
        { number: 1, boons: ['Curse of Agony', 'Curse of Pain'] },
      ],
    },
    {
      boon: 'Double Strike',
      requirements: [
        { number: 1, boons: ['Thunder Flourish', 'Zeus\' Aid', 'Thunder Dash'] },
      ],
    },
    {
      boon: 'Engulfing Vortex',
      requirements: [
        { number: 1, boons: ['Slicing Shot', 'Blade Dash', 'Ares\' Aid'] },
      ],
    },
    {
      boon: 'Impending Doom',
      requirements: [
        { number: 1, boons: ['Curse of Agony', 'Curse of Pain', 'Curse of Vengeance'] },
      ],
    },
    {
      boon: 'High Voltage',
      requirements: [
        { number: 1, boons: ['Thunder Flourish', 'Zeus\' Aid', 'Thunder Dash'] },
      ],
    },
    {
      boon: 'Hunting Blades',
      requirements: [
        { number: 1, boons: ['Slicing Shot'] },
        { number: 1, boons: ['Deadly Strike', 'Deadly Flourish', 'Hunter Dash', 'Artemis\' Aid'] },
      ],
    },
    {
      boon: 'Lightning Rod',
      requirements: [
        { number: 1, boons: ['Infernal Soul'] }, // TODO: add alt RequiredBoonCounts
        { number: 1, boons: ['Deadly Strike', 'Deadly Flourish', 'True Shot', 'Hunter Dash', 'Artemis\' Aid'] },
        { number: 1, boons: ['Lightning Strike', 'Thunder Dash', 'Thunder Flourish', 'Electric Shot', 'Zeus\' Aid'] },
      ],
    },
    {
      boon: 'Splitting Bolt',
      requirements: [
        { number: 1, boons: ['Storm Lightning', 'High Voltage', 'Double Strike'] },
      ],
    },
    {
      boon: 'Static Discharge',
      requirements: [
        { number: 1, boons: ['Thunder Flourish', 'Zeus\' Aid', 'Thunder Dash', 'Heaven\'s Vengeance', 'Lightning Strike', 'Electric Shot', 'Lightning Reflexes'] },
      ],
    },
    {
      boon: 'Storm Lightning',
      requirements: [
        { number: 1, boons: ['Lightning String', 'Electric Shot'] },
      ],
    },
    {
      boon: 'Vengeful Mood',
      requirements: [
        { number: 1, boons: ['Lightning Strike', 'Thunder Dash', 'Thunder Flourish', 'Electric Shot', 'Zeus\' Aid'] },
        { number: 1, boons: ['Curse of Agony', 'Curse of Pain', 'Slicing Shot', 'Blade Dash', 'Ares\' Aid'] },
        { number: 1, boons: ['Curse of Vengeance', 'Heaven\'s Vengeance', 'Holy Shield', 'Wave of Despair', 'Frozen Touch'] },
      ],
    },
    {
      boon: 'Vicious Cycle',
      requirements: [
        { number: 1, boons: ['Black Metal', 'Engulfing Vortex'] },
      ],
    },
];

export {
  boonRequirements,
};
