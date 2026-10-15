// Canonical campaign records. Keep map artwork and per-map placements separate.
// World coordinates are regional context on the 3e geographic reference, not measured travel distances.
window.campaignMapData = {
  "defaultMap": "faerun",
  "maps": {
    "faerun": {
      "name": "Faerûn",
      "subtitle": "A geographic overview of the Realms",
      "image": "assets/faerun.svg",
      "width": 1920,
      "height": 1284,
      "home": {
        "x": 0,
        "y": 0,
        "w": 1920,
        "h": 1284
      },
      "region": null
    },
    "mistledale": {
      "name": "Mistledale",
      "subtitle": "Mistledale & the Moonsea Ride",
      "image": "assets/mistledale.svg",
      "width": 1100,
      "height": 720,
      "home": {
        "x": 0,
        "y": 0,
        "w": 1100,
        "h": 720
      },
      "region": "mistledale"
    },
    "sword-coast": {
      "name": "Sword Coast",
      "subtitle": "Sword Coast · geographic preview",
      "image": "assets/faerun.svg",
      "width": 1920,
      "height": 1284,
      "home": {
        "x": 100,
        "y": 70,
        "w": 620,
        "h": 470
      },
      "region": "sword-coast"
    }
  },
  "regions": {
    "mistledale": {
      "name": "Mistledale",
      "x": 862,
      "y": 269,
      "map": "mistledale",
      "status": "Campaign activity"
    },
    "sword-coast": {
      "name": "Sword Coast",
      "x": 278,
      "y": 273,
      "map": "sword-coast",
      "status": "Not yet visited"
    }
  },
  "locations": {
    "ashabenford": {
      "name": "Ashabenford",
      "region": "mistledale",
      "world": {
        "x": 862,
        "y": 269
      },
      "precision": "Town location on the 3e reference"
    },
    "moonsea": {
      "name": "The Moonsea Ride",
      "region": "mistledale",
      "world": {
        "x": 900,
        "y": 236
      },
      "precision": "Approximate route in the Dalelands"
    }
  },
  "chapters": [
    {
      "id": "forest",
      "name": "Takina & Yndrial"
    },
    {
      "id": "stables",
      "name": "Juan & Caelen"
    }
  ],
  "contextCities": [
    {
      "name": "Luskan",
      "x": 168,
      "y": 123
    },
    {
      "name": "Neverwinter",
      "x": 200,
      "y": 181
    },
    {
      "name": "Waterdeep",
      "x": 277,
      "y": 273
    },
    {
      "name": "Baldur’s Gate",
      "x": 416,
      "y": 454
    }
  ],
  "pins": [
    {
      "id": "ashabenford",
      "name": "Ashabenford",
      "type": "place",
      "x": 532,
      "y": 360,
      "precision": "Regional landmark",
      "summary": "The town where the two prologue stories converge. Almaes’ apothecary and the livery stables are both here.",
      "sessions": [
        "forest",
        "stables"
      ],
      "entries": [
        "ashabenford"
      ],
      "characters": [],
      "locationId": "ashabenford"
    },
    {
      "id": "moonsea",
      "name": "The Moonsea Ride",
      "type": "place",
      "x": 820,
      "y": 240,
      "precision": "Route · representative marker",
      "summary": "The trade route named in Hennick’s confession. The stolen wagon was secured somewhere along the Ride; the recaps do not establish the exact stretch.",
      "sessions": [
        "forest",
        "stables"
      ],
      "entries": [
        "moonsea"
      ],
      "characters": [],
      "locationId": "moonsea"
    },
    {
      "id": "wagon",
      "name": "The wagon ambush",
      "type": "event",
      "x": 744,
      "y": 323,
      "anchor": [
        730,
        286
      ],
      "precision": "Approximate · route only",
      "summary": "Takina and Yndrial fight from the ledge above the trench, drive off the bandits, and secure Almaes’ missing wagon. This marker represents the Moonsea Ride, not an exact encounter site.",
      "sessions": [
        "forest"
      ],
      "entries": [
        "moonsea"
      ],
      "characters": [
        "takina",
        "yndrial"
      ],
      "locationId": "moonsea"
    },
    {
      "id": "stream",
      "name": "The polluted stream",
      "type": "event",
      "x": 670,
      "y": 218,
      "anchor": [
        730,
        286
      ],
      "precision": "Approximate · surrounding forest",
      "summary": "Yndrial follows dark blue runoff to a shattered crate bearing Almaes’ mark, then fights bandits tormenting a deer. The stream’s name and exact location are not established.",
      "sessions": [
        "forest"
      ],
      "entries": [
        "moonsea"
      ],
      "characters": [
        "yndrial"
      ],
      "locationId": "moonsea"
    },
    {
      "id": "stables",
      "name": "Confrontation at the stables",
      "type": "event",
      "x": 457,
      "y": 415,
      "anchor": [
        532,
        360
      ],
      "precision": "Town level · Ashabenford",
      "summary": "Juan and Caelen intercept Hennick at the livery stables, defeat his escorts, and uncover the forged manifest. The marker is offset for readability; the stable’s street location is unknown.",
      "sessions": [
        "stables"
      ],
      "entries": [
        "ashabenford",
        "hennick"
      ],
      "characters": [
        "juan",
        "caelen"
      ],
      "locationId": "ashabenford"
    },
    {
      "id": "apothecary",
      "name": "Almaes’ apothecary",
      "type": "event",
      "x": 593,
      "y": 411,
      "anchor": [
        532,
        360
      ],
      "precision": "Town level · Ashabenford",
      "summary": "The separate investigations meet at Almaes’ apothecary: the wagon is secured, Hennick is in custody, and all four adventurers finally come together.",
      "sessions": [
        "forest",
        "stables"
      ],
      "entries": [
        "almaes",
        "ashabenford"
      ],
      "characters": [
        "juan",
        "caelen",
        "takina",
        "yndrial"
      ],
      "locationId": "ashabenford"
    },
    {
      "id": "party",
      "name": "The party’s last known location",
      "type": "party",
      "x": 547,
      "y": 296,
      "anchor": [
        532,
        360
      ],
      "precision": "Almaes’ apothecary · end of the prologues",
      "summary": "Juan, Caelen, Takina, and Yndrial are together in Ashabenford at the close of the prologues. This records their last known position, rather than live travel.",
      "sessions": [
        "stables"
      ],
      "entries": [
        "almaes",
        "ashabenford"
      ],
      "characters": [
        "juan",
        "caelen",
        "takina",
        "yndrial"
      ],
      "locationId": "ashabenford"
    }
  ]
};
