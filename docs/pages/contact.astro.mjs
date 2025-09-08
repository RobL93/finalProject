import { c as createComponent, r as renderTemplate, a as renderScript, b as renderComponent, d as renderHead } from '../chunks/astro/server_DBnCGGyt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Footer, a as $$Header } from '../chunks/footer_DOUP0mn7.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<!-- A short, simple page but also one that presented me with the problem of the footer not 
    being directly on the bottom of the page at all times so that brought an issue that had 
    to be fixed on the CSS page. Not much else that is shown on this page that isn't on others.
    I did include the mailto and tel option to show a bit more interactivity and to streamline
    the contact process for people who would be using this site --><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dunshaughlin - Contact</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="/finalProject/style.css">`, '</head> <body class="mainPage d-flex flex-column min-vh-100"> ', ` <!-- Calling the header.astro file --> <main class="flex-fill container"> <h1 class="mb-4">Contact Us</h1> <p class="lead">We'd love to hear from you! Here are the best ways to get in touch.</p> <div class="row g-4 mt-3"> <!-- Email --> <div class="col-md-6"> <div class="card h-100 text-center p-3 shadow-sm"> <h5>Email</h5> <p><a href="mailto:fake-email@dunshaughlin.ie">fake-email@dunshaughlin.ie</a></p> </div> </div> <!-- Phone --> <div class="col-md-6"> <div class="card h-100 text-center p-3 shadow-sm"> <h5>Phone</h5> <p><a href="tel:+3531234567">+353 1 234 567</a></p> </div> </div> <!-- Address --> <div class="col-md-6"> <div class="card h-100 text-center p-3 shadow-sm"> <h5>Address</h5> <p>Main Street, Dunshaughlin, Co. Meath, Ireland</p> </div> </div> <!-- Social Media --> <!-- Once again, like the events page, this links are blank and take you to the facebook
        and X homepage as I'm not sure if the town actually has a social media page --> <div class="col-md-6"> <div class="card h-100 text-center p-3 shadow-sm"> <h5>Social Media</h5> <p><a href="https://facebook.com" target="_blank">Facebook</a> | <a href="https://x.com" target="_blank">Twitter</a></p> </div> </div> </div> </main> `, ' <!-- Calling the footer.astro file --> <!-- Bootstrap linking at the end of the page --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer><\/script> ', " </body> </html>"])), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "D:/My Stuff/College Bits/Project/FProject/finalProject/src/pages/contact.astro?astro&type=script&index=0&lang.ts"));
}, "D:/My Stuff/College Bits/Project/FProject/finalProject/src/pages/contact.astro", void 0);

const $$file = "D:/My Stuff/College Bits/Project/FProject/finalProject/src/pages/contact.astro";
const $$url = "/finalProject/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
