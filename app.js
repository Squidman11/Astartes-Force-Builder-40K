const masterUnits = [
  { id: "guilliman", name: "Roboute Guilliman", role: "HQ", points: 415, isEpicHero: true, wargear: { weapons: ["Hand of Dominion & Emperor's Sword"] } },
  { id: "calgar", name: "Marneus Calgar", role: "HQ", points: 180, isEpicHero: true, wargear: { bodyguard: ["Marneus Calgar with 2 Victrix Guard"] } },
  { id: "captain_titus", name: "Captain Titus", role: "HQ", points: 115, isEpicHero: true, wargear: { weapons: ["Master-crafted bolt rifle & heavy bolt pistol"] } },
  { id: "cap", name: "Captain", role: "HQ", points: 90, wargear: { pistol: ["Heavy Bolt Pistol", "Plasma Pistol"], melee: ["Power Fist", "Relic Weapon"], shield: ["", "Relic Shield"] } },
  { id: "cap_gravis", name: "Captain in Gravis Armour", role: "HQ", points: 90, wargear: { ranged: ["Boltstorm Gauntlet", "Master-crafted Heavy Bolt Rifle"], melee: ["Power Fist"] } },
  { id: "cap_phobos", name: "Captain in Phobos Armour", role: "HQ", points: 75, wargear: { pistol: ["Bolt Pistol", "Special Issue Bolt Pistol"], melee: ["Combat Knife", "Paired Combat Blades"] } },
  { id: "cap_term", name: "Captain in Terminator Armour", role: "HQ", points: 90, wargear: { weapon1: ["Relic Weapon", "Power Fist", "Chainfist"], weapon2: ["Storm Bolter", "Combi-weapon"] } },
  { id: "cap_jp", name: "Captain with Jump Pack", role: "HQ", points: 90, wargear: { weapon1: ["Bolt Pistol", "Plasma Pistol"], weapon2: ["Astartes Chainsword", "Power Fist", "Relic Blade"] } },
  { id: "cap_bike", name: "Captain on Bike", role: "HQ", points: 110, wargear: { ranged: ["Twin Boltgun", "Combi-weapon"], melee: ["Power Weapon", "Thunder Hammer"] } },
  { id: "chaplain", name: "Chaplain", role: "HQ", points: 60, wargear: { pistol: ["Bolt Pistol", "Plasma Pistol"], melee: ["Crozius Arcanum"] } },
  { id: "chap_term", name: "Chaplain in Terminator Armour", role: "HQ", points: 75, wargear: { ranged: ["Storm Bolter", "Combi-weapon"], melee: ["Crozius Arcanum"] } },
  { id: "chap_bike", name: "Chaplain on Bike", role: "HQ", points: 75, wargear: { ranged: ["Twin Boltgun", "Combi-weapon"], melee: ["Crozius Arcanum"] } },
  { id: "chap_jp", name: "Chaplain with Jump Pack", role: "HQ", points: 75, wargear: { pistol: ["Bolt Pistol", "Plasma Pistol"], melee: ["Crozius Arcanum"] } },
  { id: "librarian", name: "Librarian", role: "HQ", points: 75, wargear: { pistol: ["Bolt Pistol", "Plasma Pistol"], melee: ["Force Weapon"] } },
  { id: "libr_ph", name: "Librarian in Phobos Armour", role: "HQ", points: 75, wargear: { weapon: ["Force Weapon"], pistol: ["Bolt Pistol"] } },
  { id: "libr_term", name: "Librarian in Terminator Armour", role: "HQ", points: 80, wargear: { ranged: ["Storm Bolter", "Combi-weapon"], melee: ["Force Weapon"] } },
  { id: "lieutenant", name: "Lieutenant", role: "HQ", points: 50, wargear: { ranged: ["Bolt Pistol", "Heavy Bolt Pistol"], melee: ["Power Weapon", "Power Fist"] } },
  { id: "lieut_ph", name: "Lieutenant in Phobos Armour", role: "HQ", points: 40, wargear: { ranged: ["Bolt Pistol", "Occulus Bolt Carbine"], melee: ["Combat Knife"] } },
  { id: "lieut_cb", name: "Lieutenant with Combi-weapon", role: "HQ", points: 85, wargear: { weapon: ["Combi-weapon"] } },
  { id: "apoth", name: "Apothecary", role: "HQ", points: 45, wargear: { pistol: ["Bolt Pistol"], melee: ["Astartes Chainsword"] } },
  { id: "apoth_bi", name: "Apothecary Biologis", role: "HQ", points: 60, wargear: { pistol: ["Absolvor Bolt Pistol"] } },
  { id: "ancient_term", name: "Ancient in Terminator Armour", role: "HQ", points: 75, wargear: { ranged: ["Storm Bolter", "Combi-weapon"], melee: ["Power Fist", "Chainfist"] } },
  { id: "ancient", name: "Ancient", role: "HQ", points: 40, wargear: { weapons: ["Bolt Rifle & close combat weapon"] } },
  { id: "bladeguard_ancient", name: "Bladeguard Ancient", role: "HQ", points: 70, wargear: { weapons: ["Heavy Bolt Pistol & close combat weapon"] } },
  { id: "techmarine", name: "Techmarine", role: "HQ", points: 55, wargear: { pistol: ["Bolt Pistol"], melee: ["Omnissian Power Axe"] } },
  { id: "judiciar", name: "Judiciar", role: "HQ", points: 50, wargear: { weapons: ["Executioner Relic Blade & Absolvor Bolt Pistol"] } },
  { id: "iron_father_feirros", name: "Iron Father Feirros", role: "HQ", points: 85, isEpicHero: true, wargear: { weapons: ["Gorgon's Wrath & Harrowhand"] } },
  { id: "tigris", name: "Chief Librarian Tigurius", role: "HQ", points: 115, isEpicHero: true, wargear: { weapons: ["Rod of Tigurius & bolt pistol"] } },
  { id: "lysander", name: "Darnath Lysander", role: "HQ", points: 160, isEpicHero: true, wargear: { weapons: ["Fist of Dorn & Storm Shield"] } },
  { id: "tor_garadon", name: "Tor Garadon", role: "HQ", points: 90, isEpicHero: true, wargear: { weapons: ["Artificer Grav-gun & Hand of Defiance"] } },
  { id: "caanok_var", name: "Caanok Var", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Master-crafted bolt rifle & power weapon"] } },
  { id: "adrax_agatone", name: "Adrax Agatone", role: "HQ", points: 90, isEpicHero: true, wargear: { weapons: ["Drake-smiter & hand flamer"] } },
  { id: "vulkan_hestan", name: "Vulkan He'stan", role: "HQ", points: 105, isEpicHero: true, wargear: { weapons: ["Spear of Vulkan & Gauntlet of the Forge"] }, chapter: "salamanders" },
  { id: "aethon_shaan", name: "Aethon Shaan", role: "HQ", points: 105, isEpicHero: true, wargear: { weapons: ["Fang of the Ashen & twin lightning claws"] } },
  { id: "kayvaan_shrike", name: "Kayvaan Shrike", role: "HQ", points: 95, isEpicHero: true, wargear: { weapons: ["Blackout & Raven's Talons"] } },
  { id: "cato_sicarius", name: "Cato Sicarius", role: "HQ", points: 115, isEpicHero: true, wargear: { weapons: ["Talassarian Tempest Blade & bolt pistol"] } },
  { id: "kaius_konorius", name: "Kaius Konorius", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Master-crafted bolt rifle & power weapon"] } },
  { id: "suboden_khan", name: "Suboden Khan", role: "HQ", points: 105, isEpicHero: true, wargear: { weapons: ["Moonfang & storm bolter"] } },
  { id: "victrix_guard", name: "Victrix Honour Guard", role: "Infantry", points: 120, squadSizes: [{ models: 3, points: 120 }, { models: 6, points: 250 }], wargear: { weapons: ["Heavy Bolt Pistol & Victrix Power Sword"] } },
  { id: "int_sq", name: "Intercessor Squad (5 models)", role: "Battleline", points: 85, squadSizes: [{ models: 5, points: 85 }, { models: 10, points: 170 }], wargear: { rifle: ["Bolt Rifle", "Auto Bolt Rifle", "Stalker Bolt Rifle"], upgrade: ["None", "Astartes Grenade Launcher"] } },
  { id: "ass_int", name: "Assault Intercessor Squad (5 models)", role: "Battleline", points: 85, squadSizes: [{ models: 5, points: 85 }, { models: 10, points: 170 }], wargear: { sergeant: ["Astartes Chainsword", "Power Fist"], pistol: ["Heavy Bolt Pistol", "Plasma Pistol"] } },
  { id: "hv_int", name: "Heavy Intercessor Squad (5 models)", role: "Battleline", points: 115, squadSizes: [{ models: 5, points: 115 }, { models: 10, points: 230 }], wargear: { primary: ["Heavy Bolt Rifle", "Hellstorm Bolt Rifle", "Executor Bolt Rifle"] } },
  { id: "scout_sq", name: "Scout Squad (5 models)", role: "Infantry", points: 65, squadSizes: [{ models: 5, points: 65 }, { models: 10, points: 120 }], wargear: { loadout: ["Boltgun", "Astartes Shotgun", "Combat Knife", "Scout Sniper Rifle"] } },
  { id: "aggressors", name: "Aggressor Squad (3 models)", role: "Infantry", points: 90, squadSizes: [{ models: 3, points: 90 }, { models: 6, points: 180 }], wargear: { weapons: ["Auto Boltstorm Gauntlets & Fragstorm Grenade Launcher", "Flamestorm Gauntlets"] } },
  { id: "ass_jp", name: "Assault Intercessors with Jump Packs (5 models)", role: "Infantry", points: 95, squadSizes: [{ models: 5, points: 95 }, { models: 10, points: 190 }], wargear: { sergeant: ["Astartes Chainsword", "Power Fist"], pistol: ["Heavy Bolt Pistol", "Plasma Pistol"] } },
  { id: "bg_vet", name: "Bladeguard Veteran Squad (3 models)", role: "Infantry", points: 90, squadSizes: [{ models: 3, points: 90 }, { models: 6, points: 180 }], wargear: { pistols: ["Heavy Bolt Pistol", "Plasma Pistol"], melee: ["Master-crafted Power Weapon"] } },
  { id: "company_heroes", name: "Company Heroes", role: "Infantry", points: 125, wargear: { loadout: ["Standard Company Heroes configuration"] } },
  { id: "desolation", name: "Desolation Squad (5 models)", role: "Infantry", points: 140, wargear: { launcher: ["Superfrag Rocket Launcher", "Superkrak Rocket Launcher"], sergeant: ["Vengor Launcher", "Bolt Pistol"] } },
  { id: "eliminators", name: "Eliminator Squad (3 models)", role: "Infantry", points: 85, wargear: { rifles: ["Bolt Sniper Rifle", "Las Fusil"], sergeant: ["Instigator Bolt Carbine"] } },
  { id: "eradicators", name: "Eradicator Squad (3 models)", role: "Infantry", points: 100, squadSizes: [{ models: 3, points: 100 }, { models: 6, points: 200, pointsBySelection: { weapons: { "Heavy Bolters": 215 } } }], wargear: { weapons: ["Melta Rifles", "Heavy Bolters"] } },
  { id: "hellblasters", name: "Hellblaster Squad (5 models)", role: "Infantry", points: 115, squadSizes: [{ models: 5, points: 115 }, { models: 10, points: 230 }], wargear: { weapons: ["Plasma Incinerator", "Assault Plasma Incinerator", "Heavy Plasma Incinerator"] } },
  { id: "infernus", name: "Infernus Squad (5 models)", role: "Infantry", points: 95, squadSizes: [{ models: 5, points: 95 }, { models: 10, points: 190 }], wargear: { weapons: ["Pyreblasters"] } },
  { id: "infil_sq", name: "Infiltrator Squad (5 models)", role: "Infantry", points: 85, squadSizes: [{ models: 5, points: 85 }, { models: 10, points: 150 }], wargear: { communications: ["Helix Gauntlet", "Infiltrator Comms Array", "None"] } },
  { id: "incursors", name: "Incursors Squad (5 models)", role: "Infantry", points: 90, squadSizes: [{ models: 5, points: 90 }, { models: 10, points: 170 }], wargear: { weapons: ["Occulus Bolt Carbines & paired combat blades"] } },
  { id: "incept_sq", name: "Inceptor Squad (3 models)", role: "Infantry", points: 130, squadSizes: [{ models: 3, points: 130 }, { models: 6, points: 260 }], wargear: { weapons: ["Assault Bolters", "Plasma Exterminators"] } },
  { id: "reivers", name: "Reiver Squad (5 models)", role: "Infantry", points: 85, squadSizes: [{ models: 5, points: 85 }, { models: 10, points: 165 }], wargear: { weapons: ["Special Issue Bolt Pistol & Combat Knife", "Bolt Carbine"] } },
  { id: "ster_vet", name: "Sternguard Veteran Squad (5 models)", role: "Infantry", points: 105, squadSizes: [{ models: 5, points: 105 }, { models: 10, points: 210 }], wargear: { special: ["Sternguard Bolt Rifle", "Sternguard Heavy Bolter", "Pyreblaster"] } },
  { id: "term_sq", name: "Terminator Squad (5 models)", role: "Infantry", points: 190, squadSizes: [{ models: 5, points: 190 }, { models: 10, points: 380 }], wargear: { heavy_weapon: ["Storm Bolter", "Assault Cannon", "Cyclone Missile Launcher", "Heavy Flamer"], melee: ["Power Fist", "Chainfist"] } },
  { id: "term_assault", name: "Terminator Assault Squad (5 models)", role: "Infantry", points: 170, squadSizes: [{ models: 5, points: 170 }, { models: 10, points: 340 }], wargear: { weapons: ["Thunder Hammer & Storm Shield", "Twin Lightning Claws"] } },
  { id: "vanguard_jp", name: "Vanguard Veteran Squad with Jump Packs (5 models)", role: "Infantry", points: 110, squadSizes: [{ models: 5, points: 110 }, { models: 10, points: 220 }], wargear: { weapons: ["Heavy Bolt Pistol & Astartes Chainsword", "Storm Shield & Power Weapon", "Relic Blade"] } },
  { id: "out_riders", name: "Outrider Squad (3 models)", role: "Infantry", points: 80, squadSizes: [{ models: 3, points: 80 }, { models: 6, points: 160 }], wargear: { weapons: ["Twin Bolt Rifles & Astartes Chainswords"] } },
  { id: "ball_dr", name: "Ballistus Dreadnought", role: "Vehicle", points: 150, wargear: { layout: ["Ballistus Lascannon & Missile Launcher"] } },
  { id: "red_dr", name: "Redemptor Dreadnought", role: "Vehicle", points: 170, wargear: { arm: ["Macro Plasma Incinerator", "Heavy Onslaught Gatling Cannon"], chest: ["Twin Fragstorm Grenade Launcher", "Twin Storm Bolter"] } },
  { id: "brutalis", name: "Brutalis Dreadnought", role: "Vehicle", points: 160, wargear: { arms: ["Brutalis Fists", "Brutalis Bolt Rifles"], ranged: ["Brutalis Bolt Rifles", "Brutalis Heavy Bolters"] } },
  { id: "invictor", name: "Invictor Tactical Warsuit", role: "Vehicle", points: 135, wargear: { weapon: ["Twin Ironhail Autocannon", "Incendium Cannon"] } },
  { id: "firestrike", name: "Firestrike Servo-turrets", role: "Vehicle", points: 80, squadSizes: [{ models: 1, points: 80 }, { models: 2, points: 160 }], wargear: { weapon: ["Twin Firestrike Autocannon", "Twin Firestrike Lascannon"] } },
  { id: "glad_lancer", name: "Gladiator Lancer", role: "Vehicle", points: 160, wargear: { turret: ["Lancer Laser Destroyer"], hull: ["Twin Heavy Bolter", "Icarus Rocket Pod"] } },
  { id: "glad_reaper", name: "Gladiator Reaper", role: "Vehicle", points: 165, wargear: { turret: ["Twin Heavy Onslaught Gatling Cannon"], hull: ["Twin Heavy Bolter", "Icarus Rocket Pod"] } },
  { id: "glad_valiant", name: "Gladiator Valiant", role: "Vehicle", points: 165, wargear: { turret: ["Twin Las-talon"], hull: ["Twin Heavy Bolter", "Icarus Rocket Pod"] } },
  { id: "invader_atv", name: "Invader ATV", role: "Vehicle", points: 65, squadSizes: [{ models: 1, points: 65, pointsBySelection: { weapon: { "Multi-melta": 70 } } }, { models: 2, points: 130, pointsBySelection: { weapon: { "Multi-melta": 140 } } }], wargear: { weapon: ["Onslaught Gatling Cannon", "Multi-melta"] } },
  { id: "repulsor", name: "Repulsor", role: "Vehicle", points: 190, wargear: { main: ["Heavy Onslaught Gatling Cannon", "Las-talon"], option: ["Ironhail Heavy Stubber", "Icarus Rocket Pod"] } },
  { id: "impulsor", name: "Impulsor", role: "Vehicle", points: 70, wargear: { main: ["Bellicatus Missile Array", "Orbital Comms Array", "Shield Dome", "Ironhail Heavy Stubber"], secondary: ["Storm Bolters", "Fragstorm Grenade Launchers"] } },
  { id: "rep_ex", name: "Repulsor Executioner", role: "Vehicle", points: 260, wargear: { turret: ["Macro Plasma Incinerator", "Heavy Laser Destroyer"], option: ["Ironhail Heavy Stubber", "Icarus Rocket Pod"] } },
  { id: "rhino", name: "Rhino", role: "Vehicle", points: 70, wargear: { storm_bolter: ["Storm Bolter", "Combi-weapon"] } },
  { id: "land_raider", name: "Land Raider", role: "Vehicle", points: 245, wargear: { sponsons: ["Godhammer Lascannons"], hull: ["Twin Heavy Bolter", "Multi-melta"] } },
  { id: "land_raider_crusader", name: "Land Raider Crusader", role: "Vehicle", points: 230, wargear: { hull: ["Twin Assault Cannon"], sponsons: ["Hurricane Bolters"] } },
  { id: "land_raider_redeemer", name: "Land Raider Redeemer", role: "Vehicle", points: 245, wargear: { hull: ["Twin Assault Cannon"], sponsons: ["Flamestorm Cannons"] } },
  { id: "land_speeder", name: "Land Speeder", role: "Vehicle", points: 105, wargear: { weapons: ["Heavy Bolter", "Multi-melta"] } },
  { id: "storm_hail", name: "Storm Speeder Hailstrike", role: "Vehicle", points: 110, wargear: { weapons: ["Hailstrike weapons"] } },
  { id: "storm_hammer", name: "Storm Speeder Hammerstrike", role: "Vehicle", points: 140, wargear: { weapons: ["Hammerstrike weapons"] } },
  { id: "storm_thunder", name: "Storm Speeder Thunderstrike", role: "Vehicle", points: 140, wargear: { weapons: ["Thunderstrike weapons"] } },
  { id: "astraeus", name: "Astraeus", role: "Vehicle", points: 550, wargear: { main: ["Twin macro-accelerator cannon", "Twin lascannon array"] } },
  { id: "thunderhawk", name: "Thunderhawk Gunship", role: "Vehicle", points: 850, wargear: { weapons: ["Thunderhawk heavy cannon & turbo-laser destructor"] } },
  { id: "drop_pod", name: "Drop Pod", role: "Vehicle", points: 60, wargear: { launcher: ["Deathwind Launcher", "Storm Bolter"] } },
  { id: "watch_master", name: "Watch Master", role: "HQ", points: 105, isEpicHero: false, wargear: { weapons: ["Guardian Spear"] }, chapter: "deathwatch" },
  { id: "watch_captain_artemis", name: "Watch Captain Artemis", role: "HQ", points: 75, isEpicHero: true, wargear: { weapons: ["Hellfire Extremis & master-crafted power weapon"] }, chapter: "deathwatch" },
  { id: "deathwatch_terminators", name: "Deathwatch Terminator Squad (5 models)", role: "Infantry", points: 190, wargear: { ranged: ["Storm Bolter", "Cyclone Missile Launcher"], melee: ["Power Fist", "Chainfist"] }, chapter: "deathwatch" },
  { id: "deathwatch_veterans", name: "Deathwatch Veterans (5 models)", role: "Infantry", points: 115, wargear: { weapons: ["Deathwatch boltgun", "Frag cannon", "Infernus heavy bolter", "Xenophase blade"] }, chapter: "deathwatch" },
  { id: "decimus_kill_team", name: "Decimus Kill Team (5 models)", role: "Infantry", points: 110, wargear: { weapons: ["Mixed Deathwatch Kill Team loadout"] }, chapter: "deathwatch" },
  { id: "fortis_kill_team", name: "Fortis Kill Team (10 models)", role: "Infantry", points: 210, wargear: { weapons: ["Mixed Tacticus Kill Team loadout"] }, chapter: "deathwatch" },
  { id: "indomitor_kill_team", name: "Indomitor Kill Team (10 models)", role: "Infantry", points: 280, wargear: { weapons: ["Mixed Gravis Kill Team loadout"] }, chapter: "deathwatch" },
  { id: "spectrus_kill_team", name: "Spectrus Kill Team (10 models)", role: "Infantry", points: 185, wargear: { weapons: ["Mixed Phobos Kill Team loadout"] }, chapter: "deathwatch" },
  { id: "talonstrike_kill_team", name: "Talonstrike Kill Team (10 models)", role: "Infantry", points: 280, wargear: { weapons: ["Mixed Jump Pack Kill Team loadout"] }, chapter: "deathwatch" },
  { id: "astorath", name: "Astorath", role: "HQ", points: 90, isEpicHero: true, wargear: { weapons: ["Executioner's Axe & absolvor bolt pistol"] }, chapter: "blood_angels" },
  { id: "baal_predator", name: "Baal Predator", role: "Vehicle", points: 135, wargear: { turret: ["Twin assault cannon", "Flamestorm cannon"], sponsons: ["Heavy bolters", "Heavy flamers"] }, chapter: "blood_angels" },
  { id: "mephiston", name: "Chief Librarian Mephiston", role: "HQ", points: 175, isEpicHero: true, wargear: { weapons: ["Vitarus & plasma pistol"] }, chapter: "blood_angels" },
  { id: "commander_dante", name: "Commander Dante", role: "HQ", points: 140, isEpicHero: true, wargear: { weapons: ["The Axe Mortalis & Perdition Pistol"] }, chapter: "blood_angels" },
  { id: "death_company_captain", name: "Death Company Captain", role: "HQ", points: 80, wargear: { weapons: ["Heavy bolt pistol & Astartes chainsword"] }, chapter: "blood_angels" },
  { id: "death_company_captain_jp", name: "Death Company Captain with Jump Pack", role: "HQ", points: 85, wargear: { weapons: ["Heavy bolt pistol & Astartes chainsword"] }, chapter: "blood_angels" },
  { id: "death_company_dreadnought", name: "Death Company Dreadnought", role: "Vehicle", points: 165, wargear: { melee: ["Blood talons", "Furioso fists"], ranged: ["Heavy flamer", "Meltagun"] }, chapter: "blood_angels" },
  { id: "death_company_marines", name: "Death Company Marines (5 models)", role: "Infantry", points: 90, wargear: { weapons: ["Bolt rifles", "Heavy bolt pistols & chainswords"] }, chapter: "blood_angels" },
  { id: "death_company_jump", name: "Death Company Marines with Jump Packs (5 models)", role: "Infantry", points: 130, wargear: { weapons: ["Heavy bolt pistols & chainswords"] }, chapter: "blood_angels" },
  { id: "lemartes", name: "Lemartes", role: "HQ", points: 110, isEpicHero: true, wargear: { weapons: ["Blood Crozius & bolt pistol"] }, chapter: "blood_angels" },
  { id: "sanguinary_guard", name: "Sanguinary Guard (3 models)", role: "Infantry", points: 135, wargear: { weapons: ["Encarmine blades", "Encarmine spears"] }, chapter: "blood_angels" },
  { id: "sanguinary_priest", name: "Sanguinary Priest", role: "HQ", points: 60, wargear: { weapons: ["Absolvor bolt pistol & chainsword"] }, chapter: "blood_angels" },
  { id: "sanguinor", name: "The Sanguinor", role: "HQ", points: 120, isEpicHero: true, wargear: { weapons: ["Encarmine broadsword"] }, chapter: "blood_angels" },
  { id: "asmodai", name: "Asmodai", role: "HQ", points: 80, isEpicHero: true, wargear: { weapons: ["Blades of Reason & crozius arcanum"] }, chapter: "dark_angels" },
  { id: "azrael", name: "Azrael", role: "HQ", points: 150, isEpicHero: true, wargear: { weapons: ["The Lion's Wrath & Sword of Secrets"] }, chapter: "dark_angels" },
  { id: "belial", name: "Belial", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Sword of Silence"] }, chapter: "dark_angels" },
  { id: "deathwing_knights", name: "Deathwing Knights (5 models)", role: "Infantry", points: 255, wargear: { weapons: ["Mace of absolution", "Power weapon"] }, chapter: "dark_angels" },
  { id: "deathwing_terminators", name: "Deathwing Terminator Squad (5 models)", role: "Infantry", points: 190, wargear: { ranged: ["Storm Bolter", "Cyclone Missile Launcher"], melee: ["Power Fist", "Chainfist"] }, chapter: "dark_angels" },
  { id: "inner_circle_companions", name: "Inner Circle Companions (3 models)", role: "Infantry", points: 90, wargear: { weapons: ["Calibanite greatswords"] }, chapter: "dark_angels" },
  { id: "land_speeder_vengeance", name: "Land Speeder Vengeance", role: "Vehicle", points: 150, wargear: { weapons: ["Plasma storm battery", "Heavy bolter"] }, chapter: "dark_angels" },
  { id: "lazarus", name: "Lazarus", role: "HQ", points: 80, isEpicHero: true, wargear: { weapons: ["Enmity's Edge & bolt pistol"] }, chapter: "dark_angels" },
  { id: "lion_eljonson", name: "Lion El'Jonson", role: "HQ", points: 415, isEpicHero: true, wargear: { weapons: ["Fealty"] }, chapter: "dark_angels" },
  { id: "nephilim_jetfighter", name: "Nephilim Jetfighter", role: "Vehicle", points: 200, wargear: { weapons: ["Nephilim lascannons & Blacksword missiles"] }, chapter: "dark_angels" },
  { id: "ravenwing_black_knights", name: "Ravenwing Black Knights (3 models)", role: "Infantry", points: 85, wargear: { weapons: ["Corvus hammers & plasma talons"] }, chapter: "dark_angels" },
  { id: "ravenwing_command", name: "Ravenwing Command Squad (3 models)", role: "Infantry", points: 115, wargear: { weapons: ["Corvus hammers & plasma talons"] }, chapter: "dark_angels" },
  { id: "ravenwing_darkshroud", name: "Ravenwing Darkshroud", role: "Vehicle", points: 80, wargear: { weapons: ["Heavy bolter"] }, chapter: "dark_angels" },
  { id: "ravenwing_dark_talon", name: "Ravenwing Dark Talon", role: "Vehicle", points: 190, wargear: { weapons: ["Rift cannon & hurricane bolters"] }, chapter: "dark_angels" },
  { id: "sammael", name: "Sammael", role: "HQ", points: 120, isEpicHero: true, wargear: { weapons: ["The Raven Sword & plasma cannon"] }, chapter: "dark_angels" },
  { id: "crusade_ancient", name: "Crusade Ancient", role: "HQ", points: 45, wargear: { weapons: ["Bolt rifle & close combat weapon"] }, chapter: "black_templars" },
  { id: "chaplain_grimaldus", name: "Chaplain Grimaldus", role: "HQ", points: 120, isEpicHero: true, wargear: { weapons: ["Artificer crozius & plasma pistol"] }, chapter: "black_templars" },
  { id: "crusader_squad", name: "Crusader Squad (10 models)", role: "Battleline", points: 160, wargear: { weapons: ["Sword Brother and Initiate/Neophyte squad loadout"] }, chapter: "black_templars" },
  { id: "emperors_champion", name: "Emperor's Champion", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Black Sword & bolt pistol"] }, chapter: "black_templars" },
  { id: "execrator", name: "Execrator", role: "HQ", points: 65, wargear: { weapons: ["Crozius arcanum & bolt pistol"] }, chapter: "black_templars" },
  { id: "helbrecht", name: "High Marshal Helbrecht", role: "HQ", points: 125, isEpicHero: true, wargear: { weapons: ["Sword of the High Marshals & combi-melta"] }, chapter: "black_templars" },
  { id: "marshal", name: "Marshal", role: "HQ", points: 80, wargear: { weapons: ["Master-crafted power weapon & bolt pistol"] }, chapter: "black_templars" },
  { id: "sword_brethren", name: "Sword Brethren Squad (4 models)", role: "Infantry", points: 115, wargear: { weapons: ["Power weapons, lightning claws, thunder hammer"] }, chapter: "black_templars" },
  { id: "arjac_rockfist", name: "Arjac Rockfist", role: "HQ", points: 105, isEpicHero: true, wargear: { weapons: ["Foehammer"] }, chapter: "space_wolves" },
  { id: "bjorn_fellhanded", name: "Bjorn the Fell-Handed", role: "Vehicle", points: 160, isEpicHero: true, canBeWarlord: true, wargear: { weapons: ["Heavy flamer", "Fenrisian great axe"] }, chapter: "space_wolves" },
  { id: "blood_claws", name: "Blood Claws (10 models)", role: "Battleline", points: 150, wargear: { weapons: ["Bolt pistols & close combat weapons"] }, chapter: "space_wolves" },
  { id: "fenrisian_wolves", name: "Fenrisian Wolves (5 models)", role: "Infantry", points: 45, wargear: { weapons: ["Teeth and claws"] }, chapter: "space_wolves" },
  { id: "grey_hunters", name: "Grey Hunters (10 models)", role: "Battleline", points: 180, wargear: { weapons: ["Boltguns & close combat weapons"] }, chapter: "space_wolves" },
  { id: "iron_priest", name: "Iron Priest", role: "HQ", points: 60, wargear: { weapons: ["Forge weapons"] }, chapter: "space_wolves" },
  { id: "logan_grimnar", name: "Logan Grimnar", role: "HQ", points: 150, isEpicHero: true, wargear: { weapons: ["The Axe Morkai"] }, chapter: "space_wolves" },
  { id: "murderfang", name: "Murderfang", role: "Vehicle", points: 150, isEpicHero: true, wargear: { weapons: ["Heavy flamer & Murderfang's claws"] }, chapter: "space_wolves" },
  { id: "njal_stormcaller", name: "Njal Stormcaller", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Staff of the Stormcaller"] }, chapter: "space_wolves" },
  { id: "ragnar_blackmane", name: "Ragnar Blackmane", role: "HQ", points: 100, isEpicHero: true, wargear: { weapons: ["Frostfang & bolt pistol"] }, chapter: "space_wolves" },
  { id: "thunderwolf_cavalry", name: "Thunderwolf Cavalry (3 models)", role: "Cavalry", points: 115, wargear: { weapons: ["Bolt pistol", "Storm Shield", "Close combat weapon"] }, chapter: "space_wolves" },
  { id: "ulrik_slayer", name: "Ulrik the Slayer", role: "HQ", points: 90, isEpicHero: true, wargear: { weapons: ["Crozius arcanum & plasma pistol"] }, chapter: "space_wolves" },
  { id: "venerable_dreadnought_sw", name: "Venerable Dreadnought", role: "Vehicle", points: 130, wargear: { weapons: ["Assault cannon", "Fenrisian great axe"] }, chapter: "space_wolves" },
  { id: "wolf_guard_battle_leader", name: "Wolf Guard Battle Leader", role: "HQ", points: 80, wargear: { weapons: ["Master-crafted boltgun & power weapon"] }, chapter: "space_wolves" },
  { id: "wolf_guard_headtakers", name: "Wolf Guard Headtakers (3 models)", role: "Infantry", points: 85, wargear: { weapons: ["Headtaker weapons"] }, chapter: "space_wolves" },
  { id: "wolf_guard_terminators", name: "Wolf Guard Terminators with Storm Shields (5 models)", role: "Infantry", points: 180, wargear: { weapons: ["Storm bolters & power fists"] }, chapter: "space_wolves" },
  { id: "wolf_priest", name: "Wolf Priest", role: "HQ", points: 75, wargear: { weapons: ["Crozius arcanum & bolt pistol"] }, chapter: "space_wolves" },
  { id: "wolf_scouts", name: "Wolf Scouts (6 models)", role: "Infantry", points: 95, wargear: { weapons: ["Scout squad weapons"] }, chapter: "space_wolves" },
  { id: "wulfen", name: "Wulfen (5 models)", role: "Infantry", points: 90, wargear: { weapons: ["Wulfen weapons"] }, chapter: "space_wolves" },
  { id: "wulfen_dreadnought", name: "Wulfen Dreadnought", role: "Vehicle", points: 140, wargear: { weapons: ["Fenrisian great axe", "Great wolf claw"] }, chapter: "space_wolves" },
  { id: "wulfen_storm_shields", name: "Wulfen with Storm Shields (5 models)", role: "Infantry", points: 125, wargear: { weapons: ["Storm shields & close combat weapons"] }, chapter: "space_wolves" },
  { id: "Ventris", name: "Uriel Ventris", role: "HQ", points: 95, isEpicHero: true, wargear: { weapons: ["Bolt pistol, Invictus (bolter), and the Sword of Idaeus."] } },
];

const chapters = {
  codex: "Codex: Space Marines",
  ultramarines: "Ultramarines",
  imperial_fists: "Imperial Fists",
  salamanders: "Salamanders",
  raven_guard: "Raven Guard",
  iron_hands: "Iron Hands",
  white_scars: "White Scars",
  dark_angels: "Dark Angels",
  blood_angels: "Blood Angels",
  space_wolves: "Space Wolves",
  black_templars: "Black Templars",
  deathwatch: "Deathwatch"
};

const chapterThemes = {
  codex: { primary: "#2563eb", primaryHover: "#1d4ed8", accent: "#eab308", accentHover: "#ca8a04", background: "#0b0f19", panel: "#1e293b", inner: "#0f172a", hover: "#131d35", selected: "#14223a", border: "#334155", borderMuted: "#475569", heading: "#cbd5e1" },
  ultramarines: { primary: "#1675c1", primaryHover: "#105d9c", accent: "#d4b35e", accentHover: "#b8943d", background: "#091522", panel: "#132b40", inner: "#0b1d2d", hover: "#10263a", selected: "#173653", border: "#29465d", borderMuted: "#3b5c73", heading: "#d7e6f0" },
  imperial_fists: { primary: "#d69e16", primaryHover: "#ad7e0e", accent: "#f1cc55", accentHover: "#d2a92d", background: "#171307", panel: "#302812", inner: "#1d190d", hover: "#3a3014", selected: "#423416", border: "#534520", borderMuted: "#67572b", heading: "#f2e8c8" },
  salamanders: { primary: "#16854a", primaryHover: "#116838", accent: "#e26d36", accentHover: "#bd5125", background: "#09150e", panel: "#153324", inner: "#0c2116", hover: "#123421", selected: "#18432b", border: "#28543a", borderMuted: "#3b684e", heading: "#d4eadb" },
  raven_guard: { primary: "#4b5563", primaryHover: "#374151", accent: "#8fb7d8", accentHover: "#6b99bd", background: "#0b0e12", panel: "#202833", inner: "#121922", hover: "#242f3c", selected: "#293746", border: "#374453", borderMuted: "#4a5a69", heading: "#dbe4ec" },
  iron_hands: { primary: "#687684", primaryHover: "#515f6b", accent: "#d2753e", accentHover: "#ae5728", background: "#0d1114", panel: "#252b30", inner: "#161c20", hover: "#2a343a", selected: "#303c43", border: "#3b454c", borderMuted: "#515d65", heading: "#dce2e6" },
  white_scars: { primary: "#a8b5c0", primaryHover: "#8796a2", accent: "#c94b4b", accentHover: "#a93434", background: "#101316", panel: "#292f33", inner: "#191f23", hover: "#333b40", selected: "#3c464c", border: "#424c52", borderMuted: "#59666e", heading: "#edf0f2" },
  dark_angels: { primary: "#276449", primaryHover: "#1d4d37", accent: "#b6a15c", accentHover: "#938044", background: "#09120e", panel: "#17271f", inner: "#0e1b15", hover: "#1b3025", selected: "#203a2c", border: "#2b4838", borderMuted: "#3f5d4c", heading: "#d9e6dc" },
  blood_angels: { primary: "#a92332", primaryHover: "#841b27", accent: "#d4b35e", accentHover: "#b8943d", background: "#180b0e", panel: "#35171d", inner: "#211014", hover: "#401a22", selected: "#4b2029", border: "#572a32", borderMuted: "#70404a", heading: "#f0dfe1" },
  space_wolves: { primary: "#66849a", primaryHover: "#4e6b80", accent: "#c8ab70", accentHover: "#a88b54", background: "#0c1217", panel: "#202c35", inner: "#131e26", hover: "#293946", selected: "#304352", border: "#3b4e5b", borderMuted: "#526775", heading: "#dbe5eb" },
  black_templars: { primary: "#9b3035", primaryHover: "#772329", accent: "#d8d8d2", accentHover: "#b8bab7", background: "#101011", panel: "#262627", inner: "#181819", hover: "#303032", selected: "#38383a", border: "#414144", borderMuted: "#5b5b5f", heading: "#e5e5e2" },
  deathwatch: { primary: "#6b7280", primaryHover: "#525966", accent: "#bd4545", accentHover: "#963434", background: "#0b0c0f", panel: "#202226", inner: "#131519", hover: "#292c31", selected: "#32363d", border: "#3b3f46", borderMuted: "#555a63", heading: "#dfe1e5" }
};

function applyChapterTheme(chapterId) {
  const theme = chapterThemes[chapterId] || chapterThemes.codex;
  const root = document.documentElement;
  root.dataset.chapter = chapterId;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-hover", theme.primaryHover);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-hover", theme.accentHover);
  root.style.setProperty("--bg-color", theme.background);
  root.style.setProperty("--panel-bg", theme.panel);
  root.style.setProperty("--inner-bg", theme.inner);
  root.style.setProperty("--card-hover", theme.hover);
  root.style.setProperty("--selected-bg", theme.selected);
  root.style.setProperty("--border-color", theme.border);
  root.style.setProperty("--border-muted", theme.borderMuted);
  root.style.setProperty("--panel-heading", theme.heading);
}

const chapterExclusiveUnits = {
  ultramarines: ["guilliman", "calgar", "captain_titus", "tigris", "cato_sicarius", "victrix_guard"],
  imperial_fists: ["lysander", "tor_garadon"],
  salamanders: ["adrax_agatone"],
  raven_guard: ["aethon_shaan", "kayvaan_shrike"],
  iron_hands: ["iron_father_feirros"],
  white_scars: ["suboden_khan"],
  blood_angels: masterUnits.filter(unit => unit.chapter === "blood_angels").map(unit => unit.id),
  dark_angels: masterUnits.filter(unit => unit.chapter === "dark_angels").map(unit => unit.id),
  black_templars: masterUnits.filter(unit => unit.chapter === "black_templars").map(unit => unit.id),
  space_wolves: masterUnits.filter(unit => unit.chapter === "space_wolves").map(unit => unit.id)
};

const unitInfo = {
  guilliman: "A named Ultramarines commander. His datasheet represents a powerful close-range combatant and army-support leader.",
  calgar: "An Ultramarines Chapter Master accompanied by Victrix Honour Guard; his roster entry includes his bodyguard models.",
  int_sq: "Battleline infantry suited to holding objectives and supporting the wider force.",
  ass_int: "Close-combat Battleline infantry suited to taking and holding objectives.",
  hv_int: "Durable Gravis Battleline infantry suited to holding ground under fire.",
  aggressors: "Gravis assault infantry suited to advancing into close-range engagements.",
  eliminators: "Phobos marksmen suited to reconnaissance and precision fire support.",
  eradicators: "Gravis anti-armour infantry suited to engaging heavily armoured targets.",
  hellblasters: "Plasma-armed infantry suited to high-intensity ranged support.",
  infiltrators: "Phobos screening infantry suited to forward deployment and denying enemy reinforcements near their position.",
  infil_sq: "Phobos screening infantry suited to forward deployment and denying enemy reinforcements near their position.",
  incursors: "Phobos reconnaissance infantry equipped for close-range fighting and target marking.",
  scout_sq: "Light infantry suited to scouting, screening, and holding forward positions.",
  incept_sq: "Jump-pack infantry suited to rapid deployment and mobile fire support.",
  term_sq: "Heavily armoured infantry suited to holding critical positions.",
  ball_dr: "Long-range fire-support Dreadnought equipped with lascannons and missile weaponry.",
  red_dr: "A versatile Dreadnought. The arm weapon choice favours plasma or high-volume fire.",
  land_raider: "A heavy transport suited to carrying elite infantry and supporting the advance."
};

const detachments = {
  assault_brethren: {
    name: "Assault Brethren",
    enhancements: [
      { name: "Furious Assault (Upgrade)", points: 10 },
      { name: "Imperium's Sword", points: 20 }
    ]
  },
  angelic_inheritors: {
    name: "Angelic Inheritors",
    chapter: "blood_angels",
    enhancements: [
      { name: "Blazing Icon", points: 20 },
      { name: "Ordained Sacrifice", points: 25 },
      { name: "Prescient Flash", points: 25 },
      { name: "Unto Death", points: 15 }
    ]
  },
  encarmine_speartip: {
    name: "Encarmine Speartip",
    chapter: "blood_angels",
    enhancements: [
      { name: "Angelic Executioner", points: 20 },
      { name: "Shadow of Abomination", points: 15 }
    ]
  },
  blade_of_ultramar: {
    name: "Blade of Ultramar",
    chapter: "ultramarines",
    enhancements: [
      { name: "Armour of Antoninus", points: 15 },
      { name: "Oath of Macragge", points: 20 },
      { name: "Student of the Codex", points: 20 },
      { name: "Veteran of Behemoth", points: 20 }
    ]
  },
  ceramite_sentinels: {
    name: "Ceramite Sentinels",
    chapter: "ultramarines",
    enhancements: [
      { name: "Castellum Omnivox", points: 10 },
      { name: "Defensive Mastery", points: 10 },
      { name: "Honour Indefatigable", points: 10 },
      { name: "Spy-skull Data Link", points: 10 }
    ]
  },
  champions_of_fenris: {
    name: "Champions of Fenris",
    chapter: "space_wolves",
    enhancements: [
      { name: "A Giant Amongst Giants", points: 15 },
      { name: "Preyslayer", points: 15 }
    ]
  },
  deathwatch_support: {
    name: "Deathwatch Support",
    enhancements: [{ name: "Beacon Angelis", points: 25 }]
  },
  darkflight_pursuit: {
    name: "Darkflight Pursuit",
    chapter: "dark_angels",
    enhancements: [
      { name: "Nightforged Battery (Upgrade)", points: 10 },
      { name: "Thundercowl Turbines (Upgrade)", points: 15 }
    ]
  },
  devastator_brethren: {
    name: "Devastator Brethren",
    enhancements: [
      { name: "Honour of Vigilance", points: 20 },
      { name: "Master-forged Firearms", points: 15 }
    ]
  },
  forgefathers_seekers: {
    name: "Forgefathers' Seekers",
    chapter: "salamanders",
    enhancements: [
      { name: "Adamantine Mantle", points: 20 },
      { name: "Forged in Battle", points: 25 },
      { name: "Immolator", points: 20 },
      { name: "War-tempered Artifice", points: 25 }
    ]
  },
  gauntlet_task_force: {
    name: "Gauntlet Task Force",
    enhancements: [
      { name: "Damocles-class Uplink", points: 15 },
      { name: "Linebreaker Onslaught", points: 20 }
    ]
  },
  gladius_task_force: {
    name: "Gladius Task Force",
    enhancements: [
      { name: "Adept of the Codex", points: 20 },
      { name: "Artificer Armour", points: 15 },
      { name: "Fire Discipline", points: 30 },
      { name: "Laurels of Triumph", points: 20 },
      { name: "Standard of the Emperor Ascendant", points: 25 }
    ]
  },
  gravis_linebreaker_force: {
    name: "Gravis Linebreaker Force",
    enhancements: [
      { name: "Indefatigable Fortitude", points: 20 },
      { name: "Relentless Advance", points: 20 }
    ]
  },
  gravis_siege_force: {
    name: "Gravis Siege Force",
    enhancements: [
      { name: "Immovable Conquerors (Upgrade)", points: 15 },
      { name: "Narthecis Gauntlet", points: 20 }
    ]
  },
  ironclad_champions: {
    name: "Ironclad Champions",
    enhancements: [
      { name: "Artificer Sarcophagus (Upgrade)", points: 40 },
      { name: "Venerable Champion (Aura) (Upgrade)", points: 30 }
    ]
  },
  ironstorm_spearhead: {
    name: "Ironstorm Spearhead",
    chapter: "iron_hands",
    enhancements: [
      { name: "Gunnery Honours (Upgrade)", points: 15 },
      { name: "Redoubtable Machine Spirit (Upgrade)", points: 25 }
    ]
  },
  inner_circle_task_force: {
    name: "Inner Circle Task Force",
    chapter: "dark_angels",
    enhancements: [
      { name: "Champion of the Deathwing", points: 20 },
      { name: "Singular Will", points: 20 }
    ]
  },
  medusas_wrath: {
    name: "Medusa's Wrath",
    chapter: "iron_hands",
    enhancements: [
      { name: "Adept of the Omnissiah", points: 25 },
      { name: "Master of the Machine War", points: 25 },
      { name: "Target Augury Web", points: 30 },
      { name: "The Flesh is Weak", points: 15 }
    ]
  },
  fist_of_the_god_emperor: {
    name: "Fist of the God-Emperor",
    chapter: "black_templars",
    enhancements: [
      { name: "Oathbound Exemplar", points: 10 },
      { name: "Righteous Fervour (Upgrade)", points: 15 }
    ]
  },
  marshals_household: {
    name: "Marshal's Household",
    chapter: "black_templars",
    enhancements: [
      { name: "Fervent Exemplars (Upgrade)", points: 10 },
      { name: "Inheritors of Sigismund (Upgrade)", points: 15 }
    ]
  },
  phobos_shadow_force: {
    name: "Phobos Shadow Force",
    enhancements: [
      { name: "Execute and Redeploy", points: 25 },
      { name: "Venator Omni-auspex", points: 15 }
    ]
  },
  phobos_shock_force: {
    name: "Phobos Shock Force",
    enhancements: [
      { name: "Seal of Shrouding", points: 15 },
      { name: "Venator Omni-auspex", points: 15 }
    ]
  },
  shadowmark_talon: {
    name: "Shadowmark Talon",
    chapter: "raven_guard",
    enhancements: [
      { name: "Blackwing Shroud", points: 25 },
      { name: "Coronal Susurrant", points: 30 },
      { name: "Hunter's Instincts", points: 25 },
      { name: "Umbral Raptor", points: 15 }
    ]
  },
  spearpoint_task_force: {
    name: "Spearpoint Task Force",
    chapter: "white_scars",
    enhancements: [
      { name: "Chogorian Huntmaster (Upgrade)", points: 20 },
      { name: "Hunter's Eye", points: 25 },
      { name: "Spearpoint Paragon", points: 25 },
      { name: "Stormseers' Wisdom", points: 15 }
    ]
  },
  stormlance_task_force: {
    name: "Stormlance Task Force",
    enhancements: [
      { name: "Auspex Triangulation Shrines (Upgrade)", points: 10 },
      { name: "Supercharged Engines (Upgrade)", points: 10 }
    ]
  },
  tactical_brethren: {
    name: "Tactical Brethren",
    enhancements: [
      { name: "Laurels of Vigilance", points: 10 },
      { name: "Tactical Insight", points: 15 }
    ]
  },
  tacticus_attack_force: {
    name: "Tacticus Attack Force",
    enhancements: [
      { name: "Martial Paragon", points: 10 },
      { name: "Spearpoint War Leader", points: 15 }
    ]
  },
  tacticus_firestorm_force: {
    name: "Tacticus Firestorm Force",
    enhancements: [
      { name: "Cyber-familiar", points: 15 },
      { name: "Tempered in Battle (Aura)", points: 10 }
    ]
  },
  terminator_storm_force: {
    name: "Terminator Storm Force",
    enhancements: [
      { name: "Champion of the First Company", points: 20 },
      { name: "Corporeum Reliquary", points: 25 }
    ]
  },
  vow_sworn_crusaders: {
    name: "Vow-sworn Crusaders",
    chapter: "black_templars",
    enhancements: [
      { name: "Augury Servo-host", points: 20 },
      { name: "Consecrating Aura", points: 20 },
      { name: "Incendiary Animus", points: 25 },
      { name: "Zealous Vanguard", points: 25 }
    ]
  },
  wrath_of_the_rock: {
    name: "Wrath of the Rock",
    chapter: "dark_angels",
    enhancements: [
      { name: "Ancient Weapons", points: 20 },
      { name: "Deathwing Assault", points: 15 },
      { name: "Lord of the Ravenwing", points: 15 },
      { name: "Tempered in Battle (Aura)", points: 10 }
    ]
  }
};

const detachmentDescriptions = {
  assault_brethren: "An aggressive close-combat force built to seize objectives through assault units and battlefield momentum.",
  angelic_inheritors: "A Blood Angels force focused on elite warriors, heroic characters, and decisive assaults.",
  encarmine_speartip: "A rapid Blood Angels strike force themed around Sanguinary Guard and concentrated jump-pack attacks.",
  blade_of_ultramar: "An adaptable Ultramarines force that rewards coordinated units and flexible tactical responses.",
  ceramite_sentinels: "An Ultramarines defensive force focused on holding ground and protecting key positions.",
  champions_of_fenris: "A Space Wolves force centered on mighty champions and the elite warriors of the Wolf Guard.",
  deathwatch_support: "A Deathwatch-themed force that brings specialist xenos-hunting support to the wider Space Marine army.",
  darkflight_pursuit: "A Dark Angels fast-strike force built around the Ravenwing's speed, pursuit, and mobile firepower.",
  devastator_brethren: "A ranged fire-support force focused on heavy weapons and methodical destruction of priority targets.",
  forgefathers_seekers: "A Salamanders force themed around resilient warriors, flame weapons, and close-range firepower.",
  gauntlet_task_force: "A forward-operating force suited to reconnaissance, screening, and taking control of exposed objectives.",
  gladius_task_force: "A balanced all-round force with tactical flexibility for changing battlefield situations.",
  gravis_linebreaker_force: "A durable Gravis-armoured force designed to advance steadily and break through enemy lines.",
  gravis_siege_force: "A Gravis-heavy force focused on close-range firepower and grinding attacks against fortified positions.",
  ironclad_champions: "A force built around venerable champions and heavily armoured war engines.",
  ironstorm_spearhead: "An Iron Hands-style mechanised force focused on vehicles, durable fire support, and machine-led assaults.",
  inner_circle_task_force: "A Dark Angels force centered on the Inner Circle and elite Deathwing warriors.",
  medusas_wrath: "An Iron Hands force emphasizing relentless mechanised warfare and the strength of armoured units.",
  fist_of_the_god_emperor: "A Black Templars force that brings zealous close-combat pressure and objective-taking assaults.",
  marshals_household: "A Black Templars force led by its senior warriors, emphasizing disciplined crusader formations.",
  phobos_shadow_force: "A stealth-oriented force using Phobos units for infiltration, disruption, and precision strikes.",
  phobos_shock_force: "A Phobos force that turns forward deployment into sudden, close-range attacks.",
  shadowmark_talon: "A Raven Guard force built around stealth, misdirection, and strikes from unexpected angles.",
  spearpoint_task_force: "A White Scars force focused on speed, mounted warriors, and rapid attacks across the battlefield.",
  stormlance_task_force: "A fast-moving force that rewards mobile units and aggressive assaults.",
  tactical_brethren: "A flexible battleline force built around coordinated infantry and adaptable battlefield roles.",
  tacticus_attack_force: "A Tacticus-armoured force geared toward direct assaults and mobile mid-board fighting.",
  tacticus_firestorm_force: "A Tacticus force centered on close-range volleys and aggressive flame-heavy attacks.",
  terminator_storm_force: "An elite Terminator force built to deploy into the heart of the battle and dominate key positions.",
  vow_sworn_crusaders: "A Black Templars crusade force focused on unwavering vows, dedicated melee units, and relentless pressure.",
  wrath_of_the_rock: "A Dark Angels force combining the chapter's elite traditions, especially its Terminator-armoured warriors."
};

let currentRoster = [];
let selectedInstanceId = null;
let activeRoleFilter = "all";
let currentDetachment = "gladius_task_force";
let currentChapter = "codex";
let currentPointsLimit = 2000;

// DOM Elements
const catalogListEl = document.getElementById("catalogList");
const rosterListEl = document.getElementById("rosterList");
const configuratorWorkspaceEl = document.getElementById("configuratorWorkspace");
const searchBarEl = document.getElementById("searchBar");
const ptsTotalEl = document.getElementById("ptsTotal");
const unitTotalEl = document.getElementById("unitTotal");
const importFileEl = document.getElementById("importFile");
const detachmentSelectEl = document.getElementById("detachmentSelect");
const detachmentInfoTitleEl = document.getElementById("detachmentInfoTitle");
const detachmentInfoDescriptionEl = document.getElementById("detachmentInfoDescription");
const chapterSelectEl = document.getElementById("chapterSelect");
const customPointsLimitEl = document.getElementById("customPointsLimit");
const customLimitControlsEl = document.getElementById("customLimitControls");
const pointsLimitEl = document.getElementById("ptsLimit");
const relativeInfoContentEl = document.getElementById("relativeInfoContent");
const rosterRequirementsEl = document.getElementById("rosterRequirements");

function init() {
  applyChapterTheme(currentChapter);
  Object.entries(chapters).forEach(([id, name]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    chapterSelectEl.appendChild(option);
  });
  chapterSelectEl.value = currentChapter;

  populateDetachmentOptions();
  renderCatalog(getAvailableUnits());
  renderRoster();
  updatePointsDisplay();
  
  // Event Listeners
  searchBarEl.addEventListener("input", filterUnits);
  document.getElementById("btnExportJson").addEventListener("click", () => exportData('json'));
  document.getElementById("btnExportText").addEventListener("click", () => exportData('text'));
  document.getElementById("btnImportJson").addEventListener("click", () => importFileEl.click());
  document.getElementById("btnClearRoster").addEventListener("click", clearRoster);
  importFileEl.addEventListener("change", importData);
  detachmentSelectEl.addEventListener("change", changeDetachment);
  chapterSelectEl.addEventListener("change", changeChapter);
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.addEventListener("click", () => selectGameMode(button.dataset.limit));
  });
  document.getElementById("applyCustomLimit").addEventListener("click", applyCustomLimit);

  // Setup Filtering Tab click handlers
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      activeRoleFilter = this.getAttribute("data-role");
      filterUnits();
    });
  });
}

