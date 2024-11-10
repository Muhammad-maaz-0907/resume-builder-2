// Theme toggle between dark and light modes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

// Load uploaded image for preview
function loadImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById('resumePreview').querySelector('.profile-pic')?.remove();
        const img = document.createElement('img');
        img.src = reader.result;
        img.classList.add('profile-pic');
        document.getElementById('resumePreview').prepend(img);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Generate the resume preview
function generateResume() {
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    const resumeContent = `
        <div style="background-color: #000000; color: #FFDD00; padding: 20px; border-radius: 10px;">
            <h2 style="color: #FFFFFF; text-align: center;">${name}</h2>
            <h3 style="color: #FFFFFF; text-align: center;">${jobTitle}</h3>
            <h4 style="color: white; text-shadow: 0px 0px 8px red; font-size: 1.5em;">Summary</h4>
            <p style="color: #FFDD00;">${summary}</p>
            <h4 style="color: white; text-shadow: 0px 0px 8px red; font-size: 1.5em;">Experience</h4>
            <p style="color: #FFDD00;">${experience}</p>
            <h4 style="color: white; text-shadow: 0px 0px 8px red; font-size: 1.5em;">Education</h4>
            <p style="color: #FFDD00;">${education}</p>
            <h4 style="color: white; text-shadow: 0px 0px 8px red; font-size: 1.5em;">Skills</h4>
            <p style="color: #FFDD00;">${skills}</p>
        </div>
    `;

    document.getElementById("resumePreview").innerHTML = resumeContent;
}

function generatePDF() {
    const element = document.getElementById("resumePreview");
    const options = {
        margin: 1,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
}
