$(document).ready(function() {

  var allDonutData,
      donutsToday,
      donutsHistory,
      templateToday = Handlebars.compile($("#donutDataToday").html()),
      templateHistory = Handlebars.compile($("#donutDataHistory").html()),
      valuesToSubmit,
      myModal = $('#myModal'),
      outputToday = $('#outputToday'),
      outputHistory = $('#outputHistory'),
      myInput = $('#myInput'),
      goodCoworkerForm = $('#goodCoworkerForm');

  $.get('api/v1/donutstoday.json').success(function(data) {
    donutsToday = {donuts: data};
    $.each(donutsToday.donuts, function(index, donut) {
      if (donut.number > 1) {
        donut.isPlural = 'donuts';
      } else {
        donut.isPlural = 'donut';
      }
    });
    outputToday.html(templateToday(donutsToday));
  });

  $.get('api/v1/donutshistory.json').success(function(data) {
    donutsHistory = {donuts: data};
    $.each(donutsHistory.donuts, function(index, donut) {
      if (donut.number > 1) {
        donut.isPlural = 'donuts';
      } else {
        donut.isPlural = 'donut';
      }
    });
    outputHistory.html(templateHistory(donutsHistory));
  });

  myModal.on('shown.bs.modal', function () {
    myInput.focus();
  });

  goodCoworkerForm.submit(function(e) {  
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
        myModal.modal('hide');
        $('input').val('');
    });
    return false; // prevents normal behaviour
  });
});