function renderCatalog(unitArray) {
  catalogListEl.innerHTML = "";
  unitArray.forEach(unit => {
    const div = document.createElement("div");
    div.className = "unit-card";
    div.addEventListener("click", () => addToRoster(unit));
    
    // Determine the raw label text first
    let rawLabel = unit.role;
    if (unit.isEpicHero) {
      rawLabel = "Epic Hero";
    } else if (unit.role === "HQ") {
      rawLabel = "Command";
    }

    // .toUpperCase() forces uniform, crisp uppercase styling across all tags
    const cleanLabel = rawLabel.toUpperCase();

    div.innerHTML = 
      '<h3>' + unit.name + '</h3>' +
      '<div class="meta">' +
        '<span>[' + cleanLabel + ']</span>' +
        '<strong>' + unit.points + ' pts</strong>' +
      '</div>';
    catalogListEl.appendChild(div);
  });
}

function filterUnits() {
  const term = searchBarEl.value.toLowerCase();
  
  const filtered = getAvailableUnits().filter(u => {
    // 1. Text Search Filter
    const matchesText = u.name.toLowerCase().includes(term);
    
    // 2. Role Category Filter
    let matchesRole = false;
    if (activeRoleFilter === "all") {
      matchesRole = true;
    } else if (activeRoleFilter === "Infantry") {
      matchesRole = ["Elite", "Infiltrator", "Fast Attack", "Infantry"].includes(u.role);
    } else if (activeRoleFilter === "EpicHero") {
      matchesRole = u.isEpicHero === true;
    } else if (activeRoleFilter.includes("/")) {
      // Handles bundled "Infiltrator/Elite/Fast Attack" category
      matchesRole = activeRoleFilter.split("/").includes(u.role);
    } else {
      matchesRole = (u.role === activeRoleFilter);
    }

    return matchesText && matchesRole;
  });

  renderCatalog(filtered);
}

