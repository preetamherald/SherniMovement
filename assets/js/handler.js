window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      document.getElementById('gform').style.display = "none";
      document.getElementById('thankyou_message').style.display = "block";
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://script.google.com/macros/s/AKfycbw_TRfpxzFlTH1X6DUJEfVSDDQPAzjHtdFDd4H2/exec");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
 
  // Access the form element...
  var form = document.getElementById("gform");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});