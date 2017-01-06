function updatePage() {
  var target = selectedValue("page") + "-" + selectedValue("week") + "-post.html"
  window.location.href = target;
}

function selectedValue(elemId) {
  var e = document.getElementById(elemId);
  return e.options[e.selectedIndex].value;
}