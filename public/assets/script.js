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
let jobs = []
let idToEdit = 0
async function submitForm(event) {
    document.getElementById('form').reportValidity();
    event.preventDefault();
    if (document.getElementById('form').checkValidity() === true) {
        const formInputs = {
            company: companyName.value.trim(),
            location: companyLocation.value.trim(),
            title: jobTitle.value.trim(),
            job_date: jobDate.value.trim(),
            job_post: jobPost.value.trim(),
            assessment: assessmentLink.value.trim(),
        }
        if (idToEdit !== 0) {
            const fetchOptions = {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInputs)
            }

            let result = await fetch(`/edit-job/${idToEdit}`, fetchOptions).then(res => res.json())
        } else {
            const fetchOptions = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInputs)
            }

            let result = await fetch('/submit-job', fetchOptions).then(res => res.json())
        }

        document.getElementById('successMessage').classList.remove('nonee')
        document.getElementById('successMessage').classList.add('showing')
        setTimeout(function () { document.getElementById('successMessage').classList.remove('showing'); }, 999)
        setTimeout(function () { document.getElementById('successMessage').classList.add('nonee'); }, 1000)
        companyName.value = ''
        companyLocation.value = ''
        jobTitle.value = ''
        jobDate.value = ''
        jobPost.value = ''
        assessmentLink.value = ''
    }
    document.getElementById('resumeww').innerText = 'New Job Application. Good Luck!'
    idToEdit = 0
}
async function myFunction(event) {
    let chosenValue = event.target.value
    let idJob = event.target.id
    const fetchOptions = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chosenValue: chosenValue })
    }

    let result = await fetch(`/edit-status/${idJob}`, fetchOptions).then(res => res.json())
    let statusLocation = document.getElementsByClassName('gettingOption')
    for(let i = 0 ; i < statusLocation.length; i++){
    switch(document.getElementsByClassName('gettingOption')[i].value) {
        case 'Declined':
            statusLocation[i].classList.add('fail-status')
            statusLocation[i].classList.remove('success-status')
            statusLocation[i].classList.remove('pending-status')
          break;
        case 'Approved':
            statusLocation[i].classList.add('success-status')
            statusLocation[i].classList.remove('fail-status')
            statusLocation[i].classList.remove('pending-status')

          break;
        default:
            statusLocation[i].classList.add('pending-status')
            statusLocation[i].classList.remove('fail-status')
            statusLocation[i].classList.remove('success-status')
        }
    }
}

async function updateData() {
    let settings = {
        headers: { 'Content-Type': 'application/json' }
    }

    jobs = await fetch('./job-list', settings).then(res => res.json());
    // jobs.map((element) => { return console.log('element', element) })
    document.getElementById('tableHere').innerHTML =
        jobs.map((element, index) => {
            return `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.company}</td>
        <td>${element.location}</td>
        <td>${element.title}</td>
        <td>${element.job_date}</td>
        <td>${element.job_post}</td>
        <td>${element.assessment}</td>
        <td> <select id="${element.id}" onchange="myFunction(event)" class="form-select form-select-sm gettingOption" 
        aria-label=".form-select example" style="width:80px">
        <option selected>${element.job_status}</option>
        <option value="Declined" style="color:red">Declined</option>
        <option value="Pending" style="color:orange">Pending</option>
        <option value="Approved" style="color:green">Approved</option>
        </select>
        </td>
        <td>
        <button id="${element.id}" data-bs-dismiss="modal" onclick="editJob(event)" class="btn btn-sm dark3" style="height:25px;width:25px"><i id="${element.id}" class="fas fa-pen"></i></button>
        <button id="${element.id}" onclick="deleteJob(event)" class="btn btn-sm dark3" style="height:25px;width:25px"><i  id="${element.id}" class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </td>
      </tr>`
        })
        document.getElementById('resumeww').innerText = 'New Job Application. Good Luck!'
    let statusLocation = document.getElementsByClassName('gettingOption')
    for(let i = 0 ; i < statusLocation.length; i++){
    switch(document.getElementsByClassName('gettingOption')[i].value) {
        case 'Declined':
            statusLocation[i].classList.add('fail-status')
          break;
        case 'Approved':
            statusLocation[i].classList.add('success-status')
          break;
        default:
            statusLocation[i].classList.add('pending-status')
        }
    }
}
async function hideNotResume(event) {

    chosen = event.target.id
    array.forEach(selectedOne => {
        (selectedOne !== event.target.id) ? document.getElementById(selectedOne).classList.add('display-none') : '';
        (selectedOne !== event.target.id) ? setTimeout(function () { document.getElementById(selectedOne).classList.add('nonee'); }, 500) : ''
    });
    if (event.target.id === 'applied-jobs') {
        updateData()

    }
    document.getElementById(event.target.id).classList.add('transition-up');
    setTimeout(function () {document.getElementById(`${chosen}-content`)? document.getElementById(`${chosen}-content`).classList.remove('nonee'):''; }, 700);

    // (event.target.id === 'cover-letter') ? document.getElementById(coverlet).classList.remove('nonee') : '';

}
function showNotResume() {
    array.forEach(selectedOne => {
        (selectedOne !== chosen) ? document.getElementById(selectedOne).classList.remove('nonee') : '';

        (selectedOne !== chosen) ? setTimeout(function () { document.getElementById(selectedOne).classList.remove('display-none'); }, 300) : ''

    })
    document.getElementById(chosen).classList.remove('transition-up')
    document.getElementById(`${chosen}-content`)? document.getElementById(`${chosen}-content`).classList.add('nonee'): ''


}
async function editJob(event) {
    let jobId = event.target.id
    idToEdit = jobId
    let data = await fetch(`/get-info/${jobId}`).then(res => res.json())
    var myModal = new bootstrap.Modal(document.getElementById('addJobs'))
    myModal.toggle()

    companyName.value = data[0].company
    companyLocation.value = data[0].location
    jobTitle.value = data[0].title
    jobDate.value = data[0].job_date
    jobPost.value = data[0].job_post
    assessmentLink.value = data[0].assessment

    document.getElementById('resumeww').innerText = 'Editing previous Job Application'
 
}

