const data = [
  {
    name: "Tanya Sinclair",
    img: "images/image-tanya.jpg",
    role: "UX Engineer",
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job
  of my dreams and so excited about the future. ”`,
  },
  {
    name: "John Tarkpor",
    img: "images/image-john.jpg",
    role: "Junior Front-end Developer",
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
  },
];
let currentIndex = 0;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const img = document.querySelector("#img");
const role = document.querySelector("#role");
const name = document.getElementById("name");
const text = document.getElementById("text");

function changePerson(num) {
  const newIndex = currentIndex + num;

  if (newIndex < 0) currentIndex = data.length - 1;
  else if (newIndex >= data.length) currentIndex = 0;
  else currentIndex = newIndex;

  const newPerson = data[currentIndex];
  img.src = newPerson.img;
  text.textContent = newPerson.testimonial;
  name.textContent = newPerson.name;
  role.textContent = newPerson.role;
}

next.addEventListener("click", () => {
  changePerson(+1);
});

prev.addEventListener("click", () => {
  changePerson(-1);
});
