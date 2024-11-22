
window.addEventListener('load', ()=>{
    let name = localStorage.getItem('input_name_data');
    document.getElementById('form_name')!.textContent = name;

    let title = localStorage.getItem('input_title_data');
    document.getElementById('title_change')!.textContent = title;

    let phone = localStorage.getItem('input_phone_data');
    document.getElementById('phone_change')!.textContent = phone;

    let Email = localStorage.getItem('input_email_data');
    document.getElementById('email_change')!.textContent = Email;

    let linkedin = localStorage.getItem('input_linkedin_data');
    document.getElementById('linkedin_change')!.textContent = linkedin;

    let degree = localStorage.getItem('input_degree_data');
    document.getElementById('degree_change')!.textContent = degree;

    let university = localStorage.getItem('input_university_data');
    document.getElementById('university_change')!.textContent = university;

    let skill1 = localStorage.getItem('input_skill1_data');
    document.getElementById('skill1_change')!.textContent = skill1;

    let skill2 = localStorage.getItem('input_skill2_data');
    document.getElementById('skill2_change')!.textContent = skill2;

    let skill3 = localStorage.getItem('input_skill3_data');
    document.getElementById('skill3_change')!.textContent = skill3;

// work experience yahn se shuro ho rha hai bacho    
    let job_title = localStorage.getItem('input_job_title_data');
    document.getElementById('input_job_title_change')!.textContent = job_title;

    let company = localStorage.getItem('input_company_data');
    document.getElementById('company_change')!.textContent = company;

    let start_year = localStorage.getItem('input_start_year_data');
    document.getElementById('start_year_change')!.textContent = start_year;

    let End_year = localStorage.getItem('input_end_year_data');
    document.getElementById('start_year_change')!.textContent = End_year;


    const profilePicture = localStorage.getItem('form_profilePic');

    if (profilePicture) {
        (document.getElementById('profilePicPreview') as HTMLImageElement).src = profilePicture;
      }
})


// const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
// const baseUrl = ''
// const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL

// // Set the resume link in the DOM
// const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
// resumeLink.setAttribute('href', uniqueResumeUrl);
// resumeLink.textContent = uniqueResumeUrl;




// // Copy link to clipboard functionality
// document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
//  navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
//    alert('Resume link copied to clipboard!');
//  });
// });



document.getElementById('editBtn')!.addEventListener('click', () => {
  window.history.back();
});

document.getElementById('printBtn')!.addEventListener('click', () => {
    window.print(); 
});






