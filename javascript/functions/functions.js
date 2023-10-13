export function updateElementText(elements, text) {
    elements.forEach((element) => {
      element.textContent = text;
    });
  }