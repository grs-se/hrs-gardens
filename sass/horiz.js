.row
  .col
    img.hover-shadow.preview(src='https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg' onclick='openLightbox();toSlide(1)' alt='Toy car on the road.')
  .col
    img.hover-shadow.preview(src='https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg' onclick='openLightbox();toSlide(2)' alt='Toy car exploring offroad.')
  .col
    img.hover-shadow.preview(src='https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg' onclick='openLightbox();toSlide(3)' alt='Toy car in the city')
#Lightbox.modal
  span.close.pointer(onclick='closeLightbox()') &times;
  .modal-content
    .slide
      img.image-slide(src='https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg' alt='Toy car on the road.')
    .slide
      img.image-slide(src='https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg' alt='Toy car exploring offroad.')
    .slide
      img.image-slide(src='https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg' alt='Toy car in the city.')
    a.previous(onclick='changeSlide(-1)') &#x276E;
    a.next(onclick='changeSlide(1)') &#x276F;
    .dots
      .col
        img.modal-preview.hover-shadow(src='https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg' onclick='toSlide(1)' alt='Toy car on the road.')
      .col
        img.modal-preview.hover-shadow(src='https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg' onclick='toSlide(2)' alt='Toy car exploring offroad.')
      .col
        img.modal-preview.hover-shadow(src='https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg' onclick='toSlide(3)' alt='Toy car in the city')
script.
  let slideIndex = 1;
  showSlide(slideIndex);
  function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
  };
  function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
  };
  function changeSlide(n) {
  showSlide(slideIndex += n);
  };
  function toSlide(n) {
  showSlide(slideIndex = n);
  };
  function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  if (n > slides.length) {
  slideIndex = 1;
  };
  if (n < 1) {
  slideIndex = slides.length;
  };
  for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  };
  for (let i = 0; i < modalPreviews.length; i++) {
  modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
  };
