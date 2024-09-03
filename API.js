

async function callApi() {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    console.log(result);
    document.getElementById('userData').innerHTML=result.map((user)=>
        `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.website}</td>
        <td>${user.phone}</td>
        </tr>`
    ).join("");
}

callApi();

