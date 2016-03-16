'use strict';
/* globals numWords, readTime */

const entryinfos = document.querySelectorAll(`.entry__info`);
const entrys = document.querySelectorAll(`.entry`);

for (let i = 0; i < entrys.length; i++) {
  // Making each element
  const entryinfo = entryinfos[i];
  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryinfo.appendChild(readtime);

  // Calculating readTime
  const entry = entrys[i];
  const article = entry.querySelector(`.entry__content`).innerText;
  readtime.innerText = `${readTime(article, 200)} mins`;

  // Creating nav

}
