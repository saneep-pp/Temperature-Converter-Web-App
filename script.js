const cel = document.querySelector(".celsius");
const fahren = document.querySelector(".fahrenheit");

cel.addEventListener("input", () => {
  const result = (parseFloat(cel.value) * 9) / 5 + 32;
  fahren.value = parseFloat(result.toFixed(2));
});

fahren.addEventListener("input", () => {
  const result = ((parseFloat(fahren.value) - 32) * 5) / 9;
  cel.value = parseFloat(result.toFixed(2));
});
