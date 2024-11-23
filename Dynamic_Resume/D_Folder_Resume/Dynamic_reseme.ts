
window.addEventListener('load', () => {
  let name = localStorage.getItem('input_name_data');
  document.getElementById('form_name')!.textContent = name;

  let title = localStorage.getItem('input_title_data');
  document.getElementById('title_change')!.textContent = title;

  let phone = localStorage.getItem('input_phone_data');
  document.getElementById('phone_change')!.textContent = phone;

  let email = localStorage.getItem('input_email_data');
  document.getElementById('email_change')!.textContent = email;

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

  let jobTitle = localStorage.getItem('input_job_title_data');
  document.getElementById('input_job_title_change')!.textContent = jobTitle;

  let company = localStorage.getItem('input_company_data');
  document.getElementById('company_change')!.textContent = company;

  let startYear = localStorage.getItem('input_start_year_data');
  document.getElementById('start_year_change')!.textContent = startYear;

  let endYear = localStorage.getItem('input_end_year_data');
  document.getElementById('start_year_change')!.textContent = endYear;

  const profilePicture = localStorage.getItem('form_profilePic');
  if (profilePicture) {
      (document.getElementById('profilePicPreview') as HTMLImageElement).src = profilePicture;
  }

  // URL generation
  const userName = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user';
  const baseUrl = window.location.origin + window.location.pathname; 
  const uniqueResumeUrl = `${baseUrl}?user=${userName}`; 

// Setting up the link
  const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
  resumeLink.setAttribute('href', uniqueResumeUrl);
  resumeLink.setAttribute('target', '_blank'); 
  resumeLink.textContent = "Share Resume Link";

  // Copy link button
  document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
      navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
          alert('Resume link copied to clipboard!');
      });
  });

  // Edit button
  document.getElementById('editBtn')!.addEventListener('click', () => {
      window.history.back();
  });

  // Print button
  document.getElementById('printBtn')!.addEventListener('click', () => {
      window.print();
  });
});





