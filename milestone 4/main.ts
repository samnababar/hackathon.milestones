const form = document.getElementById('ResumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// HTML form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collection of input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the Resume content dynamically
    const resumeHTML = `
        <h2><b>Editable Resume</b></h>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="True">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="True"> ${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="True">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="True">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="True">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="True">${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});
