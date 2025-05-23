const story = {
  title: "The Mountain Expedition",
  pages: {
    title: {
      text: `Welcome to The Mountain Expedition! You are about to embark on a thrilling adventure where your choices will determine your fate. Are you ready to begin?

Welcome to The Mountain Expedition! You are about to embark on a thrilling adventure where your choices will determine your fate. Are you ready to begin?`,
      options: [{ text: "Start Adventure", goTo: "start" }],
    },
    start: {
      text: "You stand at the base of a majestic mountain. The sun is beginning to set, casting long shadows across the valley. You have two paths before you: a well-trodden trail to the left, and a narrow, winding path to the right. Which way will you choose?",
      options: [
        { text: "Take the well-trodden trail", goTo: "safe_path" },
        { text: "Explore the narrow path", goTo: "adventure_path" },
      ],
    },
    safe_path: {
      text: "The well-trodden trail is easy to follow. As you walk, you notice fresh footprints and hear the distant sound of other hikers. The path is safe but perhaps a bit too ordinary for a true adventure.",
      options: [
        { text: "Continue on the safe path", goTo: "safe_ending" },
        { text: "Turn back and try the narrow path", goTo: "adventure_path" },
      ],
    },
    adventure_path: {
      text: "The narrow path leads you through dense undergrowth. The air is thick with the scent of pine and earth. Suddenly, you spot a small cave entrance partially hidden by bushes.",
      options: [
        { text: "Enter the cave", goTo: "cave" },
        { text: "Continue along the path", goTo: "mountain_peak" },
      ],
    },
    safe_ending: {
      text: "You reach a beautiful viewpoint where other hikers are resting. The sunset paints the sky in brilliant colors. While it's not the most exciting adventure, you've made it safely to enjoy the view.",
      options: [{ text: "Start Over", goTo: "title" }],
    },
    cave: {
      text: "Inside the cave, you discover ancient cave paintings and a small treasure chest! This was definitely worth the risk.",
      options: [{ text: "Start Over", goTo: "title" }],
    },
    mountain_peak: {
      text: "After a challenging climb, you reach the mountain peak. The view is breathtaking, and you feel a sense of accomplishment like never before.",
      options: [{ text: "Start Over", goTo: "title" }],
    },
  },
};