function getAvailableUnits() {
  const allChapterUnitIds = Object.values(chapterExclusiveUnits).flat();
  return masterUnits.filter(unit => {
    if (currentChapter === "codex") {
      return !unit.chapter && !allChapterUnitIds.includes(unit.id);
    }
    const selectedChapterUnits = chapterExclusiveUnits[currentChapter] || [];
    return !unit.chapter && !allChapterUnitIds.includes(unit.id) ||
      unit.chapter === currentChapter ||
      selectedChapterUnits.includes(unit.id);
  });
}

function isDetachmentAvailableForChapter(detachmentId, chapterId) {
  const detachment = detachments[detachmentId];
  return Boolean(detachment && (!detachment.chapter || detachment.chapter === chapterId));
}

function getDefaultDetachmentForChapter(chapterId) {
  if (isDetachmentAvailableForChapter("gladius_task_force", chapterId)) {
    return "gladius_task_force";
  }
  const availableDetachment = Object.keys(detachments).find(id => isDetachmentAvailableForChapter(id, chapterId));
  return availableDetachment || "";
}

function populateDetachmentOptions() {
  detachmentSelectEl.innerHTML = "";
  const availableDetachments = Object.entries(detachments)
    .filter(([id]) => isDetachmentAvailableForChapter(id, currentChapter));
  availableDetachments.forEach(([id, detachment]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = detachment.name;
    detachmentSelectEl.appendChild(option);
  });
  if (!isDetachmentAvailableForChapter(currentDetachment, currentChapter)) {
    currentDetachment = availableDetachments.length > 0 ? availableDetachments[0][0] : "";
  }
  detachmentSelectEl.value = currentDetachment;
  updateDetachmentInfo();
}

