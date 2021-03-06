/*
Author: Derek Steindel
Date: 8/30/2021
Purpose: Separate JS file to contain ghost data with a function that returns
that ghost data as an object.
*/
function getGhosts() {
  // Format = Name: [Evidence 1,
  //                 Evidence 2,
  //                 Evidence 3,
  //                 Strength,
  //                 Weakness,
  //                 [Note1,
  //                  Note2,]]
  return {
    Spirit: [
      "EMF",
      "BOX",
      "BOOK",
      "None.",
      "Smudge sticks prevent hunting longer than other ghosts.",
      [
        "Smudging will prevent hunting for 180 seconds instead of 90.",
        "Faint footsteps can only be heard with the Parabolic Mic.",
        "META: Only ghost that will cause random footsteps < 15 seconds apart.",
      ],
    ],
    Wraith: [
      "EMF",
      "BOX",
      "DOTS",
      "Cannot be tracked by footsteps.",
      "Toxic reaction to salt.",
      ["Activity will skyrocket if it steps in salt."],
    ],
    Phantom: [
      "BOX",
      "FING",
      "DOTS",
      "Looking at it considerably drops your sanity.",
      "Taking a photo of a phantom makes it disappear.",
      ["Making it disappear does not stop its hunt.", "META: See weakness."],
    ],
    Poltergeist: [
      "BOX",
      "FING",
      "BOOK",
      "Can throw huge amounts of objects at once.",
      "Almost ineffective in an empty room.",
      [
        "Can roam nearly across map to move objects rather than only near its room.",
        "META: Objects moved decrease nearby players sanity by number of items * 2.",
      ],
    ],
    Banshee: [
      "FING",
      "ORBS",
      "DOTS",
      "Will only target one person at a time.",
      "Fears crucifixes. Less aggressive when near one.",
      [
        "Hunt stopping range of crucifixes are 5m instead of 3m.",
        "META: Hunts > 70% but < 80% sanity are a sure sign of a banshee using its power.",
        "META: If it refuses to change targets during a hunt, it's a banshee.",
      ],
    ],
    Jinn: [
      "EMF",
      "FING",
      "TEMP",
      "Travels much faster to catch up in a chase then slows down once near the player.",
      "Loses its Strength if the breaker is turned off.",
      [
        "If the Jinn uses its power, all players within 3m lose 25% sanity.",
        "META: Can be identified during a hunt by chasing quickly and slowing down when close.",
      ],
    ],
    Mare: [
      "BOX",
      "ORBS",
      "BOOK",
      "Increased chance to attack in the dark.",
      "Turning on lights lower its chance to attack.",
      [
        "Frequently turns off lights and breaker in effort to attack.",
        "META: Hunts < 60% sanity with light in ghost room off or < 40% if on.",
        "META: Will not turn ON lights.",
      ],
    ],
    Revenant: [
      "ORBS",
      "BOOK",
      "TEMP",
      "Moves 2x faster when chasing someone.",
      "Moves at half speed when not chasing someone.",
      [
        "Can freely switch targets mid-chase.",
        "You can keep pace with a chasing revenant for 3 seconds with your sprint.",
      ],
    ],
    Shade: [
      "EMF",
      "BOOK",
      "TEMP",
      "Shy and hard to find.",
      "Will not enter a hunt if multiple people are nearby.",
      [
        "Rarely starts a hunt when players are close together, but still can.",
        "META: If the group is travelling together and you're getting no interactions.",
      ],
    ],
    Demon: [
      "FING",
      "BOOK",
      "TEMP",
      "Will attack more often than any other ghost.",
      "Asking successful Ouija questions won't lower sanity.",
      [
        "Unsuccessful Ouija questions still lower sanity 40%.",
        "META: Hunting > 60% but < 70% without manifesting is certainly a demon.",
      ],
    ],
    Yurei: [
      "ORBS",
      "TEMP",
      "DOTS",
      "Double drain on sanity when manifesting or hunting.",
      "Smudging causes it not to wander around the location for 90 seconds.",
      [
        "Will not hunt either, when smudged, for 90 seconds.",
        "META: Significant sanity drop during manifestation can be a strong indicator.",
      ],
    ],
    Oni: [
      "EMF",
      "TEMP",
      "DOTS",
      "More active when people are nearby and throws objects FAR.",
      "Being more active will make it easier to identify.",
      [
        "Can roam nearly across map to move objects rather than only near its room.",
      ],
    ],
    Hantu: [
      "FING",
      "ORBS",
      "TEMP",
      "Moves faster in lower temperatures.",
      "Moves slower in higher temperatures.",
      [
        "Keep the breaker on to keep the Hantu slow outside of its Ghost Room.",
        "META: See Strength and Weakness.",
      ],
    ],
    Yokai: [
      "BOX",
      "ORBS",
      "DOTS",
      "Talking will anger it and increase its chance of attacking.",
      "When hunting, it can only hear voices close to it, roughly ~2m.",
      [
        "It has an average chance to hunt even if you are silent.",
        "META: Hunting > 70% but < 80% without manifesting, with talking, is a Yokai.",
      ],
    ],
    Goryo: [
      "EMF",
      "FING",
      "DOTS",
      "Usually only shows itself on camera if no one is nearby.",
      "Rarely seen far from their place of death aka the Ghost Room.",
      [
        "The only way to see a Goryo on dots is using a video camera.",
        "META: Seeing DOTS on camera while someone in person sees nothing is a Goryo.",
      ],
    ],
    Myling: [
      "EMF",
      "FING",
      "BOOK",
      "Quieter when hunting.",
      "More frequently make paranormal sounds.",
      ["META: Back to back sounds on the Parabolic Mic can indicate a Myling."],
    ],
  };
}
