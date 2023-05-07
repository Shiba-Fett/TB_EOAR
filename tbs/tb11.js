// setup 
const data = {
  labels: ['Tranced', 'Blattu', 'XCAL', 'Skaar', 'DarthDax', 'Enigma', 'Delara Exibil', 'Jonesmalones', 'Javin Fis', 'G4reth', 'T', 'Trask droll', 'Puck', 'RoTahn Taske', 'Patrick4', 'MINI DarthAzazel', 'Marl Jewel', 'Jeeves', 'Zarlis Rahn', 'Nomad', 'WharfRat', 'Chikiller', 'JHang', 'BobbyMarshal', 'Dârth Jungle Asian', 'ArtVandalay', 'OwningXylophone', 'Squanchy420', 'Lambert', 'El Jefe', 'non7top', 'Tani Mayse', 'Q Ryker', 'Kÿłë škÿwäłkër', 'Username', 'thirteensuns', 'BobaChuck91', 'Rhil Margos', 'Scof', 'Fidget92', 'Verage Valoor', 'Geralt of Rivia', 'Avatany', 'JediAhsoka', 'Tyrian', 'JediScum', 'Yosh', 'DarthRevanNL', 'Taco Hat', 'Excessive Fist', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['92', '91', '85', '82', '80', '77', '76', '76', '74', '70', '68', '67', '65', '65', '65', '65', '59', '58', '57', '54', '53', '53', '53', '52', '52', '52', '48', '48', '47', '47', '46', '45', '45', '44', '44', '44', '43', '41', '40', '38', '37', '35', '33', '32', '31', '29', '28', '27', '26', '25', ],
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
    label: 'Waves Completed (Phase 6)',
    data: ['11', '10', '8', '10', '7', '7', '5', '10', '5', '2', '7', '6', '3', '2', '3', '8', '4', '3', '5', '5', '2', '2', '1', '4', '3', '8', '3', '3', '2', '2', '1', '2', '0', '2', '3', '4', '5', '4', '2', '1', '1', '4', '3', '4', '2', '1', '1', '0', '1', '3', ],
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
    data: ['58', '60', '57', '51', '56', '54', '48', '53', '47', '47', '49', '56', '55', '56', '44', '53', '45', '46', '46', '45', '45', '41', '42', '39', '46', '37', '42', '37', '43', '35', '38', '46', '33', '36', '33', '34', '38', '40', '38', '39', '32', '33', '28', '22', '27', '31', '29', '21', '32', '22', ],
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
    label: 'Number of phases deployed',
    data: ['6', '6', '6', '5', '6', '6', '6', '5', '6', '6', '5', '6', '6', '6', '5', '6', '5', '6', '6', '6', '6', '6', '5', '6', '6', '6', '6', '6', '6', '4', '4', '6', '6', '4', '4', '5', '5', '5', '6', '4', '6', '5', '6', '6', '4', '5', '6', '6', '5', '6', ],
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
    data: ['49', '16', '26', '61', '31', '11', '41', '74', '8', '3', '13', '40', '32', '8', '21', '21', '13', '20', '7', '24', '14', '18', '15', '14', '19', '12', '11', '13', '13', '5', '16', '7', '17', '5', '14', '12', '6', '24', '25', '16', '32', '27', '12', '20', '31', '1', '6', '18', '7', '7', ],
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
    data: ['19705941', '20602816', '18248284', '17805316', '16906096', '14768127', '17584690', '15597503', '13852502', '15406564', '14970628', '14279533', '15411721', '14147814', '14153752', '12134064', '14290471', '12201564', '11298439', '10406408', '10398751', '12888596', '10817345', '11325002', '10668126', '11637190', '9738595', '11171720', '10264064', '10337814', '8646876', '8658751', '9417188', '8375001', '9044532', '9255314', '8325158', '11401408', '9698751', '9516876', '6798126', '6636095', '6919845', '7027970', '5400313', '6814376', '5915626', '3453750', '5160626', '8545314', ],
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
    data: ['75892237', '75419370', '73363061', '67339326', '76600516', '74996816', '73742235', '71623564', '67873276', '69890205', '63403640', '72209808', '72359221', '73773617', '61812829', '70155734', '64748788', '68089154', '62439788', '64796761', '63361746', '68887982', '54127960', '58118936', '65983946', '62743908', '64804296', '60470690', '67408730', '49464966', '46881071', '62179900', '59622466', '45866902', '48830014', '56543115', '54126199', '57442955', '56128656', '50264477', '60474194', '48698730', '61536657', '52620156', '39186650', '52480066', '57876366', '60240054', '49264613', '57893695', ],
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
