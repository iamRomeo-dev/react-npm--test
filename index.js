function romeoShadowUn(options) {
  let images = document.querySelectorAll(".easyBoxShadowBitche");

  if (options.shadow_type === "soft") {
    options.shadow_type = "rgba(0, 0, 0, 0.2)";
  } else {
    options.shadow_type = "red";
  }

  images.forEach((image) => {
    image.style.boxShadow = `${options.shadow_type} 0px 6px 20px`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.romeoShadowUn = romeoShadowUn;
