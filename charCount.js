let char = document.querySelector("#char");
let charAmount = document.querySelector("#charAmount");
let wordCount = document.querySelector("#wordCount");
let wordArray;

char.addEventListener("input", () => {
  charAmount.textContent = char.value.length;
  wordArray = char.value.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordCount.textContent = i;
  }
  if (
    char.value.endsWith(".") ||
    char.value.endsWith("?") ||
    char.value.endsWith("!")
  ) {
    wordCount.textContent = Number(wordCount.textContent) + 1;
  }
});
