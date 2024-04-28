const text =
  "Packing my stuff with a heavy heart, I feel like I can't do it. I've hated the thought of going since then, asking why I can't be happy for even a short period of time. Over the last few days, I've been throwing about ideas of me leaving home and the distance separate us both, but at this point, I can no longer ignore them and it's time to accept the truth. Even though it breaks my heart, I want to keep my sadness from you, but I'm sorry, my love , I just can't handle it anymore. I just don't want to be separated from you; I just cannot stand the thought of you being away from me. Even just by watching you sleep earlier, I find myself wondering why it seems like time goes by faster when I'm happy. How come it can't pause itself for even a moment so that I can treasure each and every moment of my life? But I also want to express my appreciation for everything, palangga, and making the most of my remaining time here. When you're not too busy, my love, or when I return here, I want to see you as soon as possible. I will never stop loving you, Langga, even though I will be away for a while. I am forever grateful for our time together and the wonderful memories we are creating. This is a see you later rather than a goodbye. Just wait until I come home. I love you so much palangga ko!";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
