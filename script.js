// function InsertRecord()
// {
//     var job_title = document.getElementById("job_title").value;
//     var company_name = document.getElementById("company_name").value;
//     var city = document.getElementById("city").value;
//     var state = document.getElementById("state").value;
//     var job_type = document.getElementById("job_type").value;
//     var qualification = document.getElementById("qualification").value;
//     var average_rating = document.getElementById("average_rating").value;
//     var company_culture = document.getElementById("company_culture").value;
//     var growth_opppor = document.getElementById("growth_opppor").value;
//     var people = document.getElementById("people").value;
//     var person = document.getElementById("person").value;
//     var rewards = document.getElementById("rewards").value;
//     var support = document.getElementById("support").value;
//     var way = document.getElementById("way").value;
//     var work = document.getElementById("work").value;
//     var des = document.getElementById("des").value;
//     var final = document.getElementById("final").value;
//     var polarity = document.getElementById("polarity").value;
//     var sentiment = document.getElementById("sentiment").value;
    


//     var connection = new ActiveXObject("ADODB.Connection");
//     var connectionstring = "Data Source={local};Initial Catalog=sample;Provider=SQLOLEDB";
//     connection.open(connectionstring)
//     var rs = new ActiveXObject("ADODB.Recordset"); 
//     rs.Open("insert into dashboard_data values('" + job_title + "','" + company_name + "','"+ city + "','" + state + 
//     "','"+job_type+ "','"+qualification+"','"+average_rating+"','"+company_culture+"','"+growth_opppor + "','"+people+
//     "','"+person+"','"+rewards+"','"+support+"','"+way+"','"+work+"','"+des+"','"+final+"','"+polarity+"','"+sentiment+"')", connection);
//     alert("Insert Record Successfuly");
//     connection.close();
// }

// function exportToExcel() {
//     // Get form data
//     var formData = new FormData(document.forms[0]);
  
//     // Create workbook
//     var workbook = XLSX.utils.book_new();
  
//     // Create worksheet
//     var worksheet = XLSX.utils.json_to_sheet([formDataToObject(formData)]);
  
//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
//     // Export workbook to Excel file
//     XLSX.writeFile(workbook, 'data.xlsx');
//   }
  
//   function formDataToObject(formData) {
//     var obj = {};
//     for (var key of formData.keys()) {
//       obj[key] = formData.get(key);
//     }
//     return obj;
//   }

//   document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
//     saveFormData(); // Call function to save form data
//   });

//   function saveFormData() {
//     alert("IN");
//     // Get form data
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
  
//     // Create CSV data
//     var csvData = 'Name,Email\n' + name + ',' + email;
  
//     // Create download link
//     var downloadLink = document.createElement('a');
//     downloadLink.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData));
//     downloadLink.setAttribute('download', 'form_data.csv');
//     downloadLink.style.display = 'none';
//     document.body.appendChild(downloadLink);
  
//     // Click download link to save file
//     downloadLink.click();
//   }

  var form = document.querySelector('data-form="form-1"');
   
  
  form.addEventListener('submit', (e)=>{
  e.preventDefault();
  document.querySelector("#sub1").value="Submitting..";

  var data = new FormData(form);
  //let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycby5IJGuou_3ICj1DTiNpI-O9ZdxhX2bNlPgHcqYBpy0XIfCGBI6JZGYu0vm0NWdJGwjTQ/exec', {
  method:"POST",
  body:data
  })
  .then(res => res.text())
  .then(data =>{
  document.querySelector("#msg1").innerHTML=data;
  document.querySelector("#sub1").value="Submit"
  });
  })

  

  
  
  