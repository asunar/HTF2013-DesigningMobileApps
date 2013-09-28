var MemoryAdapter = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName + " " + element.company;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
{id: 1, lastName: "Acevedo", firstName: "Manny", company: "Microsoft"},
{id: 2, lastName: "Adkins", firstName: "Joy", company: "OK Admin Office of the Courts"},
{id: 3, lastName: "Assaf", firstName: "Christine", company: "HRTact"},
{id: 4, lastName: "Assaf", firstName: "William", company: "Sparkhound"},
{id: 5, lastName: "Awbrey", firstName: "Jason", company: "Improving Enterprises"},
{id: 6, lastName: "Azam", firstName: "Mohammad", company: "Sogeti"},
{id: 9, lastName: "Baehr", firstName: "Tom", company: "Software Solutionwerks"},
{id: 10, lastName: "Barrington", firstName: "Brian", company: "Microsoft"},
{id: 11, lastName: "Baudo", firstName: "Chris", company: "Slalom Consulting"},
{id: 12, lastName: "Bethancourt", firstName: "Jim", company: "Triple Point Technology"},
{id: 13, lastName: "Birkholz", firstName: "Jonathan", company: "Birkholz Creative"},
{id: 14, lastName: "Bogard", firstName: "Jimmy", company: "Headspring"},
{id: 17, lastName: "Brown", firstName: "Barbara", company: "Third Coast Complexity Consultants"},
{id: 18, lastName: "Brown", firstName: "Craig", company: "STEM Resource Partners"},
{id: 23, lastName: "Celaya", firstName: "Juan", company: "COMPU-DATA International"},
{id: 28, lastName: "Champion", firstName: "Tony", company: "Champion DS"},
{id: 29, lastName: "Chataboon", firstName: "Victor", company: ""},
{id: 30, lastName: "Chedgey", firstName: "Chris", company: "Structure101"},
{id: 31, lastName: "Clemmons", firstName: "Eric", company: ""},
{id: 32, lastName: "Cook", firstName: "John Paul", company: ""},
{id: 33, lastName: "Cravey", firstName: "David", company: "Clear Measure"},
{id: 34, lastName: "Culver", firstName: "Brian", company: "Expert Point Solutions"},
{id: 35, lastName: "de la Cruz", firstName: "Rafael", company: "Seneca Resources"},
{id: 36, lastName: "de Nijs", firstName: "Joost", company: "Microsoft"},
{id: 37, lastName: "DeCarlo", firstName: "Paul", company: "Microsoft"},
{id: 38, lastName: "Delendik", firstName: "Yury", company: "Mozilla"},
{id: 39, lastName: "Dyer", firstName: "Andy", company: "ChaiONE"},
{id: 40, lastName: "Egly", firstName: "Nolan", company: "Headspring"},
{id: 41, lastName: "Eller", firstName: "Theresa", company: "Entrance Software"},
{id: 42, lastName: "Floyd", firstName: "Benjamin", company: "Headspring"},
{id: 43, lastName: "Foshee", firstName: "Jacob", company: "Unplugged Development"},
{id: 44, lastName: "Fulcher", firstName: "Stephen", company: "Crocodile Software"},
{id: 45, lastName: "Fulgham", firstName: "Kaleb", company: "PROS"},
{id: 46, lastName: "Furmankiewicz", firstName: "Jacek", company: "PROS"},
{id: 47, lastName: "Gleason", firstName: "Todd", company: "FireHost"},
{id: 50, lastName: "Gros", firstName: "Cody", company: "Sparkhound"},
{id: 51, lastName: "Hagerman", firstName: "Kurt", company: "FireHost"},
{id: 54, lastName: "Huguet", firstName: "Mike", company: "Microsoft"},
{id: 57, lastName: "Hurst", firstName: "Allen", company: "Improving Enterprises"},
{id: 60, lastName: "Jones", firstName: "Zach", company: "WhiteHat Security"},
{id: 61, lastName: "Kenney", firstName: "Sean", company: "Avanade"},
{id: 69, lastName: "Khipple", firstName: "Kanwal", company: "BrightStarr"},
{id: 70, lastName: "Kuskos", firstName: "Johnathan", company: "WhiteHat Security"},
{id: 71, lastName: "Lassala", firstName: "Claudio", company: "Dio Clouds Software"},
{id: 78, lastName: "LeBlanc", firstName: "Thomas", company: "eQHealth Solutions"},
{id: 79, lastName: "Lewallen", firstName: "Ray", company: "Telogical Systems"},
{id: 80, lastName: "Liles", firstName: "Devlin", company: "Improving Enterprises"},
{id: 83, lastName: "Lua", firstName: "Jon", company: "Microsoft"},
{id: 84, lastName: "Lytle", firstName: "Eric", company: "BrightStarr"},
{id: 85, lastName: "Mai", firstName: "Long", company: "Improving Enterprises"},
{id: 86, lastName: "Marsh", firstName: "Ryan", company: "Improving Enterprises"},
{id: 89, lastName: "Mason", firstName: "Jennifer Ann", company: "Rackspace"},
{id: 90, lastName: "Mauer", firstName: "George", company: "Surge"},
{id: 91, lastName: "Moreign", firstName: "Anthony (Tex)", company: "Houston Cloud Computing User Group"},
{id: 98, lastName: "Moreign", firstName: "Valentino", company: ""},
{id: 99, lastName: "Oakman", firstName: "Chris", company: "PROS"},
{id: 100, lastName: "Penchikala", firstName: "Srini", company: "Lead Editor"},
{id: 101, lastName: "Prusakova", firstName: "Jane", company: "Improving Enterprises"},
{id: 102, lastName: "Rayburn", firstName: "Tim", company: "Improving Enterprises"},
{id: 103, lastName: "Raychaudhuri", firstName: "Nilanjan", company: "Typesafe Inc."},
{id: 104, lastName: "Resing", firstName: "Tom", company: "Jive Software"},
{id: 109, lastName: "Reynolds", firstName: "Joe", company: "CODE Consulting"},
{id: 110, lastName: "Reynolds", firstName: "Mark", company: "Southwestern Energy"},
{id: 113, lastName: "Richardson", firstName: "Leland", company: ""},
{id: 114, lastName: "Robles", firstName: "Alonso", company: "Headspring"},
{id: 115, lastName: "Rosenberg", firstName: "Mark", company: "New Horizons"},
{id: 116, lastName: "Sawyer", firstName: "J", company: "CGI"},
{id: 121, lastName: "Schlak", firstName: "Curtis", company: "Curtissimo"},
{id: 125, lastName: "Seetepalli", firstName: "Ram", company: "Stryve Advisors"},
{id: 126, lastName: "Segal", firstName: "Yair", company: "Peach Software Inc"},
{id: 131, lastName: "Sehgal", firstName: "Latish", company: "Improving Enterprises"},
{id: 132, lastName: "Shefman", firstName: "Drew", company: "Twin Technologies"},
{id: 133, lastName: "Sowell", firstName: "Eric", company: "Match.com"},
{id: 134, lastName: "Stewart", firstName: "Robert", company: "Situs Holdings"},
{id: 135, lastName: "Strickland", firstName: "Andrew", company: "Sparkhound"},
{id: 136, lastName: "Sullivan", firstName: "Brian", company: "Improving Enterprises"},
{id: 137, lastName: "Sunar", firstName: "Alper", company: ""},
{id: 138, lastName: "Tennison", firstName: "Erik", company: "Sparkhound"},
{id: 141, lastName: "Thomas", firstName: "Tim", company: "Headspring Mobile"},
{id: 142, lastName: "Vettor", firstName: "Rob", company: "Microsoft"},
{id: 143, lastName: "Vice", firstName: "Ryan", company: "Vice Software"},
{id: 144, lastName: "Vicknair", firstName: "Stacy", company: "Sparkhound"},
{id: 145, lastName: "Weldon", firstName: "Chris", company: "Improving Enterprises"},
{id: 150, lastName: "Wheat", firstName: "Phil", company: "Singularity Innovations"},
{id: 151, lastName: "Wilkinson", firstName: "Mark", company: "ChaiOne"},
{id: 152, lastName: "Wilson", firstName: "Mark", company: "Microsoft"},
{id: 153, lastName: "Woodward", firstName: "Ed", company: "Connexions - Rice University"}
];
}
