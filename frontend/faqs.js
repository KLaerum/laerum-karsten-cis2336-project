document.addEventListener('DOMContentLoaded', function(){
   document.querySelectorAll('.reveal-text').forEach(paragraph => {
    const more = paragraph.querySelector('.more-text');

    paragraph.addEventListener('click', () => {
        more.style.display =
            more.style.display === 'inline' ? 'none' : 'inline';
    });
}); 
});