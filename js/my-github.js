// Write code here to communicate with Github

document.getElementsByClassName("nav-link js-scroll-trigger")[1]
.addEventListener("click",function(){
  const post = document.getElementById("repos-list");
  const list = document.createElement("LI");
  const newList = post.appendChild(list);
  

  fetch("https://api.github.com/users/DanGhanbari/repos")
    .then(res => res.json())
    .then(data => {
      data.forEach(users => {
        const {name} = users;
        result += document
        .getElementById("repos-list")
        .appendChild(newList).innerHTML = name;})
  
     });
 });