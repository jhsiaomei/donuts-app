$(document).ready(function() {

  var allDonutData,
      donutsToday,
      donutsHistory,
      template = Handlebars.compile($("#donut-data").html()),
      valuesToSubmit;

  $.get('api/v1/alldonuts.json').success(function(data) {
    allDonutData = {donuts: data};
    // $('#output').html(template(allDonutData));
  });

  $.get('api/v1/donutstoday.json').success(function(data) {
    donutsToday = {donuts: data};
    // $('#output').html(template(donutsToday));
  });

  $.get('api/v1/donutshistory.json').success(function(data) {
    donutsHistory = {donuts: data};
    $('#output').html(template(donutsHistory));
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });

  $('form').submit(function(e) {  
    e.preventDefault();

    var valuesToSubmit = $(this).serialize();

    console.log(valuesToSubmit);
    $.ajax({
        type: "POST",
        url: $(this).attr('action'), //submits it to the given url of the form
        data: valuesToSubmit,
        dataType: "JSON" // you want a difference between normal and ajax-calls, and json is standard
    }).done(function(){
        console.log("success");
        $("#myModal").modal('hide');
    });
    return false; // prevents normal behaviour
  });
});