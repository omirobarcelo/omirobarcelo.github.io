const story = {
  title: "The Lighthouse Protocol",
  pages: {
    title: {
      text: "Welcome to *The Lighthouse Protocol*. The story begins in the familiar world of tech startups, data pipelines, and morning standups. But beneath the surface of Lighthouse Squad's daily work lies something far older—and far stranger—than any of them could have imagined.\n\nAre you ready to uncover the secrets behind Triptease’s most critical infrastructure?",
      options: [{ text: "Start Chapter 0", goTo: "start" }],
    },
    start: {
      text: 'It\'s 9:28 AM UK time. The pixelated avatars of Lighthouse Squad begin to pop into the virtual space of Gather.\n\nOriol, freshly caffeinated and already debugging in his corner of the Spanish island, waves at the others as he drags his avatar into the Standup Room.\n\nAks appears next, briskly moving toward the meeting room, talking to herself: \'Why is our slipway sync five minutes behind today... again?\'\n\nLewis arrives moments later, yawning audibly on camera. "Cooper barked at a floating bag at 4 AM. Again. Also, the baby decided sleep was optional. Morning."\n\nHelen arrives at exactly 9:31, slightly flushed from a quick jog. "Hiya! Sorry, tantrum and porridge explosion. What did I miss?"\n\n"Everything and nothing," Oriol grins. "Just another ordinary day in meta-script wonderland."\n\nBut then Aks frowns. "Not quite. Check this out. Hotel Astrála is sending duplicated checkouts with timestamps that don’t make sense. Look. 24:01."\n\nHelen squints. "That’s not even... legal."\n\nLewis rubs his eyes. "Wait. Didn’t someone from Platform mention seeing weird traffic during the Madrid retreat?"\n\n"Maybe. I was too distracted eating tapas," Oriol mutters.\n\n"You mean gorging," Aks smirks.\n\nThe log entries contain a curious header: `x-tease-protocol: lighthouse-alpha`. None of them had seen it before. A search through GitHub, DataDog, and BigQuery yields nothing.\n\nThen Oriol spots a commit in an old, archived repository labeled `lighthouse-protocol`. It has no author, no timestamp. Just a comment: \'Do not deploy without tower clearance.\'\n\nAt 9:34, the Squad stands silent. Helen\'s avatar twitches awkwardly. \n\nThen, another event appears in their dashboard:\n\n**protocol_entry_point: the bell tower**\n\nThe screen flickers for everyone at the same time.\n\nAks breaks the silence. "Alright. We’re either in a conspiracy... or a bug report no one\'s brave enough to log."\n\nWhat should the Lighthouse Squad do next?',
      options: [
        {
          text: "Have Oriol dig deeper into the mysterious archived repo",
          goTo: "dig_repo",
        },
        { text: "Send Aks to check Hotel Astrála in person", goTo: "aks_trip" },
        {
          text: "Have Lewis deploy the protocol branch in a test environment",
          goTo: "lewis_test",
        },
      ],
    },
    dig_repo: {
      text: "Oriol opens the repo. Most files are unreadable—encrypted or corrupted. One README remains.\n\nIt ends with a sentence: 'When the tower rings, the loop begins.'\n\nHis terminal freezes for a second. Then, without input, it prints: `INVOKE PROTOCOL: [Y/N]`\n\nBefore Oriol can respond, a Slack message pings from Aks: 'I'm seeing increased error rates on Prague since 5 minutes ago. Can someone test this safely?'",
      options: [
        {
          text: "Ask Lewis to deploy the protocol in a test environment",
          goTo: "lewis_test",
        },
        {
          text: "Ping Aks to get on a call and pair-debug the protocol",
          goTo: "aks_pair",
        },
      ],
    },
    aks_trip: {
      text: 'Aks arrives in Prague. The receptionist at Hotel Astrála stares at her badge. Without a word, she slides over a dusty envelope labeled "Lighthouse".\n\nInside: a photo of the squad, taken from behind—but from above, as if shot from a height. Helen isn’t in it.\n\nBecause she hadn’t attended the retreat.\n\nThe timestamp says: *One week from today.*\n\nAks sends a photo of the envelope to the group. "We might be looking at a predictive script. Maybe the protocol is doing something with timestamps."\n\nHelen replies: \'We need a sandbox. Someone test this safely.\'',
      options: [
        {
          text: "Ask Lewis to spin up the test environment",
          goTo: "lewis_test",
        },
        {
          text: "Ask Oriol to investigate the repo with Helen",
          goTo: "dig_repo",
        },
      ],
    },
    lewis_test: {
      text: "Lewis spins up a test container and deploys the protocol branch. Nothing happens at first.\n\nThen the fan on his laptop whirs to life.\n\n\"Weird... CPU spike without load?\"\n\nA whisper crackles through his speakers. Just barely audible: 'They opened the loop.'\n\nHis dog Cooper growls and hides under the desk.\n\nSlack lights up. Aks: 'I'm seeing phantom events on Slipway. Room bookings from future dates.'\n\nOriol: 'The repo timestamp just updated... by itself.'",
      options: [
        {
          text: "Oriol and Helen investigate the repo's new changes",
          goTo: "dig_repo",
        },
        {
          text: "Aks decides to run protocol events live on Hotel Astrála",
          goTo: "aks_trip",
        },
      ],
    },
    aks_pair: {
      text: "Aks and Oriol hop on a quick call. Together, they trace the structure of the repo. Hidden inside a base64 string is a map. Not of code.\n\nOf a building.\n\nHelen gasps on Slack as she sees the screenshot. 'That’s the layout of the hotel tower.'\n\nThe repo isn’t code. It’s a blueprint.\n\nAnd something in it... is still running.",
      options: [
        {
          text: "Lewis tries to cross-reference hotel layout with the protocol output",
          goTo: "lewis_test",
        },
        {
          text: "Helen starts logging timeline discrepancies in BigQuery",
          goTo: "dig_repo",
        },
      ],
    },
  },
};
