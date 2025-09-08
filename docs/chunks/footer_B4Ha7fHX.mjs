import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_Ccqt8kAR.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- This is the header of the website that, like the footer, is called in each page.
    It sits fixed at the top of the page allowing the user at any stage to navigate to
    whichever page they would like to visit. It uses a few JS elements like the time/date
    and the dark/light mode button that are explained in more depth on the JS page  -->${maybeRenderHead()}<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"> <div class="container"> <a class="navbar-brand" href="/finalProject/">Dunshaughlin</a> <!-- Date/Time Display: always visible --> <span id="date-time" class="ms-3 fw-bold badge bg-primary text-white p-2 rounded"> <!-- JS will insert the current date/time here --> </span> <!-- Light/Dark mode toggle button --> <button id="themeToggle" class="btn btn-outline-secondary ms-2" type="button">
Dark Mode
</button> <!-- Menu button for when the screen width is decrease which styles the button in the
        hamburger pattern and lets JS to toggle the "collapse" element and starts that way --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button> <!-- Navigation links that collapse on thinner screens and on mobile --> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav ms-auto"> <li class="nav-item"><a class="nav-link" href="/finalProject/">Home</a></li> <li class="nav-item"><a class="nav-link" href="/finalProject/events">Events</a></li> <li class="nav-item"><a class="nav-link" href="/finalProject/history">History</a></li> <li class="nav-item"><a class="nav-link" href="/finalProject/transport">Transport</a></li> <li class="nav-item"><a class="nav-link" href="/finalProject/contact">Contact</a></li> </ul> </div> </div> </nav>`;
}, "D:/My Stuff/College Bits/Project/FProject/finalProject/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- The footer page -->${maybeRenderHead()}<footer class="footer py-4 bg-light"> <div class="container d-flex justify-content-between align-items-center"> <!-- Little message down the bottom left --> <p class="mb-0">&copy; Dunshaughlin, My Hometown</p> <!-- Button link to the JS that returns the user to the beginning of the page.
        More about this in the JS page --> <button id="scrollToTopBtn" class="btn btn-primary qa-btn">
Return to Top
</button> </div> </footer>`;
}, "D:/My Stuff/College Bits/Project/FProject/finalProject/src/components/footer.astro", void 0);

export { $$Footer as $, $$Header as a };
