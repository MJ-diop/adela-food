// let btnPlus = document.querySelector('#root');

// const images = [
//   { name: '', image: '/img/galeries/1.jpg' },
//   { name: '', image: '/img/galeries/2.jpg' },
//   { name: '', image: '/img/galeries/3.jpg' },
//   { name: '', image: '/img/galeries/4.jpg' },
//   { name: '', image: '/img/galeries/5.jpg' },
//   { name: '', image: '/img/galeries/6.jpg' },
//   { name: '', image: '/img/galeries/7.jpg' },
//   { name: '', image: '/img/galeries/8.jpg' },
//   { name: '', image: '/img/galeries/9.jpg' },
//   { name: '', image: '/img/galeries/10.jpg' },
//   { name: '', image: '/img/galeries/11.jpg' },
//   { name: '', image: '/img/galeries/12.jpg' },
//   { name: '', image: '/img/galeries/13.jpg' },
//   { name: '', image: '/img/galeries/14.jpg' },
//   { name: '', image: '/img/galeries/15.jpg' },
//   { name: '', image: '/img/galeries/16.jpg' },
//   { name: '', image: '/img/galeries/17.jpg' },
//   { name: '', image: '/img/galeries/18.jpg' },
//   { name: '', image: '/img/galeries/19.jpg' },
//   { name: '', image: '/img/galeries/20.jpg' },
//   { name: '', image: '/img/galeries/21.jpg' },
//   { name: '', image: '/img/galeries/22.jpg' },
//   { name: '', image: '/img/galeries/23.jpg' },
//   { name: '', image: '/img/galeries/24.jpg' }
// ];

// const showImage = () => {
//   let show = '';
//   images.forEach(
//     ({ name, image }) =>
//       (show += `<section class="container galerie-section">
//       <div class="row">
//         <div class="col-sm-6 col-md-3">
//           <img
//             src=${image}
//             alt="..."
//             class="img-thumbnail"
//             data-toggle="modal"
//             data-target=".bd-example-modal-lg"
//           />
//           <!-- modal -->
//           <div
//             class="modal fade bd-example-modal-lg"
//             tabindex="-1"
//             role="dialog"
//             aria-labelledby="myLargeModalLabel"
//             aria-hidden="true"
//           >
//             <div class="modal-dialog modal-lg" role="document">
//               <div class="modal-content">
//                 <img src=${image} />
//               </div>
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>

//       <div class="btn-plus">
//         <button class="voir-plus">Voir Plus</button>
//       </div>

//     </section>`)
//   );

//   btnPlus.innerHTML = show;
// };

// document.addEventListener('DOMContentLoaded', showImage);

const contact = `<div
class="modal fade"
id="modalContactForm"
tabindex="-1"
role="dialog"
aria-labelledby="myModalLabel"
aria-hidden="true"
>
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header text-center">
      <h4 class="modal-title w-100 font-weight-bold">Nous Contactez</h4>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body mx-3">
      <div class="md-form mb-5">
        <i class="fas fa-user prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="form34"
          >Your name</label
        >
        <input type="text" id="form34" class="form-control validate" />
      </div>

      <div class="md-form mb-5">
        <i class="fas fa-envelope prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="form29"
          >Your email</label
        >
        <input type="email" id="form29" class="form-control validate" />
      </div>

      <div class="md-form mb-5">
        <i class="fas fa-tag prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="form32"
          >Subject</label
        >
        <input type="text" id="form32" class="form-control validate" />
      </div>

      <div class="md-form">
        <i class="fas fa-pencil prefix grey-text"></i>
        <label data-error="wrong" data-success="right" for="form8"
          >Your message</label
        >
        <textarea
          type="text"
          id="form8"
          class="md-textarea form-control"
          rows="4"
        ></textarea>
      </div>
    </div>
    <div class="modal-footer d-flex justify-content-center">
      <button class="voir-plus">
        ENVOYER <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
</div>

<div class="text-center">
<button
  href=""
  class="mt-4 mb-4 voir-plus"
  data-toggle="modal"
  data-target="#modalContactForm"
>
  Prendre Contact
</button>
</div>`;

const btn = document.querySelector('#voirPlus');
const btnMoin = document.querySelector('#voirMoins');
const section2 = document.querySelector('#section2');
const contactBtn = document.querySelector('#contact');
const aContact = document.querySelector('.contact');

contactBtn.innerHTML = contact;

// show contact nav
aContact.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('[data-target="#modalContactForm"]').click();
});

// BUTTTON VOIR PLUS
btn.addEventListener('click', () => {
  section2.style.display = 'block';
  btn.style.display = 'none';
  btnMoin.style.display = 'block';
});

// BUTTON VOIR MOIN
btnMoin.addEventListener('click', () => {
  section2.style.display = 'none';
  btn.style.display = 'block';
  btnMoin.style.display = 'none';
});
