//define some sample data
var tabledata = [
{id:1, name:"ArtVandalay", revaready:"true", rate:"50%",},
{id:2, name:"Avatany", revaready:"true", rate:"71.4285714285714%",},
{id:3, name:"Blattu", revaready:"true", rate:"84.6153846153846%",},
{id:4, name:"BobaChuck91", revaready:"true", rate:"50%",},
{id:5, name:"BobbyMarshal", revaready:"true", rate:"100%",},
{id:6, name:"Chikiller", revaready:"true", rate:"64.2857142857143%",},
{id:7, name:"Dârth Jungle Asian", revaready:"true", rate:"100%",},
{id:8, name:"DarthDax", revaready:"true", rate:"84.6153846153846%",},
{id:9, name:"Darthsyn", revaready:"true", rate:"50%",},
{id:10, name:"Delara Exibil", revaready:"true", rate:"100%",},
{id:11, name:"El Jefe", revaready:"true", rate:"70%",},
{id:12, name:"Enigma", revaready:"true", rate:"61.5384615384615%",},
{id:13, name:"Excessive Fist", revaready:"false", rate:"N/A",},
{id:14, name:"Fidget92", revaready:"true", rate:"64.2857142857143%",},
{id:15, name:"G4reth", revaready:"true", rate:"87.5%",},
{id:16, name:"Geralt of Rivia", revaready:"true", rate:"75%",},
{id:17, name:"Javin Fis", revaready:"true", rate:"100%",},
{id:18, name:"JakeY", revaready:"true", rate:"100%",},
{id:19, name:"Jay Maop", revaready:"true", rate:"100%",},
{id:20, name:"JediAhsoka", revaready:"true", rate:"100%",},
{id:21, name:"Jeeves", revaready:"true", rate:"76.9230769230769%",},
{id:22, name:"JHang", revaready:"true", rate:"78.5714285714286%",},
{id:23, name:"Jonesmalones", revaready:"true", rate:"78.5714285714286%",},
{id:24, name:"Kirath Tyria", revaready:"true", rate:"50%",},
{id:25, name:"Lambert", revaready:"true", rate:"80%",},
{id:26, name:"Marl Jewel", revaready:"true", rate:"78.5714285714286%",},
{id:27, name:"Manolis", revaready:"true", rate:"100%",},
{id:28, name:"MINI DarthAzazel", revaready:"true", rate:"64.2857142857143%",},
{id:29, name:"Nomad", revaready:"true", rate:"100%",},
{id:30, name:"non7top", revaready:"true", rate:"87.5%",},
{id:31, name:"OwningXylophone", revaready:"true", rate:"53.8461538461538%",},
{id:32, name:"Patrick4", revaready:"true", rate:"100%",},
{id:33, name:"Puck", revaready:"true", rate:"100%",},
{id:34, name:"QRyker25", revaready:"true", rate:"87.5%",},
{id:35, name:"Rhil Margos", revaready:"true", rate:"100%",},
{id:36, name:"RoTahn Taske", revaready:"true", rate:"85.7142857142857%",},
{id:37, name:"Scof", revaready:"true", rate:"87.5%",},
{id:38, name:"Skaar", revaready:"true", rate:"100%",},
{id:39, name:"Squanchy420", revaready:"true", rate:"76.9230769230769%",},
{id:40, name:"T", revaready:"true", rate:"75%",},
{id:41, name:"Taco Hat", revaready:"false", rate:"N/A",},
{id:42, name:"Tani Mayse", revaready:"true", rate:"38.4615384615385%",},
{id:43, name:"Tranced", revaready:"true", rate:"92.3076923076923%",},
{id:44, name:"Trask droll", revaready:"true", rate:"92.8571428571429%",},
{id:45, name:"Tyrian", revaready:"true", rate:"85.7142857142857%",},
{id:46, name:"Tyron Brandt", revaready:"true", rate:"77.7777777777778%",},
{id:47, name:"Verage Valoor", revaready:"true", rate:"92.8571428571429%",},
{id:48, name:"WharfRat", revaready:"true", rate:"92.8571428571429%",},
{id:49, name:"XCAL", revaready:"true", rate:"100%",},
{id:50, name:"Yosh", revaready:"true", rate:"100%",},
{id:51, name:"Dava", revaready:"true", rate:"75%",},

];
 
 //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#reva-table", {
 	height:800, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	data:tabledata, //assign data to table
 	layout:"fitcolumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Player", field:"name", width:150},
	 	{title:"Ready", field:"revaready", hozAlign:"left", formatter:"tickCross", width:100, formatterParams:{
            allowEmpty:true,
            allowTruthy:false,
            tickElement:"<i class='fa fa-check'></i>",
            crossElement:"<i class='fa fa-times'></i>",
        }},
	 	{title:"Success Rate (TB10+)", field:"rate", },

 	],
});
