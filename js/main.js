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
//         <div class="col">
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

const btn = document.querySelector('#voirPlus');
const btnMoin = document.querySelector('#voirMoins');
const section2 = document.querySelector('#section2');

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
