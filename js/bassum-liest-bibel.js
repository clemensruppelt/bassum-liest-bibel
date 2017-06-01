$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    //$('#order-form').validator();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//TODO refactor

$('#newsletter-method-select').change(function() {
  refreshEmailInput();
});

$('#newsletter-checkbox').change(function() {
  refreshNewsletterMethodSelect();
  refreshEmailInput();
});


function refreshNewsletterMethodSelect(){
  var enableMethodSelect = $('#newsletter-checkbox').prop('checked');
  $("#newsletter-method-select").prop('disabled', !enableMethodSelect);
}

function refreshEmailInput(){
  //box == checked && select = email
  var enableEmailInput = $('#newsletter-checkbox').prop('checked') && $('#newsletter-method-select').val() == "email";
  $("#email-input").prop('disabled', !enableEmailInput);
}
