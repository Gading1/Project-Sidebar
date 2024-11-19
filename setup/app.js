const sidebar = document.getElementById("sidebar");

function openNav() {
  if ((sidebar.style.width = "0")) {
    document.getElementById("sidebar").style.width = "500px";
  } else {
    document.getElementById("sidebar").style.width = "0";
  }
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