async function deleteJob(event) {
    let jobId = event.target.id
    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    let result = await fetch(`/delete-job/${jobId}`, fetchOptions).then(res => res.json())
    updateData()
    // var myModal2 = new bootstrap.Modal(document.getElementById('viewJobs'))
    // myModal2.toggle()
}

document.getElementById('theme').addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        document.querySelector('body').classList.add('dark')
        document.getElementById('modalTheme0').classList.add('dark2')
        document.getElementById('modalTheme1').classList.add('dark2')
        document.getElementById('modalTheme2').classList.add('dark2')
        document.getElementById('modalTheme3').classList.add('dark2')
        document.querySelector('table').classList.add('table-dark')
        document.getElementById('applied-jobs').classList.remove('btn-hvr')
        document.getElementById('applied-jobs').classList.add('btn2-hvr')
        document.getElementById('resume').classList.remove('btn-hvr')
        document.getElementById('resume').classList.add('btn2-hvr')
        document.getElementById('cover-letter').classList.remove('btn-hvr')
        document.getElementById('cover-letter').classList.add('btn2-hvr')
        document.getElementById('viewHistory').classList.remove('scanfcode')
        document.getElementById('viewHistory').classList.add('scanfcode2')
        document.getElementById('jobToggle').classList.remove('scanfcode')
        document.getElementById('jobToggle').classList.add('scanfcode2')
        document.getElementById('submitToggle').classList.remove('submitBtn')
        document.getElementById('submitToggle').classList.add('submitBtn2')


    } else {
        console.log("Checkbox is not checked..");
        document.querySelector('body').classList.remove('dark')
        document.getElementById('applied-jobs').classList.remove('btn2-hvr')
        document.getElementById('applied-jobs').classList.add('btn-hvr')
        document.getElementById('resume').classList.remove('btn2-hvr')
        document.getElementById('resume').classList.add('btn-hvr')
        document.getElementById('cover-letter').classList.remove('btn2-hvr')
        document.getElementById('cover-letter').classList.add('btn-hvr')
        document.getElementById('modalTheme0').classList.remove('dark2')
        document.getElementById('modalTheme1').classList.remove('dark2')
        document.getElementById('modalTheme2').classList.remove('dark2')
        document.getElementById('modalTheme3').classList.remove('dark2')
        document.querySelector('table').classList.remove('table-dark')
        document.getElementById('viewHistory').classList.add('scanfcode')
        document.getElementById('viewHistory').classList.remove('scanfcode2')
        document.getElementById('jobToggle').classList.add('scanfcode')
        document.getElementById('jobToggle').classList.remove('scanfcode2')
        document.getElementById('submitToggle').classList.add('submitBtn')
        document.getElementById('submitToggle').classList.remove('submitBtn2')
    }

})