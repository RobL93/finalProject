/* --- History page buttons --- */

/* This code is used for the revealing and hiding of the answers on the History
  page. Clicking one of the buttons beside the ??? reveals the answer by taking
  the stored answer written in the astro file. I included a hide all button at
  the bottom of the page then that hides all answers for anyone looking to
  reanswer the questions */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".qa-btn").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.qaTarget; 
      const answerText = button.dataset.answer;
      const answerDiv = document.getElementById(targetId);
      answerDiv.textContent = answerText;
    });
  });

  const hideAllBtn = document.getElementById("hideAllAnswersBtn");
  hideAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".answerReveal, .alert").forEach(answerDiv => {
      answerDiv.textContent = "???";
    });
  });
});

/* --- Date and Time Header Display --- */

/* This feature was made just to show more JS on the page as everyone is aware
  the time and date are displayed on most PC in the bottom corner. It begins running
  the moment the page is loaded. Every second after that it reloads again to give
  a precise time. It is set to the en-GB format to give the date in a format that
  we'd be used to in Ireland. */

function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  document.getElementById('date-time').textContent = formatted;
}

updateDateTime();
setInterval(updateDateTime, 1000);

/* --- Light and Dark mode button --- */

/* This allows the user on the site to switch between a light and dark theme.
  I feel like this is becoming a more common feature on websites and wanted to
  include it in my project. The changes are made by toggling a dark mode class
  written in the CSS stylesheet which has been easy to maintain through using
  variables when writing the CSS. It also saves the website user's choice for 
  the next time they visit the site using the local storage */

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("darkMode");
    toggleBtn.textContent = "Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
      toggleBtn.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});

/* --- Lightbox and Carousel --- */

/* This feature allows uses to click on the homepage images and open them in a
  lightbox popup which is further developed in the CSS stylesheet. It keeps track
  of the current image and displays it over the homepage. It works through buttons
  and keyboard arrows as well as the esc button to close the lightbox to enhance
  the user experience. */

document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelectorAll('#homeCarousel .carousel-item img');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.querySelector('.lightboxPrev');
  const lightboxNext = document.querySelector('.lightboxNext');

  let currentIndex = 0;

  carouselImages.forEach((img, index) => {
    img.style.cursor = "pointer"; 
    img.addEventListener('click', () => {
      currentIndex = index;
      showLightboxImage();
    });
  });

  function showLightboxImage() {
    lightboxImage.src = carouselImages[currentIndex].src;
    lightboxOverlay.classList.add('show');
  }

  lightboxClose.addEventListener('click', () => {
    lightboxOverlay.classList.remove('show');
  });

  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('show');
    }
  });

  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showLightboxImage();
  });

  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showLightboxImage();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
    if (e.key === 'Escape') lightboxOverlay.classList.remove('show');
  });
});

/* --- Weather API --- */

/* Gives the current weather through the OpenWeatherMap Api for Dunshaughlin. 
  Runs as soon as the transport page loads up and is run through a bootsrap card. 
  Most of the code was taken from OpenWeatherMap sources. */

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "0455b4ae6b2189427ca92b7116691c48";
  const town = "Dunshaughlin,IE";
  const weatherContainer = document.getElementById("weather");

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      const card = document.createElement("div");
      card.className = "card text-center p-3 m-1";
      card.style.minWidth = "300px";

      card.innerHTML = `
        <h5 class="card-title">${data.name} Weather</h5>
        <p class="card-text">
          ${data.weather[0].description}
        </p>
        <p class="card-text">
          Temp: ${data.main.temp}°C<br>
          Feels like: ${data.main.feels_like}°C
        </p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
      `;

      weatherContainer.appendChild(card);
    } catch (err) {
      console.error("Error fetching weather:", err);
      weatherContainer.innerHTML = `<p class="text-danger">Unable to load weather data</p>`;
    }
  }

  fetchWeather();
});

/* --- Scroll to the top of the page button --- */

/* A quality of life feature for pages like the history page and events that with 
  further updates in the future could get very long. Maybe not entirely practical 
  with scrollbars doing the job but again, like the CSS footer gradient, just used 
  to showcase more of the skills picked up over the course. */

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});