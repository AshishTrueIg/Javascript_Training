
async function fetchData() {
    try {
        const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    console.log(data);

    const user = data.results[0];
    document.getElementById('user-info').innerHTML =`
        <img src="${user.picture.large}">
        <p> Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p> Phone no.: ${user.cell} </p>
        <p> Email: ${user.email} </p>
        <p> Location: ${user.location.city} ${user.location.state} ${user.location.country}</p>`
    } catch (error) {
        console.log(error);
    }
}


document.getElementById("fetch-btn").addEventListener('click',fetchData);