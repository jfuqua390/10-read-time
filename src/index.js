'use strict';
/* globals numWords, readTime */

const entryinfos = document.querySelectorAll(`.entry__info`);
const entrys = document.querySelectorAll(`.entry`);

// Create nav
const blog = document.querySelector(`.blog`);
const nav = document.createElement(`nav`);
nav.classList.add(`navbar`);
blog.appendChild(nav);

for (let i = 0; i < entrys.length; i++) {
  // Making each element
  const entryinfo = entryinfos[i];
  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryinfo.appendChild(readtime);

  // Calculating readTime
  const entry = entrys[i];
  const article = entry.querySelector(`.entry__content`).textContent;
  readtime.innerText = `${readTime(article, 200)} mins`;

  //create nav links
  const navlink = document.createElement(`a`);
  navlink.setAttribute(`href`, `#${entry.id}`);
  nav.appendChild(navlink);
  navlink.innerText = entry.querySelector(`.entry__title`).innerText;
}
