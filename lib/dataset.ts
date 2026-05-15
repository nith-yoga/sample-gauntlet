export interface TrackData {
  id: number;
  tier: number;
  sample: {
    videoId: string;
    startSeconds: number;
    originalArtist: string;
    originalTrack: string;
  };
  flip: {
    artist: string;
    track: string;
    videoId: string;
    startSeconds: number;
    alternates: string[];
  };
}

const tier1Data: TrackData[] = [
  { id: 101, tier: 1, sample: { videoId: "kLjwcbXUnIk", startSeconds: 140, originalArtist: "Labi Siffre", originalTrack: "I Got The..." }, flip: { artist: "Eminem", track: "My Name Is", videoId: "LDj8kkVwisY", startSeconds: 10, alternates: ["Slim Shady"] } },
  { id: 102, tier: 1, sample: { videoId: "IEibygqqLZc", startSeconds: 11, originalArtist: "George Duke", originalTrack: "I Love You More" }, flip: { artist: "Daft Punk", track: "Digital Love", videoId: "FxzBvqY5PP0", startSeconds: 0, alternates: ["DP"] } },
  { id: 103, tier: 2, sample: { videoId: "A7vFHT9HARY", startSeconds: 0, originalArtist: "Boom Clap Bachelors", originalTrack: "Tiden Flyver" }, flip: { artist: "Kendrick Lamar", track: "Bitch, Don't Kill My Vibe", videoId: "GF8aaTu2kg0", startSeconds: 0, alternates: ["Kendrick"] } },
  { id: 104, tier: 1, sample: { videoId: "7pPb5fmumNo", startSeconds: 0, originalArtist: "Tomoko Aran", originalTrack: "Midnight Pretenders" }, flip: { artist: "The Weeknd", track: "Out of Time", videoId: "2fDzCWNS3ig", startSeconds: 6, alternates: ["Weeknd"] } },
  { id: 105, tier: 1, sample: { videoId: "9gbQVj4MR3M", startSeconds: 0, originalArtist: "Michael McDonald", originalTrack: "I Keep Forgettin'" }, flip: { artist: "Warren G", track: "Regulate", videoId: "1plPyJdXKIY", startSeconds: 20, alternates: ["Nate Dogg"] } },
  { id: 106, tier: 1, sample: { videoId: "K8OZux6hp1Q", startSeconds: 0, originalArtist: "Leon Haywood", originalTrack: "I Want'a Do Something Freaky to You" }, flip: { artist: "Dr. Dre", track: "Nuthin' but a 'G' Thang", videoId: "8GliyDgAGQI", startSeconds: 46, alternates: ["Snoop Dogg"] } },
  { id: 107, tier: 1, sample: { videoId: "zsmcYaie77o", startSeconds: 115, originalArtist: "Tarika Blue", originalTrack: "Dreamflower" }, flip: { artist: "Erykah Badu", track: "Didn't Cha Know", videoId: "Np21rH7Ldto", startSeconds: 5, alternates: ["Didn't Ya Know"] } },
  { id: 108, tier: 1, sample: { videoId: "XO6JE7JiwUQ", startSeconds: 0, originalArtist: "Joe Simon", originalTrack: "Before the Night is Over" }, flip: { artist: "OutKast", track: "So Fresh, So Clean", videoId: "-JfEJq56IwI", startSeconds: 11, alternates: ["Outkast"] } },
  { id: 109, tier: 1, sample: { videoId: "u9D7K1gZNCw", startSeconds: 0, originalArtist: "Osmar Milito e Quarteto Forma", originalTrack: "America Latina" }, flip: { artist: "Madvillain", track: "Raid", videoId: "weWTuvdL-LQ", startSeconds: 11, alternates: ["MF DOOM - Raid", "MF DOOM Madlib Raid"] } },
  { id: 110, tier: 1, sample: { videoId: "T91EMOEAEmY", startSeconds: 160, originalArtist: "Monk Higgins", originalTrack: "MacArthur Park" }, flip: { artist: "Kendrick Lamar", track: "tv off", videoId: "U8F5G5wR1mk", startSeconds: 9, alternates: [] } },
  { id: 111, tier: 1, sample: { videoId: "FSDT1eVxfIY", startSeconds: 16, originalArtist: "Sister Sledge", originalTrack: "IL Macquillage Lady" }, flip: { artist: "Daft Punk", track: "Aerodynamic", videoId: "L93-7vRfxNs", startSeconds: 16, alternates: ["DP"] } },
  { id: 112, tier: 1, sample: { videoId: "WRWtvbyprgo", startSeconds: 0, originalArtist: "The Isley Brothers", originalTrack: "Footsteps in the Dark" }, flip: { artist: "Ice Cube", track: "It Was a Good Day", videoId: "h4UqMyldS7Q", startSeconds: 9, alternates: ["Ice Cube - Good Day"] } },
  { id: 113, tier: 1, sample: { videoId: "DgUN_7si84M", startSeconds: 4, originalArtist: "Jeremy Storch", originalTrack: "I Feel A New Shadow" }, flip: { artist: "DJ Shadow", track: "Building Steam With A Grain of Salt", videoId: "HORLJvUMs08", startSeconds: 1, alternates: [] } },
  { id: 114, tier: 1, sample: { videoId: "5bbv8PYQD-0", startSeconds: 0, originalArtist: "Otis Redding", originalTrack: "It's Too Late" }, flip: { artist: "Kanye West", track: "Gone", videoId: "QciVWTaDkbc", startSeconds: 0, alternates: ["Ye"] } },
  { id: 115, tier: 1, sample: { videoId: "NEscJWErZ0I", startSeconds: 47, originalArtist: "Ohio Players", originalTrack: "Funky Worm" }, flip: { artist: "N.W.A", track: "Dopeman", videoId: "umUHR1JlT_c", startSeconds: 22, alternates: ["NWA"] } }
];

