async function getapi() {
  const response = await fetch(
    `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc`)
  var data = await response.json();
  let weather = Object.values(data);
    for (i = 0; i < weather.length; i++) {
      const para = document.createElement("p");
      para.innerText = weather[i];
      document.body.appendChild(para);
    }
  }



getapi()


/*  for (i = 0; i < weather.length; i++) {
    const node = document.createElement("p");
    const textnode = document.createTextNode(weather[i]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
  }
  
  const para = document.createElement("p");
  para.innerText = weather[3];
  document.body.appendChild(para);
myFunction();

const baseUrl = "https://jsonplaceholder.typicode.com";

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchPost(id) {
  const apiURL = `${baseUrl}/posts/${id}`;
  return fetchJSON(apiURL);
}

async function fetchUser(id) {
  const apiURL = `${baseUrl}/users/${id}`;
  return fetchJSON(apiURL);
}

async function main() {
  const postId = 1;
  const post = await fetchPost(postId);

  const userId = post.userId;
  const user = await fetchUser(userId);

  const para = document.createElement("p");
para.innerText = user.name;
document.body.appendChild(para);
}

main();*/