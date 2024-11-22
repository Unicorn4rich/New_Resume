"use strict";
const input_name = document.getElementById('name');
const input_title_id = document.getElementById('input_title_id');
const input_phone_id = document.getElementById('input_phone_id');
const input_email_id = document.getElementById('input_email_id');
const input_linkedin_id = document.getElementById('input_linkedin_id');
const input_degree_id = document.getElementById('input_degree_id');
const input_university_id = document.getElementById('input_university_id');
const input_skill1_id = document.getElementById('input_skill1_id');
const input_skill2_id = document.getElementById('input_skill2_id');
const input_skill3_id = document.getElementById('input_skill3_id');
const input_job_title_id = document.getElementById('input_job_title_id');
const input_company_id = document.getElementById('input_company_id');
const input_start_year_id = document.getElementById('input_start_year_id');
const input_end_year_id = document.getElementById('input_end_year_id');
const input_profile_picture = document.getElementById('profilePicture');
let My_form = document.getElementById('resumeForm');
My_form.addEventListener('submit', (e) => {
    e.preventDefault(); // ye property data submit krwany se rokti hai.
    localStorage.setItem('input_name_data', input_name.value);
    localStorage.setItem('input_title_data', input_title_id.value);
    localStorage.setItem('input_phone_data', input_phone_id.value);
    localStorage.setItem('input_email_data', input_email_id.value);
    localStorage.setItem('input_linkedin_data', input_linkedin_id.value);
    localStorage.setItem('input_degree_data', input_degree_id.value);
    localStorage.setItem('input_university_data', input_university_id.value);
    localStorage.setItem('input_skill1_data', input_skill1_id.value);
    localStorage.setItem('input_skill2_data', input_skill2_id.value);
    localStorage.setItem('input_skill3_data', input_skill3_id.value);
    localStorage.setItem('input_job_title_data', input_job_title_id.value);
    localStorage.setItem('input_company_data', input_company_id.value);
    localStorage.setItem('input_start_year_data', input_start_year_id.value);
    localStorage.setItem('input_end_year_data', input_end_year_id.value);
    // Convert image to Base64 and store in localStorage
    if (input_profile_picture.files && input_profile_picture.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Image = reader.result;
            localStorage.setItem('form_profilePic', base64Image);
            window.location.href = '../D_Folder_Resume/Dynamic_resume.html';
        };
        reader.readAsDataURL(input_profile_picture.files[0]);
    }
    else {
        window.location.href = '../D_Folder_Resume/Dynamic_resume.html';
    }
    console.log(localStorage.getItem('form_profilePic'));
});