const tier2Data: TrackData[] = [
  { id: 201, tier: 2, sample: { videoId: "t7SvtikTkrM", startSeconds: 0, originalArtist: "The Clash", originalTrack: "Straight to Hell" }, flip: { artist: "M.I.A.", track: "Paper Planes", videoId: "ewRjZoRtu0Y", startSeconds: 0, alternates: ["MIA"] } },
  { id: 202, tier: 2, sample: { videoId: "7OvW8Z7kiws", startSeconds: 61, originalArtist: "King Crimson", originalTrack: "21st Century Schizoid Man" }, flip: { artist: "Kanye West", track: "Power", videoId: "SUtf9Ajlno4", startSeconds: 34, alternates: ["Ye"] } },
  { id: 203, tier: 2, sample: { videoId: "5WAHwYg31Rk", startSeconds: 0, originalArtist: "Tommy Butler", originalTrack: "Prison Song" }, flip: { artist: "Future", track: "Mask Off", videoId: "xvZqHgFz51I", startSeconds: 96, alternates: [] } },
  { id: 204, tier: 2, sample: { videoId: "bkr_EG7X_sA", startSeconds: 0, originalArtist: "Kose Noriko", originalTrack: "I Miss You" }, flip: { artist: "Nujabes", track: "Reflection Eternal", videoId: "2wK27xW4OFI", startSeconds: 0, alternates: [] } },
  { id: 205, tier: 2, sample: { videoId: "KYx2uZRlJCk", startSeconds: 10, originalArtist: "Timmy Thomas", originalTrack: "Why Can't We Live Together" }, flip: { artist: "Drake", track: "Hotline Bling", videoId: "uxpDa-c-4Mc", startSeconds: 20, alternates: ["Drizzy"] } },
  { id: 206, tier: 2, sample: { videoId: "LEgxuE7WD6U", startSeconds: 2, originalArtist: "Dionne Warwick", originalTrack: "Don't Make Me Over" }, flip: { artist: "J. Cole", track: "No Role Modelz", videoId: "rw2sXAIi-kQ", startSeconds: 0, alternates: ["Cole"] } },
  { id: 207, tier: 2, sample: { videoId: "nMVAEBaIeZM", startSeconds: 18, originalArtist: "Rich Kidz", originalTrack: "Bend Over" }, flip: { artist: "Playboi Carti", track: "LIKE WEEZY", videoId: "C217vygclrk", startSeconds: 0, alternates: [] } },
  { id: 208, tier: 2, sample: { videoId: "NX61T6FgxYc", startSeconds: 1, originalArtist: "Lee Fields", originalTrack: "All I Need" }, flip: { artist: "Travis Scott", track: "Antidote", videoId: "KnZ8h3MRuYg", startSeconds: 16, alternates: ["Travi$ Scott"] } },
  { id: 209, tier: 2, sample: { videoId: "4WpWgRQVRbI", startSeconds: 95, originalArtist: "Tycho", originalTrack: "Spectre" }, flip: { artist: "destroy lonely", track: "brazy girls", videoId: "BdvtO1mXyEg", startSeconds: 0, alternates: [] } },
  { id: 210, tier: 2, sample: { videoId: "ef4kuOH5JDo", startSeconds: 253, originalArtist: "The-Dream", originalTrack: "Mr Yeah" }, flip: { artist: "A$AP Rocky", track: "Fashion Killa", videoId: "F6VfsJ7LAlE", startSeconds: 30, alternates: ["ASAP Rocky"] } },
  { id: 211, tier: 2, sample: { videoId: "TgsTmIxAtxY", startSeconds: 0, originalArtist: "Chromatics", originalTrack: "Cherry" }, flip: { artist: "Schoolboy Q", track: "Man of the Year", videoId: "rEMsjeq43_U", startSeconds: 3, alternates: [] } },
  { id: 212, tier: 2, sample: { videoId: "gp9uZjPaB4w", startSeconds: 0, originalArtist: "The Charmels", originalTrack: "As Long As I've Got You" }, flip: { artist: "Wu-Tang Clan", track: "C.R.E.A.M.", videoId: "PBwAxmrE194", startSeconds: 23, alternates: ["Wu Tang Clan", "Wu-Tang"] } },
  { id: 213, tier: 2, sample: { videoId: "FnRuMrrvhRU", startSeconds: 139, originalArtist: "Nai Barghouti", originalTrack: "Ghandara"}, flip: { artist: "Skrillex", track: "Xena", videoId: "T7SvN0dkQps", startSeconds: 19, alternates: []} },
  { id: 214, tier: 2, sample: { videoId: "3QKSciwzAqs", startSeconds: 0, originalArtist: "Barry White", originalTrack: "It's Only Love Doing Its Thing"}, flip: { artist: "50 Cent & Nate Dogg", track: "21 Questions", videoId: "cDMhlvbOFaM", startSeconds: 31, alternates: []} },
  { id: 215, tier: 2, sample: { videoId: "7D50TRpG94g", startSeconds: 93, originalArtist: "The Collective", originalTrack: "Ease Yourself"}, flip: { artist: "Slipknot", track: "Eyeless", videoId: "WLubS6QOMsQ", startSeconds: 2, alternates: []} },
  { id: 216, tier: 2, sample: { videoId: "BhB6Lb7_kN8", startSeconds: 4, originalArtist: "I Monster", originalTrack: "Daydream in Blue"}, flip: { artist: "Lupe Fiasco", track: "Daydreamin'", videoId: "7XOAStfv-v0", startSeconds: 0, alternates: []} }
];

