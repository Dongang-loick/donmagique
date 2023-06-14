const e = document.getElementById('snd');
const img = document.getElementById('chevron');
const btn = document.getElementById('but');

//aparition et disparition de la liste

window.addEventListener('scroll', () =>{
    if (window.scrollY > 1000) {
        //apparition lorsqu'on arrive au chiffre

        e.classList.add('visible2');

        //apparition et disparition en appuiant sur le bouton

        img.addEventListener('click', function() {
            e.classList.toggle('visible');
            img.classList.toggle('dpl');
        })
    } else {
        e.classList.remove('visible2');
    }
});

