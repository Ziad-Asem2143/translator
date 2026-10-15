let originText = document.querySelector("#origin-text");
let translatedText = document.querySelector("#translated-text");
let language1 = document.querySelector("#language-translate-from");
let language2 = document.querySelector("#language-translate-into");
let translate = document.querySelector(".translate");
import countries from "/translator-data.js";

Object.entries(countries).map(([key, value]) => {
  language1.innerHTML += `  <option value="${key}">${value}</option>`;
  language2.innerHTML += `  <option value="${key}">${value}</option>`;
});

translate.addEventListener("click", async () => {
  if (originText.value == "") {
    translatedText.value = "There is no text to translate";
    return;
  }
  let data = await fetch(
    `https://api.mymemory.translated.net/get?q=${originText.value}&langpair=${language1.value}|${language2.value}`,
  );
  data = await data.json();
  translatedText.value = await data.responseData.translatedText;
});