const tier3Data: TrackData[] = [
  { id: 301, tier: 3, sample: { videoId: "CjO7qdADCyQ", startSeconds: 203, originalArtist: "Otis Redding", originalTrack: "Try a Little Tenderness" }, flip: { artist: "Jay-Z & Kanye West", track: "Otis", videoId: "BoEKWtgJQAU", startSeconds: 0, alternates: ["The Throne", "Jay Z", "Ye"] } },
  { id: 302, tier: 3, sample: { videoId: "V8C5lloBfV8", startSeconds: 0, originalArtist: "Nina Simone", originalTrack: "Four Women" }, flip: { artist: "Jay-Z", track: "The Story of O.J.", videoId: "RM7lw0Ovzq0", startSeconds: 15, alternates: ["Jay Z", "Story of OJ"] } },
  { id: 303, tier: 3, sample: { videoId: "6xN3KOY2kbg", startSeconds: 0, originalArtist: "Quincy Jones", originalTrack: "Summer in the City" }, flip: { artist: "The Pharcyde", track: "Passin' Me By", videoId: "a-mAK3uB2_0", startSeconds: 3, alternates: ["Pharcyde"] } },
  { id: 304, tier: 3, sample: { videoId: "Pf_si60K9nM", startSeconds: 1, originalArtist: "The Isley Brothers", originalTrack: "Between the Sheets" }, flip: { artist: "Notorious B.I.G.", track: "Big Poppa", videoId: "phaJXp_zMYM", startSeconds: 7, alternates: ["Biggie Smalls", "Biggie"] } },
  { id: 305, tier: 3, sample: { videoId: "F7pqO7YKBt0", startSeconds: 0, originalArtist: "Wendy Rene", originalTrack: "After Laughter" }, flip: { artist: "Wu-Tang Clan", track: "Tearz", videoId: "RrsJj_eUJS4", startSeconds: 38, alternates: ["Wu Tang Clan", "Wu-Tang"] } },
  { id: 306, tier: 3, sample: { videoId: "Qh6Jq8Sai3M", startSeconds: 10, originalArtist: "David Axelrod", originalTrack: "The Edge" }, flip: { artist: "Dr. Dre", track: "The Next Episode", videoId: "QZXc39hT8t4", startSeconds: 0, alternates: ["Snoop Dogg", "Dre"] } },
  { id: 307, tier: 3, sample: { videoId: "wk_dPAs2hzo", startSeconds: 0, originalArtist: "Galt MacDermot", originalTrack: "Space" }, flip: { artist: "Busta Rhymes", track: "Woo Hah!! Got You All in Check", videoId: "EQzvQO2LcA4", startSeconds: 38, alternates: ["Busta Rhymes - Woo Hah"] } },
  { id: 308, tier: 3, sample: { videoId: "4q6YtQ-N9hA", startSeconds: 156, originalArtist: "The Sylvers", originalTrack: "Cry of a Dreamer" }, flip: { artist: "Freddie Gibbs & Madlib", track: "Palmolive", videoId: "NSn_r2w-idg", startSeconds: 1, alternates: ["Freddie Gibbs"] } },
  { id: 309, tier: 3, sample: { videoId: "kbJeiWYFrio", startSeconds: 0, originalArtist: "Portishead", originalTrack: "Machine Gun" }, flip: { artist: "The Weeknd", track: "Belong to the World", videoId: "lYO77zNhWl4", startSeconds: 155, alternates: ["Weeknd"] } },
  { id: 310, tier: 3, sample: { videoId: "A1vlcfMvTlA", startSeconds: 44, originalArtist: "Vsichni Praznj", originalTrack: "Siluetes 61" }, flip: { artist: "Tyler, the Creator", track: "NEW MAGIC WAND", videoId: "mdCyzJT59nw", startSeconds: 2, alternates: ["Tyler the Creator"] } },
  { id: 311, tier: 3, sample: { videoId: "Dxetkhf1a-s", startSeconds: 99, originalArtist: "Harry Gregson-Williams & Norihiko Hibino", originalTrack: "Opening Infiltration" }, flip: { artist: "Burial", track: "Archangel", videoId: "8k_f2QK77ew", startSeconds: 34, alternates: [] } },
  { id: 312, tier: 3, sample: { videoId: "K4gcQj_NZ30", startSeconds: 157, originalArtist: "Mya", originalTrack: "My Love is Like...Wo" }, flip: { artist: "Rustie", track: "All Nite", videoId: "bHyu7N2hBGQ", startSeconds: 1, alternates: ["Rustie - All Night"] } },
  { id: 313, tier: 3, sample: { videoId: "ss7JaHFeB6s", startSeconds: 69, originalArtist: "OPA", originalTrack: "Pieces: Tombo/La Escuela/Tombo/The Last Goodbye" }, flip: { artist: "Flying Lotus, Earl Sweatshirt, and Captain Murphy", track: "Between Friends", videoId: "1FS35SshVxQ", startSeconds: 0, alternates: ["Flying Lotus", "Captain Murphy"]} }
];

