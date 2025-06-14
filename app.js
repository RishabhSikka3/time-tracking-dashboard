const tablist = document.querySelector("[role=tablist]");
const tabs = document.querySelectorAll("[role=tab]");
const tabPanels = document.querySelectorAll("[role=tabpanel]");
const dailyPanel = document.querySelector("#daily-panel");
const weeklyPanel = document.querySelector("#weekly-panel");
const monthlyPanel = document.querySelector("#monthly-panel");
const dailyPanelCards = dailyPanel.querySelectorAll(".card");
const weeklyPanelCards = weeklyPanel.querySelectorAll(".card");
const monthlyPanelCards = monthlyPanel.querySelectorAll(".card");

fetch("/data.json")
  .then((res) => {
    return res.json();
  })
  .then((cardsData) => {
    cardsData.forEach((card, index) => {
      // Daily Tab Data
      dailyPanelCards[index].querySelector(".heading-text").innerText =
        card.title;
      dailyPanelCards[index].querySelector(
        ".time-spent"
      ).innerText = `${card.timeframes.daily.current}hrs`;
      dailyPanelCards[index].querySelector(
        ".previous-stat"
      ).innerText = `Yesterday - ${card.timeframes.daily.previous}hrs`;

      // Weekly Tab Data
      weeklyPanelCards[index].querySelector(".heading-text").innerText =
        card.title;
      weeklyPanelCards[index].querySelector(
        ".time-spent"
      ).innerText = `${card.timeframes.weekly.current}hrs`;
      weeklyPanelCards[index].querySelector(
        ".previous-stat"
      ).innerText = `Last Week - ${card.timeframes.weekly.previous}hrs`;

      // Monthly Tab Data
      monthlyPanelCards[index].querySelector(".heading-text").innerText =
        card.title;
      monthlyPanelCards[index].querySelector(
        ".time-spent"
      ).innerText = `${card.timeframes.monthly.current}hrs`;
      monthlyPanelCards[index].querySelector(
        ".previous-stat"
      ).innerText = `Last Month - ${card.timeframes.monthly.previous}hrs`;
    });
  })
  .catch((rej) => {
    console.log(rej);
  });

tablist.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("[role=tab]");
  if (!clickedTab) {
    return false;
  }

  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", "false");
    tab.setAttribute("tabindex", -1);
  });

  clickedTab.setAttribute("aria-selected", "true");
  clickedTab.setAttribute("tabindex", 0);

  tabPanels.forEach((tabPanel) => {
    if (clickedTab.getAttribute("aria-controls") === tabPanel.id) {
      tabPanel.classList.remove("hidden");
    } else {
      tabPanel.classList.add("hidden");
    }
  });
});

let tabIndex = 0;

tablist.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    tabs[tabIndex].setAttribute("tabindex", -1);
    tabIndex++;

    if (tabIndex > tabs.length - 1) {
      tabIndex = 0;
    }

    tabs[tabIndex].setAttribute("tabindex", 0);
    tabs[tabIndex].focus();
  }

  if (e.key == "ArrowLeft") {
    tabs[tabIndex].setAttribute("tabindex", -1);
    tabIndex--;

    if (tabIndex < 0) {
      tabIndex = tabs.length - 1;
    }

    tabs[tabIndex].setAttribute("tabindex", 0);
    tabs[tabIndex].focus();
  }
});
