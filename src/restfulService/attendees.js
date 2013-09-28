var express = require('express');
var app = express();

var employees =[
{id: 1, lastName: "Acevedo", firstName: "Manny", company: "Server-Microsoft"},
{id: 2, lastName: "Adkins", firstName: "Joy", company: "Server-OK Admin Office of the Courts"},
{id: 3, lastName: "Assaf", firstName: "Christine", company: "Server-HRTact"},
{id: 4, lastName: "Assaf", firstName: "William", company: "Server-Sparkhound"},
{id: 5, lastName: "Awbrey", firstName: "Jason", company: "Server-Improving Enterprises"},
{id: 6, lastName: "Azam", firstName: "Mohammad", company: "Server-Sogeti"},
{id: 9, lastName: "Baehr", firstName: "Tom", company: "Server-Software Solutionwerks"},
{id: 10, lastName: "Barrington", firstName: "Brian", company: "Server-Microsoft"},
{id: 11, lastName: "Baudo", firstName: "Chris", company: "Server-Slalom Consulting"},
{id: 12, lastName: "Bethancourt", firstName: "Jim", company: "Server-Triple Point Technology"},
{id: 13, lastName: "Birkholz", firstName: "Jonathan", company: "Server-Birkholz Creative"},
{id: 14, lastName: "Bogard", firstName: "Jimmy", company: "Server-Headspring"},
{id: 17, lastName: "Brown", firstName: "Barbara", company: "Server-Third Coast Complexity Consultants"},
{id: 18, lastName: "Brown", firstName: "Craig", company: "Server-STEM Resource Partners"},
{id: 23, lastName: "Celaya", firstName: "Juan", company: "Server-COMPU-DATA International"},
{id: 28, lastName: "Champion", firstName: "Tony", company: "Server-Champion DS"},
{id: 29, lastName: "Chataboon", firstName: "Victor", company: "Server-"},
{id: 30, lastName: "Chedgey", firstName: "Chris", company: "Server-Structure101"},
{id: 31, lastName: "Clemmons", firstName: "Eric", company: "Server-"},
{id: 32, lastName: "Cook", firstName: "John Paul", company: "Server-"},
{id: 33, lastName: "Cravey", firstName: "David", company: "Server-Clear Measure"},
{id: 34, lastName: "Culver", firstName: "Brian", company: "Server-Expert Point Solutions"},
{id: 35, lastName: "de la Cruz", firstName: "Rafael", company: "Server-Seneca Resources"},
{id: 36, lastName: "de Nijs", firstName: "Joost", company: "Server-Microsoft"},
{id: 37, lastName: "DeCarlo", firstName: "Paul", company: "Server-Microsoft"},
{id: 38, lastName: "Delendik", firstName: "Yury", company: "Server-Mozilla"},
{id: 39, lastName: "Dyer", firstName: "Andy", company: "Server-ChaiONE"},
{id: 40, lastName: "Egly", firstName: "Nolan", company: "Server-Headspring"},
{id: 41, lastName: "Eller", firstName: "Theresa", company: "Server-Entrance Software"},
{id: 42, lastName: "Floyd", firstName: "Benjamin", company: "Server-Headspring"},
{id: 43, lastName: "Foshee", firstName: "Jacob", company: "Server-Unplugged Development"},
{id: 44, lastName: "Fulcher", firstName: "Stephen", company: "Server-Crocodile Software"},
{id: 45, lastName: "Fulgham", firstName: "Kaleb", company: "Server-PROS"},
{id: 46, lastName: "Furmankiewicz", firstName: "Jacek", company: "Server-PROS"},
{id: 47, lastName: "Gleason", firstName: "Todd", company: "Server-FireHost"},
{id: 50, lastName: "Gros", firstName: "Cody", company: "Server-Sparkhound"},
{id: 51, lastName: "Hagerman", firstName: "Kurt", company: "Server-FireHost"},
{id: 54, lastName: "Huguet", firstName: "Mike", company: "Server-Microsoft"},
{id: 57, lastName: "Hurst", firstName: "Allen", company: "Server-Improving Enterprises"},
{id: 60, lastName: "Jones", firstName: "Zach", company: "Server-WhiteHat Security"},
{id: 61, lastName: "Kenney", firstName: "Sean", company: "Server-Avanade"},
{id: 69, lastName: "Khipple", firstName: "Kanwal", company: "Server-BrightStarr"},
{id: 70, lastName: "Kuskos", firstName: "Johnathan", company: "Server-WhiteHat Security"},
{id: 71, lastName: "Lassala", firstName: "Claudio", company: "Server-Dio Clouds Software"},
{id: 78, lastName: "LeBlanc", firstName: "Thomas", company: "Server-eQHealth Solutions"},
{id: 79, lastName: "Lewallen", firstName: "Ray", company: "Server-Telogical Systems"},
{id: 80, lastName: "Liles", firstName: "Devlin", company: "Server-Improving Enterprises"},
{id: 83, lastName: "Lua", firstName: "Jon", company: "Server-Microsoft"},
{id: 84, lastName: "Lytle", firstName: "Eric", company: "Server-BrightStarr"},
{id: 85, lastName: "Mai", firstName: "Long", company: "Server-Improving Enterprises"},
{id: 86, lastName: "Marsh", firstName: "Ryan", company: "Server-Improving Enterprises"},
{id: 89, lastName: "Mason", firstName: "Jennifer Ann", company: "Server-Rackspace"},
{id: 90, lastName: "Mauer", firstName: "George", company: "Server-Surge"},
{id: 91, lastName: "Moreign", firstName: "Anthony (Tex)", company: "Server-Houston Cloud Computing User Group"},
{id: 98, lastName: "Moreign", firstName: "Valentino", company: "Server-"},
{id: 99, lastName: "Oakman", firstName: "Chris", company: "Server-PROS"},
{id: 100, lastName: "Penchikala", firstName: "Srini", company: "Server-Lead Editor"},
{id: 101, lastName: "Prusakova", firstName: "Jane", company: "Server-Improving Enterprises"},
{id: 102, lastName: "Rayburn", firstName: "Tim", company: "Server-Improving Enterprises"},
{id: 103, lastName: "Raychaudhuri", firstName: "Nilanjan", company: "Server-Typesafe Inc."},
{id: 104, lastName: "Resing", firstName: "Tom", company: "Server-Jive Software"},
{id: 109, lastName: "Reynolds", firstName: "Joe", company: "Server-CODE Consulting"},
{id: 110, lastName: "Reynolds", firstName: "Mark", company: "Server-Southwestern Energy"},
{id: 113, lastName: "Richardson", firstName: "Leland", company: "Server-"},
{id: 114, lastName: "Robles", firstName: "Alonso", company: "Server-Headspring"},
{id: 115, lastName: "Rosenberg", firstName: "Mark", company: "Server-New Horizons"},
{id: 116, lastName: "Sawyer", firstName: "J", company: "Server-CGI"},
{id: 121, lastName: "Schlak", firstName: "Curtis", company: "Server-Curtissimo"},
{id: 125, lastName: "Seetepalli", firstName: "Ram", company: "Server-Stryve Advisors"},
{id: 126, lastName: "Segal", firstName: "Yair", company: "Server-Peach Software Inc"},
{id: 131, lastName: "Sehgal", firstName: "Latish", company: "Server-Improving Enterprises"},
{id: 132, lastName: "Shefman", firstName: "Drew", company: "Server-Twin Technologies"},
{id: 133, lastName: "Sowell", firstName: "Eric", company: "Server-Match.com"},
{id: 134, lastName: "Stewart", firstName: "Robert", company: "Server-Situs Holdings"},
{id: 135, lastName: "Strickland", firstName: "Andrew", company: "Server-Sparkhound"},
{id: 136, lastName: "Sullivan", firstName: "Brian", company: "Server-Improving Enterprises"},
{id: 137, lastName: "Sunar", firstName: "Alper", company: "Server-"},
{id: 138, lastName: "Tennison", firstName: "Erik", company: "Server-Sparkhound"},
{id: 141, lastName: "Thomas", firstName: "Tim", company: "Server-Headspring Mobile"},
{id: 142, lastName: "Vettor", firstName: "Rob", company: "Server-Microsoft"},
{id: 143, lastName: "Vice", firstName: "Ryan", company: "Server-Vice Software"},
{id: 144, lastName: "Vicknair", firstName: "Stacy", company: "Server-Sparkhound"},
{id: 145, lastName: "Weldon", firstName: "Chris", company: "Server-Improving Enterprises"},
{id: 150, lastName: "Wheat", firstName: "Phil", company: "Server-Singularity Innovations"},
{id: 151, lastName: "Wilkinson", firstName: "Mark", company: "Server-ChaiOne"},
{id: 152, lastName: "Wilson", firstName: "Mark", company: "Server-Microsoft"},
{id: 153, lastName: "Woodward", firstName: "Ed", company: "Server-Connexions - Rice University"}
];

app.enable("jsonp callback");
app.get('/', function(req, res) {
  res.set('Content-Type', 'text/javascript');
  if(req.query.name !== undefined){ 
    var name = req.query.name;
    var filtered = employees.filter(function(e){
      var fullName = e.firstName + " " + e.lastName + " " + e.company;
      return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
    res.jsonp(filtered); 
  }
  else {
    res.send(employees);
  }
 
});

app.get('/:id', function(req, res) {
  var idNumber =  parseInt(req.params.id, 10);
  var filtered = employees.filter(function (e) {
    return e.id === idNumber;
  });
  res.jsonp(filtered);
});

var port = process.env.PORT || 3412
app.listen(port);
console.log("Listening at http://localhost:" + port);
