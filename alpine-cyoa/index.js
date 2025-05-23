document.addEventListener("alpine:init", () => {
  Alpine.data("adventure", () => ({
    story,
    currentPage: story.pages.title,
    isTyping: false,
    typewriter: null,
    observer: null,

    init() {
      this.typewriter = new Typewriter("#typewriter", {
        delay: 5,
        deleteSpeed: 50,
        cursor: "|",
      });

      // Set up mutation observer
      const storyText = document.querySelector(".story-text");
      this.observer = new MutationObserver(() => {
        this.checkAndScroll();
      });

      this.observer.observe(storyText, {
        childList: true,
        characterData: true,
        subtree: true,
      });

      this.startTyping();
    },

    checkAndScroll() {
      const storyText = document.querySelector(".story-text");
      const isAtBottom =
        storyText.scrollHeight - storyText.scrollTop <=
        storyText.clientHeight + 24;
      if (!isAtBottom) {
        storyText.scrollTop = storyText.scrollHeight;
      }
    },

    startTyping() {
      this.isTyping = true;
      // https://github.com/tameemsafi/typewriterjs/issues/233
      const wrapper = document.querySelector(".Typewriter__wrapper");
      this.typewriter
        .deleteChars(10)
        .pauseFor(wrapper.innerHTML.length > 0 ? 500 : 0)
        .callFunction(() => (wrapper.innerHTML = ""))
        .pauseFor(350)
        .typeString(this.currentPage.text)
        .callFunction(() => (this.isTyping = false))
        .start();
    },

    makeChoice(nextPage) {
      if (this.isTyping) return;
      this.currentPage = this.story.pages[nextPage];
      this.startTyping();
    },
  }));
});
