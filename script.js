const url = 'https://us-states.p.rapidapi.com/basic';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c23e679745msha907e176d53c11ep104fe8jsn8c11c9115041',
    'x-rapidapi-host': 'us-states.p.rapidapi.com'
  }
};
/*
fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(`Error fetching data: ${error.message}`));
*/

/*
// working
fetch(url, options)
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  })
  */

async function getStates() {
  let div = document.querySelector("#statesDiv");
  let ul = document.createElement("ul");

  const response = await fetch(url, options);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].name}, ${data[i].postal}`);
    let li = document.createElement("li");
    li.textContent = `${data[i].name}`;
    ul.appendChild(li);
  }
  //console.log(data);
  div.append(ul);
}
getStates();