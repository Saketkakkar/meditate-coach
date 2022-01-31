var navLinks = document.getElementsByClassName("nav-link");

// remove active class from every nav-link
var removeClass = function () {
  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
  }
};

// function that will add active class based on location hash
var addActiveClass = function () {
  if (window.location.hash === undefined || window.location.hash === "") {
    removeClass();
    navLinks[0].classList.add("active");
  } else {
    removeClass();
    for (let j = 1; j < navLinks.length; j++) {
      if (navLinks[j].attributes.href.nodeValue === window.location.hash)
        navLinks[j].classList.add("active");
    }
  }
};

// init active class
addActiveClass();
// change active nav link based on hashchange
window.onhashchange = addActiveClass;

// onload show modal
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
  keyboard: false,
});

window.addEventListener("load", () => {
  myModal.toggle();
});

// form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll(".needs-validation");
//   console.log(forms);

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         event.preventDefault();

//         const valid = form.checkValidity();
//         if (!valid) {
//           event.stopPropagation();
//         } else {
//           const name = document.getElementById("name").value;
//           const city = document.getElementById("city").value;
//           const w_number = document.getElementById("whatsapp-number").value;
//           const number = document.getElementById("number").value;

//           const url =
//             "https://script.google.com/macros/s/AKfycbxzoQIl_FmLM26ALpvEicapG8AKl64R7SCpUUxgdQYw_mxljMNdUBZzZIKBMwuhwhPbxw/exec";
//           console.log(name, city, w_number, number);

//           fetch(
//             url +
//               "?" +
//               new URLSearchParams({
//                 name,
//                 "whatsapp-number": w_number,
//                 number,
//                 city,
//               }),
//             {
//               mode: "no-cors",
//             }
//           ).then((data) => console.log(data));

//           //   fetch(url, {
//           //     method: "GET", // *GET, POST, PUT, DELETE, etc.
//           //     mode: "no-cors", // no-cors, *cors, same-origin

//           //     headers: {
//           //       "Content-Type": "application/json",
//           //       //   "Content-Type": "application/x-www-form-urlencoded",
//           //     },

//           //     body: JSON.stringify({
//           //       name,
//           //       "whatsapp-number": w_number,
//           //       number,
//           //       city,
//           //     }),
//           //   }).then((data) => console.log(data));
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

const modalForm = document.getElementById("modal-form");
modalForm.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const valid = modalForm.checkValidity();
    if (!valid) {
      event.stopPropagation();
    } else {
      const name = document.getElementById("m-name").value;
      const city = document.getElementById("m-city").value;
      const w_number = document.getElementById("m-whatsapp-number").value;
      const number = document.getElementById("m-number").value;

      const url =
        "https://script.google.com/macros/s/AKfycbxzoQIl_FmLM26ALpvEicapG8AKl64R7SCpUUxgdQYw_mxljMNdUBZzZIKBMwuhwhPbxw/exec";
      console.log(name, city, w_number, number);

      fetch(
        url +
          "?" +
          new URLSearchParams({
            name,
            "whatsapp-number": w_number,
            number,
            city,
          }),
        {
          mode: "no-cors",
        }
      ).then((data) => console.log(data));
    }

    modalForm.classList.add("was-validated");
  },
  false
);

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const valid = contactForm.checkValidity();
    if (!valid) {
      event.stopPropagation();
    } else {
      const name = document.getElementById("name").value;
      const city = document.getElementById("city").value;
      const w_number = document.getElementById("whatsapp-number").value;
      const number = document.getElementById("number").value;

      const url =
        "https://script.google.com/macros/s/AKfycbxzoQIl_FmLM26ALpvEicapG8AKl64R7SCpUUxgdQYw_mxljMNdUBZzZIKBMwuhwhPbxw/exec";
      console.log(name, city, w_number, number);

      fetch(
        url +
          "?" +
          new URLSearchParams({
            name,
            "whatsapp-number": w_number,
            number,
            city,
          }),
        {
          mode: "no-cors",
        }
      ).then((data) => console.log(data));
    }

    contactForm.classList.add("was-validated");
  },
  false
);
