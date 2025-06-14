# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/responsive-time-tracking-dashboard-with-tabs-switching-jTZHbyxOXc)
- Live Site URL: [Site URL](https://rishabhsikka3.github.io/time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS (with mixins and variables)
- CSS Grid and Flexbox
- Mobile-first responsive design
- Vanilla JavaScript (DOM manipulation and fetch API)

### What I learned

- How to dynamically update DOM content from a `data.json` file using the `fetch` API.
- Implementing accessible tab navigation using ARIA roles and keyboard support.
- Applying custom grid layouts using SCSS mixins.
- Using `minmax()` with `auto-fit` in `grid-template-columns`, and how SCSS functions like `rem()` improve consistency.

#### Example JavaScript snippet:

```js
fetch("/data.json")
  .then((res) => res.json())
  .then((cardsData) => {
    cardsData.forEach((card, index) => {
      dailyPanelCards[index].querySelector(".heading-text").innerText =
        card.title;
      // More DOM updates...
    });
  });
```

### Continued development

In future projects, I’d like to:

- Add animations for tab switching transitions.
- Improve accessibility even further by handling `aria-live` regions.
- Explore React implementation of the same layout for comparison.

### Useful resources

- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Sass Guidelines](https://sass-guidelin.es/) - Helped in organizing mixins and variables cleanly.
- [Aria-roles - MDN Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

## Author

- Name - Rishabh Sikka
- Frontend Mentor – [@RishabhSikka3](https://www.frontendmentor.io/profile/RishabhSikka3)

## Acknowledgments

Thanks to the Frontend Mentor community for great feedback and inspiration. Special credit to documentation and tutorials that clarified key aspects of CSS Grid and ARIA accessibility.
