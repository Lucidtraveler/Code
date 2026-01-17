document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleMorpheus");
  const frame = document.getElementById("morpheusFrame");

  btn.addEventListener("click", (e) => {
    e.preventDefault(); // stop the # from jumping to top

    const isHidden = frame.style.display === "none";
    frame.style.display = isHidden ? "block" : "none";
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const isHidden = frame.style.display === "none";
  frame.style.display = isHidden ? "block" : "none";
  btn.textContent = isHidden ? "Hide: The Fate of Morpheus" : "The Fate of Morpheus";
});