const tier4Data: TrackData[] = [
  { id: 401, tier: 4, sample: { videoId: "1aiPRkiHyws", startSeconds: 110, originalArtist: "Experience", originalTrack: "Kryptonite Party" }, flip: { artist: "Aesop Rock", track: "ZZZ Top", videoId: "KZvE7dQ-C5o", startSeconds: 19, alternates: [] } },
  { id: 402, tier: 4, sample: { videoId: "MW2K-u78eeY", startSeconds: 2, originalArtist: "No Es Un Sueno", originalTrack: "Hijo de Ramon" }, flip: { artist: "Lucki", track: "Bby Pluto", videoId: "m8wyNHFuOQM", startSeconds: 0, alternates: ["Baby Pluto"] } },
  { id: 403, tier: 4, sample: { videoId: "6zW1YlEp4zw", startSeconds: 16, originalArtist: "Aliens (1986)", originalTrack: "Ripley and the loader" }, flip: { artist: "Nine Inch Nails", track: "Reptile", videoId: "pJwt9qJb6Sw", startSeconds: 58, alternates: ["NIN"] } },
  { id: 404, tier: 4, sample: { videoId: "e01bD1ggoeE", startSeconds: 0, originalArtist: "Andrew Hale", originalTrack: "Main Theme (L.A. Noire)" }, flip: { artist: "Joey Bada$$", track: "Fromdatomb$", videoId: "ZU4tsCk2szU", startSeconds: 16, alternates: ["Joey Badass"] } },
  { id: 405, tier: 4, sample: { videoId: "8zPRXKXFbro", startSeconds: 0, originalArtist: "Arthur Verocai", originalTrack: "Na Boca do Sol" }, flip: { artist: "MF DOOM", track: "Orris Root Powder", videoId: "1E5I5-zFQHI", startSeconds: 2, alternates: ["Doom", "Metal Face"] } },
  { id: 406, tier: 4, sample: { videoId: "WpvQbcemMvA", startSeconds: 0, originalArtist: "Mulatu Astatke", originalTrack: "Yègellé Tezeta" }, flip: { artist: "Nas & Damian Marley", track: "As We Enter", videoId: "OMGd3mAfl-0", startSeconds: 15, alternates: ["Nas"] } },
  { id: 407, tier: 4, sample: { videoId: "1Ro5VHfjpHU", startSeconds: 35, originalArtist: "Earl Klugh", originalTrack: "A Time for Love" }, flip: { artist: "Raekwon", track: "Ice Cream", videoId: "jgh10of6DKA", startSeconds: 0, alternates: ["Wu Tang", "Raekwon & Ghostface Killah"] } },
  { id: 408, tier: 4, sample: { videoId: "bXtajFxMTg0", startSeconds: 35, originalArtist: "Bappi Lahiri", originalTrack: "Come Closer" }, flip: { artist: "Denzel Curry", track: "Worst Comes to Worst", videoId: "FFa-XE0eMqc", startSeconds: 0, alternates: [] } },
  { id: 409, tier: 4, sample: { videoId: "G11KG_lfx5o", startSeconds: 0, originalArtist: "The Dells", originalTrack: "Does Anybody Know I'm Here" }, flip: { artist: "J Dilla", track: "Over the Breaks", videoId: "HSn--s4Bj_M", startSeconds: 0, alternates: [] } },
  { id: 410, tier: 4, sample: { videoId: "LRfQBpIusTs", startSeconds: 0, originalArtist: "Dorothy Ashby", originalTrack: "Soul Vibrations" }, flip: { artist: "Kanye West", track: "The Joy", videoId: "BoEKWtgJQAU", startSeconds: 0, alternates: ["Ye", "Jay Z"] } },
  { id: 411, tier: 4, sample: { videoId: "Ps7J8caAVWk", startSeconds: 0, originalArtist: "Hugh Masekela", originalTrack: "Riot" }, flip: { artist: "Earl Sweatshirt", track: "Riot!", videoId: "fh7a5hfh7-Y", startSeconds: 0, alternates: [] } },
  { id: 412, tier: 4, sample: { videoId: "qNR7AWVGff0", startSeconds: 8, originalArtist: "X-Static", originalTrack: "Naught by Nature"}, flip: { artist: "Brittney Spears", track: "(You Drive Me) Crazy (The Stop Remix!)", videoId: "Q4VK9_CfOLQ", startSeconds: 24, alternates: ["Brittney Spears - Crazy", "Brittney Spears - You Drive Me Crazy"]} }
];

