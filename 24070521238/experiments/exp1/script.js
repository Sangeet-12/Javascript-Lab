// External JavaScript File (script.js)

// 1. Console Methods Demonstration
console.log("External JS: File loaded successfully.");
console.info("External JS Info: Initializing script...");
console.warn("External JS Warning: This is a sample warning log.");
console.error("External JS Error: This is a sample error log.");

// 2. Set Welcome Message when page loads
window.onload = function() {
    console.log("External JS: Window load event fired.");
    var welcomeElement = document.getElementById("welcome-msg");
    if (welcomeElement) {
        welcomeElement.innerText = "Welcome to the Web Development Lab Assignment!";
    }
};

// 3. Function called by External JS button
function externalJsDemo() {
    console.log("External JS: externalJsDemo() executed.");
    alert("Hello from External JavaScript!");
}
