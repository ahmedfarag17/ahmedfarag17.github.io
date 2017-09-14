
function fillIn(identifier){

  switch (identifier) {
    case "bp": window.location = "bloodpressure.html"; return;
    case "diabetes": window.location = "diabetes.html";return;
    case "med": window.location = "medication.html";return;
    case "weight": window.location = "nutrition.html";return;
    default:
      return;

  }
}
