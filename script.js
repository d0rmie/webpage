const imgs = document.getElementsByClassName('grid-img');

const biggen = (event) => {
    event.target.style.maxWidth = '50px';
}
const smallen = (event) => {
    event.target.style.maxWidth = '';
}
for (let i=0; i<imgs.length;i++) {
    imgs[i].addEventListener('mouseover',biggen);
    imgs[i].addEventListener('mouseleave', smallen);
}