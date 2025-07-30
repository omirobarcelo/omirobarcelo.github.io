const story = {
  title: "The Lighthouse Protocol",
  pages: {
    title: {
      text: "Welcome to *The Lighthouse Protocol*. The story begins in the familiar world of tech startups, data pipelines, and morning standups. But beneath the surface of Lighthouse Squad's daily work lies something far older—and far stranger—than any of them could have imagined.\n\nAre you ready to uncover the secrets behind Triptease’s most critical infrastructure?",
      options: [{ text: "Start Chapter 0", goTo: "start" }],
    },
    start: {
      text: 'It started like any other Tuesday.\n\nOriol, the first to log in as usual (timezone advantage), materialized in Gather, stretching in his chair and sipping from a steaming mug. He dragged his avatar into the \'Lighthouse Standup Room\' and waved as Slack notifications trickled in.\n\nAks was next. Her pixel self darted around Gather before settling next to Oriol\'s. "Morning! DataDog\'s acting weird again. Got a few drops on the Prague client."\n\nOriol frowned. "Hotel Astrála?"\n\n"Yeah. And it\'s not just ingestion. The events have weird timestamps. One came in at 23:61."\n\nHelen finally wandered into Gather five minutes later, hair still damp from her morning run. "Sorry! Kid tantrum. What\'s the chaos today?"\n\n"Haunted checkouts, apparently," Oriol replied.\n\nThey gathered around a shared tab. The Hotel Astrála data showed duplicated checkouts with impossible times. Metadata was coming through, but the script version wasn’t matching any known deploy.\n\nAks squinted. "Check this out... x-tease-protocol: lighthouse-alpha. What the hell is that?"\n\nOriol searched GitHub. Nothing.\n\nHelen searched BigQuery logs. Still nothing.\n\nAks searched her local files. "I’m going full Splendor loser mode if this is another ghost CDN bug."\n\nOriol laughed. "You\'re undefeated at losing."\n\nThen Slack pinged. A message from Lewis.\n\n"Hey, just peeking in from leave. Saw your thread. I think I\'ve seen \'lighthouse-alpha\' before.\nOld repo. I cloned it months ago. Will check my backups."\n\nAks paused. "I’m going to Prague."\n\nHelen blinked. "You what?"\n\n"If this is real traffic, we need to see what\'s triggering it. It\'s not just a bug."\n\nOriol nodded slowly. "We pair up every day to squash bugs, but this... this might be a story."\n\nAt 9:29 a.m., they stood their avatars up for the standup. Aks, camera on, said nothing about her travel plans.\n\nAt 9:31 a.m., the event stream from Hotel Astrála stopped.\n\nAt 9:32 a.m., a new internal event appeared:\n\nprotocol_entry_point: the bell tower\n\nWhat will the team do next?',
      options: [
        { text: "Have Oriol dig into the old repo", goTo: "dig_repo" },
        { text: "Follow Aks on her trip to Prague", goTo: "follow_aks" },
      ],
    },
    dig_repo: {
      text: "Oriol connects his old backup drive and finds a strange folder labeled simply 'proto'. Inside: a single README, an obfuscated script, and a license from 1998.\n\nThe README ends with one line:\n\"If you’ve found this, the Tower has chosen you.\"\n\nHis screen flickers. The lights in his flat blink twice.\n\nSomething has activated.",
      options: [{ text: "Start Over", goTo: "title" }],
    },
    follow_aks: {
      text: 'Aks arrives in Prague under leaden skies. The Hotel Astrála looms like a painting from another time.\n\nThe receptionist glances at her Triptease badge and silently hands her a room key. "You\'re the third one this month," she says.\n\nInside Room 404 lies a single envelope labeled "Lighthouse".\n\nInside it: a photograph of the squad. Taken from a high window. Their Gather avatars on screen. Timestamp: two weeks from now.\n\nThere is a shadow behind them that none of them remember.\n\nTo be continued...',
      options: [{ text: "Start Over", goTo: "title" }],
    },
  },
};
