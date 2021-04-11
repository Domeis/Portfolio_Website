const tl = gsap.timeline({ defaults: { ease: "power0.out" } });

tl.fromTo(
  "nav",
  { x: "-100%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 1 }
);

tl.fromTo(
  ".name",
  { y: "50%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.75 }
);
tl.from(".name-description", { opacity: 0, duration: 1 });
tl.from(".landing_pic", { opacity: 0, duration: 1 }, "-=1");

// expanding project

const projects = document.querySelectorAll(".projectCard");

const onCardClick = async (e) => {
  const projectCard = e.currentTarget;
  //clone card
  const cardClone = projectCard.cloneNode(true);
  // get the location of the card in the view
  const { top, left, width, height } = projectCard.getBoundingClientRect();
  //position the clone on top of the Original
  cardClone.style.position = "fixed";
  cardClone.style.top = top + "px";
  cardClone.style.left = left + "px";
  cardClone.style.width = width + "px";
  cardClone.style.height = height + "px";
  // hide original card with opacity
  projectCard.style.opacity = "0";
  // add card to the same container
  projectCard.parentNode.appendChild(cardClone);
  //expansion
  requestAnimationFrame(() => {
    cardClone.style.transition = `
    width 350ms ease-in-out, 
    height 350ms ease-in-out, 
    left 350ms ease-in-out,
    top 350ms ease-in-out
    `;
    cardClone.style.top = 0;
    cardClone.style.left = 0;
    cardClone.style.width = "100vw";
    cardClone.style.height = "100vh";
  });
};
projects.forEach((projectCard) =>
  projectCard.addEventListener("click", onCardClick)
);
