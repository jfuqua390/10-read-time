'use strict';

/* global numWords */

function readTime(strg, wpm = 1) {
  const totalwords = numWords(strg);
  const totaltime = totalwords / wpm;
  return Math.ceil(totaltime);
}
