function showPage(pageNumber) {
  const pages = document.querySelectorAll('.menu-page');
  const footer = document.getElementById('site-footer');
  const header = document.querySelector('header'); // seleccionamos el header

  pages.forEach((page, index) => {
    if (index === pageNumber - 1) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });

  // Mostrar el footer solo en la página principal (page1)
  if (pageNumber === 1) {
    footer.style.display = 'flex';
    header.classList.remove('hidden'); // mostrar header
  } else {
    footer.style.display = 'none';
    header.classList.add('hidden'); // ocultar header
  }
}