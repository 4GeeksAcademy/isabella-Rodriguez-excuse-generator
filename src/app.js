/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

function arrayIndexRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  console.log(arr);
  console.log(arr[index]);
  return arr[index];
}

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["joger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yellerd at my", "stole my", "bit my"];
  let posetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];
  return (
    `${arrayIndexRandom(pronoun)}` +
    " " +
    `${arrayIndexRandom(subject)}` +
    " " +
    `${arrayIndexRandom(action)}` +
    " " +
    `${arrayIndexRandom(posetion)}` +
    " " +
    `${arrayIndexRandom(where)}`
  );
};