function updateDetachmentInfo() {
  const detachment = detachments[currentDetachment];
  detachmentInfoTitleEl.textContent = detachment ? detachment.name : "No detachment available";
  detachmentInfoDescriptionEl.textContent = detachment
    ? detachmentDescriptions[currentDetachment]
    : "Select a chapter with an available detachment.";
}

function isUnitAvailableForChapter(unitId, chapterId) {
  const unit = masterUnits.find(option => option.id === unitId);
  if (!unit) return false;
  const exclusiveIds = Object.values(chapterExclusiveUnits).flat();
  if (chapterId === "codex") return !unit.chapter && !exclusiveIds.includes(unit.id);
  return (!unit.chapter && !exclusiveIds.includes(unit.id)) ||
    unit.chapter === chapterId ||
    (chapterExclusiveUnits[chapterId] || []).includes(unit.id);
}

function changeChapter(event) {
  const nextChapter = event.target.value;
  const removedUnits = currentRoster.filter(item => !isUnitAvailableForChapter(item.unitId, nextChapter));
  const nextDetachment = isDetachmentAvailableForChapter(currentDetachment, nextChapter)
    ? currentDetachment
    : getDefaultDetachmentForChapter(nextChapter);
  const detachmentWillChange = nextDetachment !== currentDetachment;
  const changeDetails = [];
  if (removedUnits.length > 0) {
    changeDetails.push("remove " + removedUnits.length + " chapter-specific unit(s) unavailable in " + chapters[nextChapter]);
  }
  if (detachmentWillChange && currentRoster.some(item => item.enhancement)) {
    changeDetails.push("remove assigned enhancements because the current detachment is not available");
  }
  if (changeDetails.length > 0 && !window.confirm(
    "Switching chapters will " + changeDetails.join(" and ") + ". Continue?"
  )) {
    chapterSelectEl.value = currentChapter;
    return;
  }

  currentChapter = nextChapter;
  applyChapterTheme(currentChapter);
  if (detachmentWillChange) {
    currentDetachment = nextDetachment;
    updateDetachmentInfo();
    currentRoster.forEach(item => {
      item.enhancement = null;
    });
  }
  currentRoster = currentRoster.filter(item => isUnitAvailableForChapter(item.unitId, currentChapter));
  populateDetachmentOptions();
  if (!currentRoster.some(item => item.instanceId === selectedInstanceId)) {
    selectedInstanceId = currentRoster.length > 0 ? currentRoster[0].instanceId : null;
    pointsLimitEl.textContent = currentPointsLimit;
  }
  filterUnits();
  renderRoster();
  renderConfigurator();
}

