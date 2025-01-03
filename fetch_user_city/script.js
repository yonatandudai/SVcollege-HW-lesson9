//Q4. Fetch the user data from the following API: https://jsonplaceholder.typicode.com/users
// and display in html the username and city of each user.
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataArray = await response.json();
        
                // Create a container for the user list
                const userList = document.createElement('ul');
                document.body.appendChild(userList);
                
        // Iterate through the data array and create list items
        dataArray.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.address.city}`;
            userList.appendChild(listItem);
        });   
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();