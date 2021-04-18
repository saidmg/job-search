document.getElementById('resume').addEventListener('click', hideNotResume)
document.getElementById('applied-jobs').addEventListener('click', hideNotResume)
document.getElementById('cover-letter').addEventListener('click', hideNotResume)

document.getElementById('viewHistory').addEventListener('click', updateData)

document.getElementById('close').addEventListener('click', showNotResume)
document.getElementById('close2').addEventListener('click', showNotResume)
document.getElementById('closee').addEventListener('click', showNotResume)
document.getElementById('closee2').addEventListener('click', showNotResume)
document.getElementById('closeee').addEventListener('click', showNotResume)
document.getElementById('close3').addEventListener('click', showNotResume)
document.getElementById('closeeee').addEventListener('click', showNotResume)
document.getElementById('closee4').addEventListener('click', showNotResume)


companyName = document.getElementById('validationDefault01')
companyLocation = document.getElementById('validationDefault002')
jobTitle = document.getElementById('validationDefault02')
jobDate = document.getElementById('validationDefault04')
jobPost = document.getElementById('validationDefault05')
assessmentLink = document.getElementById('validationDefault03')

let chosen = ''
let array = ['resume', 'applied-jobs', 'cover-letter']
let jobs =[]

async function submitForm(event){

event.preventDefault();
const formInputs = {
    company: companyName.value.trim(),
    location: companyLocation.value.trim(),
    title: jobTitle.value.trim(),
    job_date: jobDate.value.trim(),
    job_post: jobPost.value.trim(),
    assessment: assessmentLink.value.trim(),
}

console.log('[this is form input]', formInputs)
const fetchOptions = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formInputs)
}

let result = await fetch('/submit-job', fetchOptions).then(res => res.json())   
} 

async function updateData(){
    let settings = {
        headers: { 'Content-Type': 'application/json' }
    }
    // only attach the body for put/post
    // if( method === 'post' || method === 'put' ) {
    //     settings.body = JSON.stringify( data )
    // }
    jobs =  await fetch('./job-list',settings).then(res => res.json())   ;
    console.log('jobs',jobs)
    jobs.map((element)=>{return console.log('element',element)})
    document.getElementById('tableHere').innerHTML=
    jobs.map((element)=> { 
        // console.log('element',element)
        return`
        <tr>
        <th scope="row">${element.id}</th>
        <td>${element.company}</td>
        <td>${element.location}</td>
        <td>${element.title}</td>
        <td>${element.job_date}</td>
        <td>${element.job_post}</td>
        <td>${element.assessment}</td>
        <td>${element.job_status}</td>
        <td>
        <button><i class="fas fa-pen"></i></button>
        </td>
      </tr>`
 })
}
async function hideNotResume(event) {

    console.log(event.target.id)
    chosen = event.target.id
    array.forEach(selectedOne => {
        (selectedOne !== event.target.id) ? document.getElementById(selectedOne).classList.add('display-none') : '';
        (selectedOne !== event.target.id) ? setTimeout(function () { document.getElementById(selectedOne).classList.add('nonee'); }, 500) : ''
    });
    if(event.target.id === 'applied-jobs') {
        updateData()
        
}
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