function selectGameMode(limit) {
  if (limit === "custom") {
    customLimitControlsEl.hidden = false;
    document.querySelectorAll(".game-mode-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.limit === "custom");
    });
    customPointsLimitEl.focus();
    return;
  }

  currentPointsLimit = Number(limit);
  syncGameModeControls();
  updatePointsDisplay();
}

function applyCustomLimit() {
  const customLimit = Number(customPointsLimitEl.value);
  if (!Number.isSafeInteger(customLimit) || customLimit < 1) {
    showInlineError("Enter a whole-number points limit greater than zero.");
    customPointsLimitEl.focus();
    return;
  }

  currentPointsLimit = customLimit;
  syncGameModeControls();
  updatePointsDisplay();
}

function syncGameModeControls() {
  const limitValue = String(currentPointsLimit);
  const isCustom = !["1000", "2000"].includes(limitValue);
  customLimitControlsEl.hidden = !isCustom;
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.classList.toggle("active", isCustom
      ? button.dataset.limit === "custom"
      : button.dataset.limit === limitValue);
  });
}

function updatePointsDisplay() {
  pointsLimitEl.textContent = currentPointsLimit;
  renderRoster();
}

function showInlineError(message) {
  let errorEl = document.getElementById("rosterStatusMonitor");
  if (!errorEl) {
    errorEl = document.createElement("div");
    errorEl.id = "rosterStatusMonitor";
    errorEl.style.backgroundColor = "rgba(239, 68, 68, 0.15)";
    errorEl.style.border = "1px solid var(--danger)";
    errorEl.style.color = "var(--danger)";
    errorEl.style.padding = "10px";
    errorEl.style.borderRadius = "4px";
    errorEl.style.marginBottom = "12px";
    errorEl.style.fontSize = "0.85rem";
    errorEl.style.fontWeight = "bold";
    errorEl.style.textAlign = "center";
    
    const statsBar = document.getElementById("statsBar");
    statsBar.parentNode.insertBefore(errorEl, statsBar);
  }
  
  errorEl.textContent = "⚠️ " + message;
  errorEl.style.display = "block";
  
  if (window.errorTimer) clearTimeout(window.errorTimer);
  window.errorTimer = setTimeout(() => {
    errorEl.style.display = "none";
  }, 4000);
}

