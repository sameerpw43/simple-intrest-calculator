function calculate() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var startDate = new Date(document.getElementById("start-date").value);
  var endDate = new Date(document.getElementById("end-date").value);

  
  var diffInMs = endDate - startDate;
  var diffInYears = diffInMs / (1000 * 60 * 60 * 24);

  var interest = (principal * rate * diffInYears) / 36500;

  var resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "No of Day: "+diffInYears+' Intrest is' + interest.toFixed(2);
}