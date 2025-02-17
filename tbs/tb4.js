// setup 
const data = {
  labels: ['Jonesmalones', 'Skaar', 'XCAL', 'Blattu', 'Tranced', 'Hego Damask', 'Magnafael', 'Javin Fis', 'G4reth', 'MINI DarthAzazel', 'ArtVandalay', 'JHang', 'Username', 'Delara Exibil', 'Nomad', 'Marl Jewel', 'WharfRat', 'RoTahn Taske', 'Puck', 'Patrick4', 'Jeeves', 'Fidget92', 'Lambert', 'Rhil Margos', 'Trask droll', 'BobbyMarshal', 'non7top', 'Zarlis Rahn', 'DarthDax', 'El Jefe', 'Tani Mayse', 'Excessive Fist', 'Quinlan Vos', 'Verage Valoor', 'Ravened Stormchaser', 'Tyrian', 'Squanchy420', 'OwningXylophone', 'Avatany', 'Yosh', 'Geralt of Rivia', 'JediAhsoka', 'Scof', 'Chikiller', 'Galatea', 'Taco Hat', 'Kdizyl', 'JediScum', 'Calaveylon Kwai', 'Anci', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['83', '81', '75', '74', '72', '70', '66', '62', '60', '58', '55', '54', '51', '51', '51', '51', '50', '49', '49', '49', '48', '46', '45', '44', '44', '43', '41', '41', '39', '39', '38', '38', '37', '35', '34', '31', '31', '30', '29', '29', '29', '28', '27', '25', '24', '22', '20', '17', '16', '14', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1
  },{
    label: 'Waves Completed (Phase 1)',
    data: ['17', '18', '19', '18', '17', '19', '18', '18', '17', '15', '12', '14', '15', '15', '14', '14', '12', '14', '15', '15', '16', '15', '15', '15', '16', '12', '11', '11', '6', '13', '14', '11', '14', '13', '6', '7', '13', '11', '10', '12', '11', '9', '11', '10', '9', '7', '8', '0', '5', '8', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 2)',
    data: ['14', '16', '14', '13', '13', '11', '10', '13', '14', '10', '13', '11', '5', '11', '10', '13', '11', '10', '8', '10', '11', '10', '10', '7', '8', '7', '8', '9', '0', '10', '3', '6', '3', '6', '8', '6', '5', '4', '5', '3', '4', '2', '6', '6', '6', '4', '5', '5', '3', '3', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 3)',
    data: ['15', '13', '9', '12', '11', '10', '11', '8', '9', '10', '7', '7', '9', '8', '7', '9', '7', '3', '9', '7', '4', '9', '4', '9', '3', '6', '5', '8', '8', '6', '8', '5', '4', '4', '5', '5', '5', '6', '4', '4', '4', '4', '3', '2', '4', '3', '2', '3', '2', '3', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 4)',
    data: ['14', '14', '14', '15', '14', '15', '13', '9', '11', '6', '8', '9', '10', '10', '9', '6', '9', '11', '7', '9', '8', '9', '7', '8', '9', '9', '8', '7', '10', '6', '8', '8', '10', '5', '5', '7', '4', '6', '4', '4', '5', '6', '3', '5', '3', '5', '3', '4', '4', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 5)',
    data: ['12', '11', '9', '8', '10', '8', '9', '8', '7', '9', '7', '10', '9', '6', '7', '6', '8', '7', '5', '6', '5', '2', '6', '5', '4', '6', '6', '6', '10', '4', '4', '7', '4', '4', '6', '4', '3', '2', '3', '4', '3', '4', '3', '2', '2', '3', '2', '4', '2', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 6)',
    data: ['11', '9', '10', '8', '7', '7', '5', '6', '2', '8', '8', '3', '3', '1', '4', '3', '3', '4', '5', '2', '4', '1', '3', '0', '4', '3', '3', '0', '5', '0', '1', '1', '2', '3', '4', '2', '1', '1', '3', '2', '2', '3', '1', '0', '0', '0', '0', '1', '0', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Special Missions',
    data: ['1', '0', '0', '1', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Missions Attempted',
    data: ['54', '52', '57', '56', '53', '59', '54', '49', '50', '50', '47', '43', '46', '45', '47', '50', '45', '58', '48', '46', '47', '45', '44', '47', '50', '36', '44', '38', '39', '32', '50', '32', '40', '36', '43', '31', '34', '43', '27', '37', '41', '26', '27', '40', '34', '35', '33', '28', '35', '24', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Number of phases deployed (p2 onward)',
    data: ['5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '4', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Operation Units Deployed',
    data: ['40', '21', '17', '8', '25', '20', '21', '9', '1', '17', '7', '4', '3', '24', '13', '4', '10', '11', '14', '10', '8', '8', '8', '19', '20', '6', '11', '2', '23', '2', '5', '8', '5', '16', '5', '19', '13', '10', '6', '2', '15', '17', '17', '15', '4', '5', '10', '1', '0', '11', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'CM Points',
    data: ['15230470', '15547813', '15291407', '14347344', '14098438', '11395625', '14599376', '9341094', '11856250', '9932969', '9867188', '9206250', '10641875', '9769688', '8191250', '11335938', '8720000', '10560938', '11686876', '8428750', '9129688', '9532500', '6897500', '7971250', '9194063', '9381876', '6326250', '6717500', '9229375', '7188750', '6218750', '9973126', '6792500', '5556250', '5328594', '4375625', '7342500', '4361250', '4543750', '4415000', '3992344', '4870625', '6776250', '4606250', '4931250', '3315000', '3648750', '4022500', '2216250', '3173750', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Territory Points',
    data: ['69736902', '63306694', '67381047', '66327454', '66779505', '65384202', '68462700', '61085837', '63611869', '64771601', '58821892', '56914276', '58893331', '63504162', '59104495', '66513014', '58370125', '67856530', '65961182', '53276272', '62345757', '60052492', '61148828', '59245293', '64666886', '52988893', '57234188', '54845188', '64858481', '58140992', '55838156', '57475676', '60003217', '55898190', '55018652', '41316144', '53456082', '55757589', '56485289', '53484835', '50964896', '47307774', '50966920', '41630848', '52545303', '52321046', '50206772', '47490835', '44066533', '37917756', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  }]
};

// config 
const config = {
  type: 'bar',
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