function addToRoster(unit) {
  const existingError = document.getElementById("rosterStatusMonitor");
  if (existingError) existingError.style.display = "none";

  const defaultSquadSize = unit.squadSizes && unit.squadSizes[0];
  const unitPoints = defaultSquadSize
    ? getSquadSizePoints(defaultSquadSize, getDefaultSelections(unit))
    : unit.points;

  // Check 1: Selected game mode points limit
  let currentTotalPoints = currentRoster.reduce((sum, item) => sum + item.points + getEnhancementPoints(item), 0);
  if (currentTotalPoints + unitPoints > currentPointsLimit) {
    showInlineError("Adding " + unit.name + " (" + unitPoints + " pts) would exceed the " + currentPointsLimit + " points limit.");
    return;
  }

  // Check 2: Epic Hero Single Limit vs Standard Rule of 3 / 6
  let duplicateCount = currentRoster.filter(item => item.unitId === unit.id).length;
  
  if (unit.isEpicHero) {
    if (duplicateCount >= 1) {
      showInlineError("Command Error: You can only include a maximum of 1 instance of the Epic Hero " + unit.name + ".");
      return;
    }
  } else {
    let maxAllowed = (unit.role === "Battleline") ? 6 : 3;
    if (duplicateCount >= maxAllowed) {
      showInlineError("Deployment Error: You cannot field more than " + maxAllowed + " instances of " + unit.name + " in Matched Play.");
      return;
    }
  }

  // Process Add Unit
  const newInstance = {
    instanceId: "inst_" + Date.now() + Math.floor(Math.random() * 1000),
    unitId: unit.id,
    name: defaultSquadSize ? getSquadSizeName(unit, defaultSquadSize.models) : unit.name,
    role: unit.role,
    points: unitPoints,
    ...(defaultSquadSize ? { models: defaultSquadSize.models } : {}),
    canBeWarlord: unit.role === "HQ" || unit.canBeWarlord === true,
    canTakeEnhancement: unit.role === "HQ" && !unit.isEpicHero,
    chapter: unit.chapter || null,
    isWarlord: false
  };

  currentRoster.push(newInstance);
  selectedInstanceId = newInstance.instanceId;
  renderRoster();
  renderConfigurator();
}

