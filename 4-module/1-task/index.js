function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  friends.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.firstName + " " + " " + element.lastName;
    ul.appendChild(li);
  });
  return ul;
}
