document.getElementById('resume').addEventListener('click', hideNotResume)
document.getElementById('applied-jobs').addEventListener('click', hideNotResume)
document.getElementById('cover-letter').addEventListener('click', hideNotResume)

document.getElementById('close').addEventListener('click', showNotResume)
document.getElementById('close2').addEventListener('click', showNotResume)
document.getElementById('closee').addEventListener('click', showNotResume)
document.getElementById('closee2').addEventListener('click', showNotResume)
document.getElementById('closeee').addEventListener('click', showNotResume)
document.getElementById('closee3').addEventListener('click', showNotResume)
document.getElementById('closeeee').addEventListener('click', showNotResume)
document.getElementById('closee4').addEventListener('click', showNotResume)

let chosen = ''
let array = ['resume', 'applied-jobs', 'cover-letter']
function hideNotResume(event) {

    console.log(event.target.id)
    chosen = event.target.id
    array.forEach(selectedOne => {
        (selectedOne !== event.target.id) ? document.getElementById(selectedOne).classList.add('display-none') : '';
        (selectedOne !== event.target.id) ? setTimeout(function () { document.getElementById(selectedOne).classList.add('nonee'); }, 500) : ''
    });


    document.getElementById(event.target.id).classList.add('transition-up');
    setTimeout(function () { document.getElementById(`${chosen}-content`).classList.remove('nonee'); }, 700);

    (event.target.id === 'cover-letter') ? document.getElementById(coverlet).classList.remove('nonee') : '';

}
function showNotResume() {
    array.forEach(selectedOne => {
        (selectedOne !== chosen) ? document.getElementById(selectedOne).classList.remove('nonee') : '';

        (selectedOne !== chosen) ? setTimeout(function () { document.getElementById(selectedOne).classList.remove('display-none'); }, 300) : ''

    })
    document.getElementById(chosen).classList.remove('transition-up')
    document.getElementById(`${chosen}-content`).classList.add('nonee')


}


document.getElementById('theme').addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        document.querySelector('body').classList.add('dark')
        document.getElementById('applied-jobs').classList.remove('btn-hvr')
        document.getElementById('applied-jobs').classList.add('btn2-hvr')
        document.getElementById('resume').classList.remove('btn-hvr')
        document.getElementById('resume').classList.add('btn2-hvr')
        document.getElementById('cover-letter').classList.remove('btn-hvr')
        document.getElementById('cover-letter').classList.add('btn2-hvr')


    } else {
        console.log("Checkbox is not checked..");
        document.querySelector('body').classList.remove('dark')
        document.getElementById('applied-jobs').classList.remove('btn2-hvr')
        document.getElementById('applied-jobs').classList.add('btn-hvr')
        document.getElementById('resume').classList.remove('btn2-hvr')
        document.getElementById('resume').classList.add('btn-hvr')
        document.getElementById('cover-letter').classList.remove('btn2-hvr')
        document.getElementById('cover-letter').classList.add('btn-hvr')
    }

})