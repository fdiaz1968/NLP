window.MathJax = {
  tex: {
    // Extend the default inline-math delimiters (\( \)) to also accept
    // single-dollar $...$, since notebooks in this course use both styles.
    // Display math ($$...$$ and \[ \]) is already enabled by default.
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    processEscapes: true
  }
};
