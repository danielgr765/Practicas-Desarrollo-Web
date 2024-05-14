let password;

if (password === 8) {
    console.log("Welcome");
} else if (password <= 8) {
    console.log("Password is too short");
} else if (password >= 8){
    console.log("Password is too long");
    console.log("Password should be 8 characters");
} else {
    console.log("Please provide a password");
}