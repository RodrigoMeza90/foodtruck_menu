function showPage(pageNumber) {
    const pages = document.querySelectorAll('.menu-page');
    pages.forEach((page, index) => {
      if (index === pageNumber - 1) {
        page.classList.remove('hidden');
      } else {
        page.classList.add('hidden');
      }
    });
  }
  