function removeFromRoster(e, instanceId) {
  e.stopPropagation();
  currentRoster = currentRoster.filter(item => item.instanceId !== instanceId);
  if (selectedInstanceId === instanceId) {
    selectedInstanceId = null;
  }
  renderRoster();
  renderConfigurator();
}

function selectRosterItem(instanceId) {
  selectedInstanceId = instanceId;
  renderRoster();
  renderConfigurator();
}

function updateWarlord(instanceId, isWarlord) {
  const selectedItem = currentRoster.find(item => item.instanceId === instanceId);
  if (!selectedItem || !selectedItem.canBeWarlord) return;

  currentRoster.forEach(item => {
    if (item.instanceId === instanceId) {
      item.isWarlord = isWarlord;
    } else if (isWarlord) {
      item.isWarlord = false;
    }
  });
  renderRoster();
  renderRelativeInfo(selectedItem);
}

function changeDetachment(event) {
  const nextDetachment = event.target.value;
  if (!isDetachmentAvailableForChapter(nextDetachment, currentChapter)) {
    detachmentSelectEl.value = currentDetachment;
    return;
  }
  if (currentRoster.some(item => item.enhancement) &&
      !window.confirm("Changing detachments will remove assigned enhancements. Continue?")) {
    detachmentSelectEl.value = currentDetachment;
    return;
  }

  currentDetachment = nextDetachment;
  updateDetachmentInfo();
  currentRoster.forEach(item => {
    item.enhancement = null;
  });
  renderRoster();
  renderConfigurator();
}

function updateEnhancement(instanceId, enhancementName) {
  const item = currentRoster.find(rosterItem => rosterItem.instanceId === instanceId);
  if (!item || !item.canTakeEnhancement) return;

  const enhancement = detachments[currentDetachment].enhancements.find(option => option.name === enhancementName);
  if (!enhancementName) {
    item.enhancement = null;
  } else if (!enhancement) {
    showInlineError("That enhancement is not available for the selected detachment.");
    renderConfigurator();
    return;
  } else if (currentRoster.filter(rosterItem => rosterItem.enhancement).length >= 3 && !item.enhancement) {
    showInlineError("You can include a maximum of 3 enhancements in your army.");
    renderConfigurator();
    return;
  } else if (currentRoster.some(rosterItem => rosterItem !== item && rosterItem.enhancement && rosterItem.enhancement.name === enhancement.name)) {
    showInlineError("You cannot include the same enhancement more than once.");
    renderConfigurator();
    return;
  } else if (currentRoster.reduce((sum, rosterItem) => sum + rosterItem.points + getEnhancementPoints(rosterItem), 0) +
      enhancement.points - getEnhancementPoints(item) > currentPointsLimit) {
    showInlineError("Adding " + enhancement.name + " would exceed the " + currentPointsLimit + " points deployment limit.");
    renderConfigurator();
    return;
  } else {
    item.enhancement = { ...enhancement };
  }

  renderRoster();
  renderConfigurator();
}

function getEnhancementPoints(item) {
  return item.enhancement ? item.enhancement.points : 0;
}

function getSquadSizePoints(squadSize, selections = {}) {
  for (const [selectionKey, pointOptions] of Object.entries(squadSize.pointsBySelection || {})) {
    const selectedOption = pointOptions[selections[selectionKey]];
    if (selectedOption !== undefined) return selectedOption;
  }
  return squadSize.points;
}

function getDefaultSelections(unit) {
  return Object.fromEntries(
    Object.entries(unit.wargear || {}).map(([key, options]) => [key, options[0]])
  );
}

function getSquadSizeName(unit, models) {
  const baseName = unit.name.replace(/\s\(\d+\s+models?\)$/, "");
  const modelLabel = models === 1 ? "model" : "models";
  return baseName + " (" + models + " " + modelLabel + ")";
}

function updateSquadSize(instanceId, modelCount) {
  const item = currentRoster.find(rosterItem => rosterItem.instanceId === instanceId);
  const unit = item && masterUnits.find(unitOption => unitOption.id === item.unitId);
  const squadSize = unit && unit.squadSizes &&
    unit.squadSizes.find(option => option.models === Number(modelCount));
  if (!item || !unit || !squadSize) return;

  const nextPoints = getSquadSizePoints(squadSize, getDefaultSelections(unit));
  const currentTotal = currentRoster.reduce(
    (sum, rosterItem) => sum + rosterItem.points + getEnhancementPoints(rosterItem),
    0
  );
  if (currentTotal - item.points + nextPoints > currentPointsLimit) {
    showInlineError("Changing " + unit.name + " to " + squadSize.models + " models would exceed the " +
      currentPointsLimit + " points limit.");
    renderConfigurator();
    return;
  }

  item.models = squadSize.models;
  item.points = nextPoints;
  item.name = getSquadSizeName(unit, squadSize.models);
  renderRoster();
  renderConfigurator();
}

function renderRoster() {
  rosterListEl.innerHTML = "";
  let totalPts = 0;

  if (currentRoster.length === 0) {
    rosterListEl.innerHTML = '<p class="placeholder-text">Click units on the left panel to construct your Strike Force.</p>';
  } else {
    currentRoster.forEach(item => {
      const enhancementPoints = getEnhancementPoints(item);
      const itemTotal = item.points + enhancementPoints;
      totalPts += itemTotal;
      const isSelected = item.instanceId === selectedInstanceId;
      const div = document.createElement("div");
      div.className = "roster-item" + (isSelected ? " selected" : "");
      div.addEventListener("click", () => selectRosterItem(item.instanceId));

      div.innerHTML = 
        '<h3>' + item.name + '</h3>' +
        (item.isWarlord ? '<span class="warlord-badge">WARLORD</span>' : '') +
        (item.enhancement ? '<div class="enhancement-summary">' + item.enhancement.name + ' (+' + enhancementPoints + ' pts)</div>' : '') +
        '<div class="actions">' +
          '<span style="font-size: 0.8rem; font-weight:bold; align-self:center; color: var(--accent); margin-right:auto;">' + itemTotal + ' pts</span>' +
          (item.canBeWarlord ? '<label class="warlord-toggle"><input type="checkbox" class="warlord-checkbox"' + (item.isWarlord ? ' checked' : '') + '> Warlord</label>' : '') +
          '<button class="btn-danger remove-btn">Delete</button>' +
        '</div>';
      
      const warlordCheckbox = div.querySelector(".warlord-checkbox");
      if (warlordCheckbox) {
        warlordCheckbox.addEventListener("click", e => e.stopPropagation());
        warlordCheckbox.addEventListener("change", e => updateWarlord(item.instanceId, e.target.checked));
      }
      div.querySelector(".remove-btn").addEventListener("click", (e) => removeFromRoster(e, item.instanceId));
      rosterListEl.appendChild(div);
    });
  }

  ptsTotalEl.textContent = totalPts;
  ptsTotalEl.className = totalPts > currentPointsLimit ? "points-alert" : "points-good";
  unitTotalEl.textContent = currentRoster.length;
  updateRosterRequirements(totalPts);
}

