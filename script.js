async function fetchGitHubProfile() {
    const username_input = document.getElementById("username_input").value.trim();
    const output = document.getElementById("profile_output");

    //check if the username input box is empty or not
    if(!username_input){
        output.innerHTML = "<p class='error'>Please enter a GitHub username.</p>";
        return;
    }

    //output.innerHTML = "<p>Loading...</p>";

    try{
        const response = await fetch(`https://api.github.com/users/${username_input}`);

        if(!response.ok){
            throw new Error("User not found (status: ${response.status)");
        }

        const data = await response.json();

        output.innerHTML = `
            <div class="profile-data">
                <img src="${data.avatar_url}" alt="${data.login}" width="100" />
                <h2>${data.name || data.login}</h2>
                <p>${data.bio || "No bio available"}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
                <a href="${data.html_url}" target="_blank">View Profile</a>
            </div>
        `;
    } catch (error){
        output.innerHTML = `<p class='error'>Error: ${error.message}</p>`;
    }
}