// setup 
const data = {
  labels: ['TB1', 'TB2', ],
  datasets: [ {
    label: 'Guild Average - Waves',
    data: ['13.690909090909091', '21.22', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: false,
},{
    label: 'Guild Average - Attempts',
    data: ['11.363636363636363', '16.26', ],
    borderColor:  'rgb(0, 0, 0)',
    hidden: true,
},
 {
    label: '8ONE5',
    data: ['2', '0', ],
    borderColor:  'rgb(178, 49, 242)',
    hidden: true,
},
 {
    label: 'Bino',
    data: ['7', '0', ],
    borderColor:  'rgb(190, 117, 172)',
    hidden: true,
},
 {
    label: 'Bortoke Zentra',
    data: ['27', '36', ],
    borderColor:  'rgb(67, 14, 73)',
    hidden: true,
},
 {
    label: 'Colargol',
    data: ['10', '12', ],
    borderColor:  'rgb(145, 31, 32)',
    hidden: true,
},
 {
    label: 'CoreyJ0513',
    data: ['37', '27', ],
    borderColor:  'rgb(109, 93, 102)',
    hidden: true,
},
 {
    label: 'DoggoMcNugget',
    data: ['0', '19', ],
    borderColor:  'rgb(109, 182, 106)',
    hidden: true,
},
 {
    label: 'Dom Mantell',
    data: ['45', '66', ],
    borderColor:  'rgb(239, 64, 205)',
    hidden: true,
},
 {
    label: 'Drkacha',
    data: ['5', '8', ],
    borderColor:  'rgb(150, 159, 202)',
    hidden: true,
},
 {
    label: 'Edeko',
    data: ['11', '5', ],
    borderColor:  'rgb(167, 8, 200)',
    hidden: true,
},
 {
    label: 'Fartwad',
    data: ['18', '26', ],
    borderColor:  'rgb(108, 134, 156)',
    hidden: true,
},
 {
    label: 'Funglu',
    data: ['8', '16', ],
    borderColor:  'rgb(174, 75, 109)',
    hidden: true,
},
 {
    label: 'Ham',
    data: ['0', '25', ],
    borderColor:  'rgb(188, 232, 54)',
    hidden: true,
},
 {
    label: 'heavydad',
    data: ['3', '15', ],
    borderColor:  'rgb(61, 240, 4)',
    hidden: true,
},
 {
    label: 'HockettG',
    data: ['1', '3', ],
    borderColor:  'rgb(101, 43, 250)',
    hidden: true,
},
 {
    label: 'Holdem',
    data: ['32', '42', ],
    borderColor:  'rgb(198, 57, 252)',
    hidden: true,
},
 {
    label: 'HumanAtrophy',
    data: ['0', '0', ],
    borderColor:  'rgb(245, 173, 160)',
    hidden: true,
},
 {
    label: 'Jorge',
    data: ['32', '44', ],
    borderColor:  'rgb(97, 139, 172)',
    hidden: true,
},
 {
    label: 'Kaladin',
    data: ['0', '47', ],
    borderColor:  'rgb(24, 216, 12)',
    hidden: true,
},
 {
    label: 'Ken666',
    data: ['27', '35', ],
    borderColor:  'rgb(236, 227, 80)',
    hidden: true,
},
 {
    label: 'Laevithin',
    data: ['22', '35', ],
    borderColor:  'rgb(92, 181, 43)',
    hidden: true,
},
 {
    label: 'Lazypants',
    data: ['6', '3', ],
    borderColor:  'rgb(150, 147, 231)',
    hidden: true,
},
 {
    label: 'Loo Roller',
    data: ['12', '10', ],
    borderColor:  'rgb(138, 61, 146)',
    hidden: true,
},
 {
    label: 'Losersrage',
    data: ['10', '17', ],
    borderColor:  'rgb(235, 232, 171)',
    hidden: true,
},
 {
    label: 'Lurk Stiefel',
    data: ['28', '52', ],
    borderColor:  'rgb(114, 86, 19)',
    hidden: true,
},
 {
    label: 'MysterPurple',
    data: ['50', '56', ],
    borderColor:  'rgb(244, 100, 68)',
    hidden: true,
},
 {
    label: 'Nacho420',
    data: ['5', '2', ],
    borderColor:  'rgb(85, 202, 149)',
    hidden: true,
},
 {
    label: 'Nelsonho',
    data: ['7', '0', ],
    borderColor:  'rgb(207, 199, 248)',
    hidden: true,
},
 {
    label: 'Novataglio',
    data: ['13', '16', ],
    borderColor:  'rgb(149, 56, 241)',
    hidden: true,
},
 {
    label: 'Oberon is not Canadian',
    data: ['17', '11', ],
    borderColor:  'rgb(106, 230, 172)',
    hidden: true,
},
 {
    label: 'Obi Loz',
    data: ['8', '21', ],
    borderColor:  'rgb(156, 197, 93)',
    hidden: true,
},
 {
    label: 'ObiDonKenobi',
    data: ['15', '8', ],
    borderColor:  'rgb(63, 42, 193)',
    hidden: true,
},
 {
    label: 'Ocatarinetabelachitchix',
    data: ['29', '31', ],
    borderColor:  'rgb(143, 1, 246)',
    hidden: true,
},
 {
    label: 'Parksimus Primo',
    data: ['9', '21', ],
    borderColor:  'rgb(208, 59, 120)',
    hidden: true,
},
 {
    label: 'Ramitko',
    data: ['10', '16', ],
    borderColor:  'rgb(201, 140, 176)',
    hidden: true,
},
 {
    label: 'Reizendfalke',
    data: ['2', '7', ],
    borderColor:  'rgb(252, 23, 81)',
    hidden: true,
},
 {
    label: 'Rev Lazarus Ansel Digby',
    data: ['10', '2', ],
    borderColor:  'rgb(213, 203, 204)',
    hidden: true,
},
 {
    label: 'Savahawk',
    data: ['4', '9', ],
    borderColor:  'rgb(244, 56, 16)',
    hidden: true,
},
 {
    label: 'schmerp',
    data: ['34', '42', ],
    borderColor:  'rgb(145, 229, 248)',
    hidden: true,
},
 {
    label: 'ShibaFett',
    data: ['0', '21', ],
    borderColor:  'rgb(204, 96, 123)',
    hidden: true,
},
 {
    label: 'snord',
    data: ['23', '33', ],
    borderColor:  'rgb(7, 80, 232)',
    hidden: true,
},
 {
    label: 'The MINI Great Bambino',
    data: ['26', '45', ],
    borderColor:  'rgb(68, 6, 116)',
    hidden: true,
},
 {
    label: 'Timaydawg11',
    data: ['0', '2', ],
    borderColor:  'rgb(32, 116, 54)',
    hidden: true,
},
 {
    label: 'Ulaste Saque',
    data: ['36', '42', ],
    borderColor:  'rgb(39, 115, 102)',
    hidden: true,
},
 {
    label: 'Ushey',
    data: ['22', '28', ],
    borderColor:  'rgb(12, 45, 186)',
    hidden: true,
},
 {
    label: 'Valandil',
    data: ['21', '36', ],
    borderColor:  'rgb(217, 246, 57)',
    hidden: true,
},
 {
    label: 'VERY NICE',
    data: ['0', '9', ],
    borderColor:  'rgb(14, 177, 182)',
    hidden: true,
},
 {
    label: 'Wall',
    data: ['12', '16', ],
    borderColor:  'rgb(235, 207, 252)',
    hidden: true,
},
 {
    label: 'Wingman19',
    data: ['0', '32', ],
    borderColor:  'rgb(71, 120, 220)',
    hidden: true,
},
 {
    label: 'xle spartanx',
    data: ['8', '0', ],
    borderColor:  'rgb(212, 131, 189)',
    hidden: true,
},
 {
    label: 'zortar',
    data: ['14', '12', ],
    borderColor:  'rgb(212, 116, 209)',
    hidden: true,
},
]

};

// config 
const config = {
  type: 'line',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
