/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
  go to course files readings: Smashing-Magazine-Dyslexia
*/
function dyslexiaMode() {
  if (document.querySelector('body').className != "dyslexia-mode") {
    document.querySelector('body').className = "dyslexia-mode";
  } else {
    document.querySelector('body').className = "";
  }
}
