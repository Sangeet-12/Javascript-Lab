// External JavaScript File - script.js

// Student details object
const studentData = {
    name: "Sangeet",
    prn: "24070521238",
    department: "Computer Science & Engineering",
    semester: "5th Semester"
};

// Function called on page load
function loadUserInfo() {
    // Welcome message display
    const welcomeMsg = document.getElementById("welcome-msg");
    if (welcomeMsg) {
        welcomeMsg.textContent = `Welcome, ${studentData.name}!`;
    }

    // User details display
    const userBox = document.getElementById("user-info");
    if (userBox) {
        userBox.innerHTML = `
            <p><strong>Name:</strong> ${studentData.name}</p>
            <p><strong>PRN:</strong> ${studentData.prn}</p>
            <p><strong>Department:</strong> ${studentData.department}</p>
            <p><strong>Semester:</strong> ${studentData.semester}</p>
        `;
    }
}

// Function called from External JS button
function showExternalDemo() {
    alert("External JS: Function called from external script.js file!");
}

// Run loadUserInfo when window finishes loading
window.onload = loadUserInfo;
