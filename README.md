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
      * Add icons for gods for easier locating
      * Bold which ones are active/restricting
  * Individual
    * Weapons: broken free
      * Track best heat for each (including 0 heat which can still remain)
    * Pact of Punishment
      * Harsh Conditions
      * Slashed Benefits
    * Customer Loyalty
    * Dark Reflections: broken free
    * Keepsakes
    * Talents
      * Talent switcher on top of page (just like pause menu)
    * Relationships
      * Number of hearts

## Minor Upgrades

* Each boon:
  * Hover: denote difference between primary/secondary requirements, and combinations
    * also, slight delay on showing for performance, also cross-fade animation
  * Ability to sort alphabetically vs. appearance
  * Number used/remaining per god
  * Finish displaying the Extra requirements
    * Finish the update restrictions/requirements
      * Ex.: If you have Stygius active, all other Arms become locked
* Advanced info
  * % god choice: if given two rooms which is better?
* Theming: add Dark Mode w/switcher
  * Will utilize styled-components
* Other styling:
  * Different title per page
  * Use the Hades mouse cursor
  * Better tooltip feedback on hover (show boon tree maybe?)
* Add Lazy Loader to speed up asset rendering
