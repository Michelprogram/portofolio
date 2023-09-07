import "../assets/styles/index.scss";

const METEOR_NUMBER = 8;

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumberNotFloor = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

const meteorContainer = document.querySelector(
  ".meteor-container"
) as HTMLDivElement;

for (let i = 0; i < METEOR_NUMBER; i++) {
  const meteor = document.createElement("div");
  const [left, top] = [randomNumber(50, 150), randomNumber(30, 40)];
  meteor.classList.add(`meteor-${i}`);
  meteor.style.left = `${left}%`;
  meteor.style.top = `${top}%`;

  meteor.style.animationName = "meteor";
  meteor.style.animationDuration = `${randomNumberNotFloor(3, 6)}s`;
  meteor.style.animationIterationCount = "infinite";
  meteor.style.animationTimingFunction = "linear";

  meteorContainer.appendChild(meteor);
}
