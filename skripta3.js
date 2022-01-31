/* navigation menu */

$(document).ready(function () {
  $("ul.tabs li").hover(
    function () {
      var tab_id = $(this).attr("data-tab");
      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");
      $(this).addClass("current");
      $("#" + tab_id)
        .addClass("current")
        .slideToggle(500, "swing");
    }

    /*
    function () {
      var tab_id = $(this).attr("data-tab");
      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");
      $(this).addClass("current");
      $("#" + tab_id)
        .addClass("current")
        .slideUp();
    }*/
  );
});

/*navigation menu JS*/


/* google charts*/

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Kill Em All", 11],
    ["Ride The Lightning", 2],
    ["Master Of Puppets", 20],
    ["..And Justice For All", 20],
    ["Metallica", 7],
    ["Load", 2],
    ["Reload", 2],
    ["St Anger", 2],
    ["Death Magnetic", 2],
  ]);

  var options = {
    title: "Metallica's albums popularity",
    width: "auto",
    height: "auto",
    backgroundColor: "#b1b0b2",
    slices: {
      0: { color: "#8f8f8f" },
      1: { color: "#7a7a7a" },
      2: { color: "#636363" },
      3: { color: "#545454" },
      4: { color: "#4a4a4a" },
      5: { color: "#3d3d3d" },
      6: { color: "#2e2e2e" },
      7: { color: "#1c1c1c" },
      8: { color: "black" },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

var globalResizeTimer = null;

$(window).resize(function () {
  if (globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
  globalResizeTimer = window.setTimeout(function () {
    drawChart();
  }, 100);
});
