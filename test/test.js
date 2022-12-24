const createElement = (element, styles) => {
  const el = document.createElement(element);

  for (let key in styles) {
    el.style[key] = styles[key];
  }

  return el;
};

const insertation = () => {
  const body = document.querySelector("body");

  const highestZIndex = getMaxZIndex()
  console.log(highestZIndex + 100)
  console.log(highestZIndex)

  const div = createElement("div", {
    position: "fixed",
    right: 0,
    top: 0,
    width: "400px",
    height: "100%",
    zIndex: 100,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const inner = createElement("div", {
    width: "98%",
    height: "95%",
    margin: "20px",
    zIndex: highestZIndex + 100,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"

  });

  div.appendChild(inner);
  body.appendChild(div);
};

insertation();

function getMaxZIndex() {
  const allZIndexesInPages = Array.from(
    document.querySelectorAll("body *"),
    (el) => parseFloat(window.getComputedStyle(el).zIndex)
  ).filter((zIndex) => !Number.isNaN(zIndex));
  return Math.max(...allZIndexesInPages, 0);
}
