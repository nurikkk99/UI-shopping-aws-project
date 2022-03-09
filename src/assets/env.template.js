(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["backUrl"] = "${API_URL}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
