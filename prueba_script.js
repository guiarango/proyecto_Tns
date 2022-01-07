const embedTag = document.querySelector("body");

const changedValue = function (object) {
  return object.innerHTML
    .replace(/embed/g, "iframe")
    .replace(/http/g, "https")
    .replace(/GenPago/g, "GenPagoif");
};

embedTag.innerHTML = changedValue(embedTag);