const tier5Data: TrackData[] = [
  { id: 501, tier: 5, sample: { videoId: "Zjahf8b1Itc", startSeconds: 39, originalArtist: "Windows XP", originalTrack: "Space Cadet Pinball SFX" }, flip: { artist: "Lil Uzi Vert", track: "You Better Move", videoId: "OVJYrKkpb8I", startSeconds: 0, alternates: ["Lil Uzi"] } },
  { id: 502, tier: 5, sample: { videoId: "kPRxxdLi7h4", startSeconds: 56, originalArtist: "Amazing Thailand", originalTrack: "Sounds of Thailand" }, flip: { artist: "A$AP Rocky", track: "LVL", videoId: "lR5dwQNizVU", startSeconds: 0, alternates: ["Asap Rocky"] } },
  { id: 503, tier: 5, sample: { videoId: "nxz1DuVaRr8", startSeconds: 75, originalArtist: "Electric Light Orchestra", originalTrack: "Evil Woman" }, flip: { artist: "Daft Punk", track: "Face to Face", videoId: "UKYWWfR_GKA", startSeconds: 8, alternates: [] } },
  { id: 504, tier: 5, sample: { videoId: "FoPSWiNCns0", startSeconds: 0, originalArtist: "Jean-Jacques Perrey", originalTrack: "E.V.A." }, flip: { artist: "Pusha T", track: "Lunch Money", videoId: "axYiOWGfs48", startSeconds: 20, alternates: ["King Push"] } },
  { id: 505, tier: 5, sample: { videoId: "FeRm2esVSdY", startSeconds: 0, originalArtist: "Scooby Doo", originalTrack: "Intro" }, flip: { artist: "MF DOOM", track: "Hey!", videoId: "IkP0aJrrwgU", startSeconds: 2, alternates: ["Metal Face"] } },
  { id: 506, tier: 5, sample: { videoId: "RDZmgy1e_3I", startSeconds: 12, originalArtist: "The Aynsley Dunbar Retaliation", originalTrack: "Watch 'n' Chain" }, flip: { artist: "Flying Lotus", track: "Camel", videoId: "MhF4SOm_t84", startSeconds: 22, alternates: ["FlyLo"] } },
  { id: 507, tier: 5, sample: { videoId: "Vb-mtj-D_D8", startSeconds: 0, originalArtist: "Eloy", originalTrack: "Isle of Sun" }, flip: { artist: "50 Cent", track: "Financial Freedom", videoId: "KzinA__VAmE", startSeconds: 6, alternates: [] } },
  { id: 508, tier: 5, sample: { videoId: "Nj9UUpNuVjg", startSeconds: 164, originalArtist: "Maneesh de Moor", originalTrack: "Moola Meditation" }, flip: { artist: "Night Lovell", track: "Dark Light", videoId: "HTp5PH8ot6Q", startSeconds: 0, alternates: [] } },
  { id: 509, tier: 5, sample: { videoId: "uDTaGHM7zfs", startSeconds: 98, originalArtist: "Michiru Oshima", originalTrack: "Tsumi" }, flip: { artist: "Curren$y & The Alchemist", track: "Full Metal", videoId: "FkDfA5CY13c", startSeconds: 16, alternates: ["The Alchemist - Full Metal", "Curren$y - Full Metal", "Currensy - Full Metal"] } },
  { id: 510, tier: 5, sample: { videoId: "1s_5oZqqVQk", startSeconds: 84, originalArtist: "The Sound of Music", originalTrack: "My Favorite Things" }, flip: { artist: "The Avalanches", track: "Frankie Sinatra", videoId: "SjfspM5sDIA", startSeconds: 196, alternates: ["Danny Brown"] } }
];

export const gameData: TrackData[] = [
  ...tier1Data,
  ...tier2Data,
  ...tier3Data,
  ...tier4Data,
  ...tier5Data
];