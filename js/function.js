// Alert check

const showAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn btn-close"></button></p>`;
};

/**
 * Are calculator
 */

const areaCal = (type, val1, val2) => {
  if (type == "Rectangle") {
    return showAlert(` The area of Rectangle is ${val1 * val2} `, "success");
  }

  if (type == "Square") {
    return showAlert(` The area of Square is ${val1 * val1} `, "success");
  }
  if (type == "Triangle") {
    return showAlert(
      ` The area of Triangle is ${0.5 * val1 * val2} `,
      "success"
    );
  }
  if (type == "Circle") {
    return showAlert(
      ` The area of Circle is ${3.1416 * (val1 * val1)} `,
      "success"
    );
  }
};
