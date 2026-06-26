function generateCertificate() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const marks = document.getElementById("marks").value;

    const htmlCompleted = document.getElementById("html").checked;
    const cssCompleted = document.getElementById("css").checked;
    const jsCompleted = document.getElementById("js").checked;

    const certificate = document.getElementById("certificate");

    if (
        !name || !date || !marks || !htmlCompleted || !cssCompleted || !jsCompleted

    ) {
        certificate.innerHTML = "<h3> Please Complete all Fields</h3>";
        return;
    }
    document.getElementById("certificate").style.display="block";
    certificate.innerHTML = `
    <div class="certificate-box">
    <h2><i>Certificate of Completion</i></h2>
    <p>This is to Certify that </p>
    <div class="name">${name} </div>
    <p> 
        Has Successfully Completed
        HTML,CSS & JAVASCRIPT FUNDAMENTALS
    </p>
    <p>Date:${date}</p>
    <div>Score Achieved:${marks}</div>
    <p> Congratulations on Completing the Course!!</p>
    </div>`;


} 