function validateRoster(totalPoints = currentRoster.reduce(
  (sum, item) => sum + item.points + getEnhancementPoints(item),
  0
)) {
  const errors = [];
  const warlordCount = currentRoster.filter(item => item.isWarlord && item.canBeWarlord).length;
  if (warlordCount !== 1) {
    errors.push(warlordCount === 0
      ? "Select an eligible unit as your Warlord."
      : "A roster must have exactly one Warlord.");
  }
  if (totalPoints > currentPointsLimit) {
    errors.push("Army total exceeds the " + currentPointsLimit + " point limit.");
  }
  return errors;
}

function updateRosterRequirements(totalPoints) {
  const errors = validateRoster(totalPoints);
  rosterRequirementsEl.classList.toggle("has-errors", errors.length > 0);
  rosterRequirementsEl.innerHTML = "";
  if (errors.length === 0) {
    rosterRequirementsEl.textContent = "Requirements met: one Warlord and within the points limit.";
    return;
  }

  const heading = document.createElement("strong");
  heading.textContent = "Requirements to export:";
  const list = document.createElement("ul");
  errors.forEach(error => {
    const item = document.createElement("li");
    item.textContent = error;
    list.appendChild(item);
  });
  rosterRequirementsEl.append(heading, list);
}

function addInfoText(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  parent.appendChild(element);
}

function renderRelativeInfo(item) {
  relativeInfoContentEl.innerHTML = "";
  if (!item) {
    addInfoText(relativeInfoContentEl, "p", "Select a unit to see its role and available rules notes.", "placeholder-text");
    return;
  }

  addInfoText(relativeInfoContentEl, "h3", item.name);
  addInfoText(relativeInfoContentEl, "p", "Role: " + item.role + " | Cost: " + item.points + " pts.");
  const unitDescription = unitInfo[item.unitId];
  addInfoText(
    relativeInfoContentEl,
    "p",
    unitDescription || "This unit's special rules are not reproduced here. Check its current datasheet for abilities and exact profiles."
  );

  if (item.enhancement) {
    addInfoText(relativeInfoContentEl, "h3", "Enhancement: " + item.enhancement.name);
    addInfoText(
      relativeInfoContentEl,
      "p",
      item.enhancement.points + " pts in " + detachments[currentDetachment].name +
        ". This is a character upgrade; consult the current detachment rules for its exact ability."
    );
  }
}

function renderConfigurator() {
  configuratorWorkspaceEl.innerHTML = "";

  const activeItem = currentRoster.find(i => i.instanceId === selectedInstanceId);
  if (!activeItem) {
    configuratorWorkspaceEl.innerHTML = '<p class="placeholder-text">Select an active unit to configure its squad size or assign an enhancement.</p>';
    renderRelativeInfo(null);
    return;
  }

  const title = document.createElement("h3");
  title.style.fontSize = "1rem";
  title.style.marginBottom = "15px";
  title.style.color = "var(--text)";
  title.innerText = "Modifying: " + activeItem.name;
  configuratorWorkspaceEl.appendChild(title);
  renderRelativeInfo(activeItem);

  const unit = masterUnits.find(unitOption => unitOption.id === activeItem.unitId);
  if (unit && unit.squadSizes && unit.squadSizes.length > 1) {
    const squadSizeDiv = document.createElement("div");
    squadSizeDiv.className = "config-option";

    const squadSizeLabel = document.createElement("label");
    squadSizeLabel.innerText = "SQUAD SIZE";

    const squadSizeSelect = document.createElement("select");
    squadSizeSelect.setAttribute("aria-label", "Squad size");
    unit.squadSizes.forEach(squadSize => {
      const points = getSquadSizePoints(squadSize, getDefaultSelections(unit));
      const option = new Option(
        squadSize.models + " models (" + points + " pts)",
        String(squadSize.models)
      );
      option.selected = activeItem.models === squadSize.models;
      squadSizeSelect.add(option);
    });
    squadSizeSelect.addEventListener("change", event => {
      updateSquadSize(activeItem.instanceId, event.target.value);
    });

    squadSizeDiv.appendChild(squadSizeLabel);
    squadSizeDiv.appendChild(squadSizeSelect);
    configuratorWorkspaceEl.appendChild(squadSizeDiv);
  }

  if (activeItem.canTakeEnhancement) {
    const enhancementDiv = document.createElement("div");
    enhancementDiv.className = "config-option";

    const enhancementLabel = document.createElement("label");
    enhancementLabel.innerText = "ENHANCEMENT (" + detachments[currentDetachment].name.toUpperCase() + ")";

    const enhancementSelect = document.createElement("select");
    enhancementSelect.setAttribute("aria-label", "Enhancement");
    enhancementSelect.add(new Option("No enhancement", ""));
    detachments[currentDetachment].enhancements.forEach(enhancement => {
      const option = new Option(enhancement.name + " (+" + enhancement.points + " pts)", enhancement.name);
      option.selected = activeItem.enhancement && activeItem.enhancement.name === enhancement.name;
      enhancementSelect.add(option);
    });
    enhancementSelect.addEventListener("change", event => updateEnhancement(activeItem.instanceId, event.target.value));

    enhancementDiv.appendChild(enhancementLabel);
    enhancementDiv.appendChild(enhancementSelect);
    configuratorWorkspaceEl.appendChild(enhancementDiv);
  }

}

function clearRoster() {
  currentRoster = [];
  selectedInstanceId = null;
  renderRoster();
  renderConfigurator();
}

function exportData(type) {
  if (currentRoster.length === 0) return alert("Roster is completely empty.");
  const validationErrors = validateRoster();
  if (validationErrors.length > 0) {
    alert("Cannot export this roster:\n\n" + validationErrors.join("\n"));
    return;
  }

  if (type === 'json') {
    const exportRoster = {
      detachment: currentDetachment,
      chapter: currentChapter,
      pointsLimit: currentPointsLimit,
      units: currentRoster.map(unit => {
        const exportedUnit = { ...unit };
        delete exportedUnit.selections;
        delete exportedUnit.wargearOptions;
        return exportedUnit;
      })
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportRoster, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "space_marine_roster.json");
    dlAnchorElem.click();
  } else {
    let textOutput = "=== ADEPTUS ASTARTES ROSTER ===\n";
    textOutput += "Detachment: " + detachments[currentDetachment].name + "\n\n";
    textOutput += "Chapter: " + chapters[currentChapter] + "\n";
    textOutput += "Points limit: " + currentPointsLimit + "\n\n";
    let total = 0;
    currentRoster.forEach((u, i) => {
      const enhancementPoints = getEnhancementPoints(u);
      total += u.points + enhancementPoints;
      textOutput += (i+1) + ". " + u.name + (u.isWarlord ? " (Warlord)" : "") + " [" + (u.points + enhancementPoints) + " pts]\n";
      if (u.enhancement) {
        textOutput += "   - Enhancement: " + u.enhancement.name + " (" + enhancementPoints + " pts)\n";
      }
      textOutput += "\n";
    });
    textOutput += "Total Army Cost: " + total + " points\n";

    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(textOutput);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "space_marine_roster.txt");
    dlAnchorElem.click();
  }
}

function importData(event) {
  const file = event.target.files;
  if (!file || file.length === 0) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      const importedRoster = Array.isArray(parsed) ? parsed : parsed.units;
      if (Array.isArray(importedRoster)) {
        currentChapter = Object.prototype.hasOwnProperty.call(chapters, parsed.chapter) ? parsed.chapter : currentChapter;
        chapterSelectEl.value = currentChapter;
        applyChapterTheme(currentChapter);
        currentDetachment = Object.prototype.hasOwnProperty.call(detachments, parsed.detachment) &&
          isDetachmentAvailableForChapter(parsed.detachment, currentChapter)
          ? parsed.detachment
          : isDetachmentAvailableForChapter(currentDetachment, currentChapter)
            ? currentDetachment
            : getDefaultDetachmentForChapter(currentChapter);
        populateDetachmentOptions();
        if (!Array.isArray(parsed) && Number.isSafeInteger(parsed.pointsLimit) && parsed.pointsLimit > 0) {
          currentPointsLimit = parsed.pointsLimit;
          customPointsLimitEl.value = String(parsed.pointsLimit);
          syncGameModeControls();
          updatePointsDisplay();
        }
        let enhancementCount = 0;
        const assignedEnhancements = new Set();
        currentRoster = importedRoster.map(item => {
          const importedUnit = { ...item };
          delete importedUnit.selections;
          delete importedUnit.wargearOptions;
          const unit = masterUnits.find(unitOption => unitOption.id === item.unitId);
          const canBeWarlord = unit ? unit.role === "HQ" || unit.canBeWarlord === true : false;
          const canTakeEnhancement = Boolean(unit && unit.role === "HQ" && !unit.isEpicHero);
          const namedModelCount = typeof item.name === "string"
            ? Number((item.name.match(/\((\d+)\s+models?\)$/) || [])[1])
            : NaN;
          const requestedModelCount = Number.isSafeInteger(item.models) ? item.models : namedModelCount;
          const squadSize = unit && unit.squadSizes &&
            (unit.squadSizes.find(option => option.models === requestedModelCount) ||
              unit.squadSizes.find(option => option.points === item.points));
          let enhancement = canTakeEnhancement && item.enhancement
            ? detachments[currentDetachment].enhancements.find(option => option.name === item.enhancement.name) || null
            : null;
          if (enhancement && (enhancementCount >= 3 || assignedEnhancements.has(enhancement.name))) {
            enhancement = null;
          }
          if (enhancement) {
            enhancementCount++;
            assignedEnhancements.add(enhancement.name);
          }
          return {
            ...importedUnit,
            ...(squadSize ? {
              name: getSquadSizeName(unit, squadSize.models),
              models: squadSize.models,
              points: getSquadSizePoints(squadSize, getDefaultSelections(unit))
            } : {}),
            canBeWarlord,
            canTakeEnhancement,
            chapter: unit && unit.chapter || null,
            enhancement,
            isWarlord: canBeWarlord && item.isWarlord === true
          };
        });
        currentRoster = currentRoster.filter(item => isUnitAvailableForChapter(item.unitId, currentChapter));
        const firstWarlord = currentRoster.findIndex(item => item.isWarlord);
        currentRoster.forEach((item, index) => {
          item.isWarlord = item.canBeWarlord && index === firstWarlord;
        });
        selectedInstanceId = currentRoster.length > 0 ? currentRoster[0].instanceId : null;
        renderRoster();
        renderConfigurator();
      } else {
        alert("Malformed roster structure.");
      }
    } catch (err) {
      alert("Failed to parse JSON file template.");
    }
  };
  reader.readAsText(file[0]);
}

document.addEventListener("DOMContentLoaded", init);
