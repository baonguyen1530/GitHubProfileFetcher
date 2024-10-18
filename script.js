const username_input = document.getElementById("username_input").value.trim();
const output = document.getElementById("profile_output");
const button = document.getElementById("button");

button.onclick = function(){
    //check if the username input box is empty or not
    if(!username_input){
        output.innerHTML = "<p class='error'>Please enter a GitHub username.</p>";
        return;
    }

    //output.innerHTML = "<p>Loading...</p>";

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok){
            throw new Error("User not found (status: ${response.status)");
        }
    }
}