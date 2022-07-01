let generatedHex;
const randomHex = () => {
  let hexabet = "123456789ABCDEF";
  let hex = "";
  for (let i = 0; i < 6; i++) {
    let value = Math.floor(Math.random() * 14);
    hex += hexabet[value];
  }
  generatedHex = "#" + hex;
  document.getElementById("hex-value").innerHTML = generatedHex;
  document.body.style.backgroundColor = generatedHex;
};

document.querySelector("button").addEventListener("click", randomHex);
