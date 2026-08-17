document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.events').forEach(figure => {
    const caption = figure.querySelector('figcaption');

    figure.addEventListener('click', () => {
        caption.style.display =
            caption.style.display === 'block' ? 'none' : 'block';
    });
    });
});