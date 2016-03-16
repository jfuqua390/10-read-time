'use strict';
/* globals numWords, readTime */

const entryinfos = document.querySelectorAll(`.entry__info`);
const entrys = document.querySelectorAll(`.entry`);
const title = document.querySelector(`.title`);

// const to use in insertBefore, uncomment to move nav top
// const body = document.querySelector(`body`);
// const tes = document.getElementByID(`lua-cooper`);

// Create nav
const blog = document.querySelector(`.blog`);
const nav = document.createElement(`nav`);
nav.classList.add(`navbar`);
blog.appendChild(nav);

// to move nav to top, uncomment next line
// body.insertBefore(nav, title);


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

  if (readTime(article, 200) < 6) {
    entry.querySelector(`.read-time`).style.color = `green`;
  } else {
    entry.querySelector(`.read-time`).style.color = `red`;
  }

  // create nav links
  const navlink = document.createElement(`a`);
  navlink.setAttribute(`href`, `#${entry.id}`);
  nav.appendChild(navlink);
  navlink.innerText = entry.querySelector(`.entry__title`).innerText;
}
