# Hades Tracker

Main link here! https://hades-tracker.herokuapp.com/

Allows you to track which boons you've unlocked, including the main god boons, duos, Daedalus upgrades, and weapon aspects.

The primary mode, 'Boon Hunting', allows you to set boons as 'active' to match your current run, and shows you which boons are unlocked to use vs. those still needing to be unlocked in the boon tree. You can hover over any boon's active icon to show which boons unlock it along with what it unlocks.

You can also import/export the data in this app, or reset all data if you are starting fresh. Plenty more to come!

### Future updates:

## Major Upgrades

* Twitch Streaming: condensed overlay w/just [Boon Icon, Prophecy Foretold, Active]
* Modes
  * Builds
    * When given the three choices during a run, can enter to show what each choice unlocks
* New sections
  * Primary
    * Move hover text to show in a section instead
  * Individual
    * Weapons: broken free
    * Pact of Punishment
      * Harsh Conditions
      * Slashed Benefits
    * Customer Loyalty
    * Dark Reflections: broken free
    * Keepsakes
    * Relationships
      * Number of hearts

## Minor Upgrades

* Each boon:
  * Hover: denote difference between primary/secondary requirements, and combinations
    * also, slight delay on showing for performance, also cross-fade animation
  * Ability to sort alphabetically vs. appearance
  * Number used/remaining per god
  * Update restrictions/requirements to include extras
    * If you have Stygius active, all other Arms become locked
  * Display the Extra requirements
    * Plume
    * Stygian soul vs other
    * Fishing rod unlocked
    * Etc.  
* Advanced info
  * % god choice: if given two rooms which is better?
* Theming: add Dark Mode w/switcher
  * Will utilize styled-components
* Other styling:
  * Different title per page
  * Use the Hades mouse cursor
  * Better tooltip feedback on hover (show boon tree maybe?)
