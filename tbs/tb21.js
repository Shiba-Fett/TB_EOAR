// setup 
const data = {
  labels: ['Tranced', 'Blattu', 'Skaar', 'XCAL', 'Puck', 'Enigma', 'DarthDax', 'Delara Exibil', 'WharfRat', 'ArtVandalay', 'Patrick4', 'T', 'Jonesmalones', 'MINI DarthAzazel', 'G4reth', 'Javin Fis', 'Tyron Brandt', 'Jeeves', 'Nomad', 'Trask droll', 'RoTahn Taske', 'Marl Jewel', 'JHang', 'El Jefe', 'Dârth Jungle Asian', 'OwningXylophone', 'Chikiller', 'Rhil Margos', 'Darthsyn', 'BobbyMarshal', 'Dava', 'Scof', 'JakeY', 'Verage Valoor', 'Tani Mayse', 'Geralt of Rivia', 'Lambert', 'Squanchy420', 'non7top', 'Username', 'Q Ryker', 'manolis', 'BobaChuck91', 'Tyrian', 'Fidget92', 'JediAhsoka', 'Yosh', 'Avatany', 'Taco Hat', 'Excessive Fist', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['92', '91', '87', '85', '78', '76', '72', '70', '68', '68', '67', '67', '67', '67', '65', '65', '64', '64', '64', '63', '63', '61', '61', '61', '57', '56', '56', '54', '53', '50', '47', '47', '47', '46', '45', '44', '44', '44', '42', '40', '40', '39', '39', '38', '38', '37', '30', '22', '18', '14', ],
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
    data: ['19', '21', '22', '22', '20', '21', '21', '19', '17', '19', '20', '16', '18', '17', '20', '16', '21', '20', '20', '19', '19', '20', '15', '16', '20', '16', '16', '18', '16', '17', '18', '17', '18', '16', '18', '14', '19', '16', '9', '19', '12', '17', '14', '10', '15', '12', '11', '12', '3', '2', ],
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
    data: ['18', '17', '16', '16', '16', '18', '15', '15', '13', '14', '12', '9', '15', '12', '11', '15', '15', '11', '13', '10', '13', '13', '12', '12', '10', '11', '14', '13', '11', '9', '9', '7', '8', '11', '8', '10', '7', '7', '11', '13', '9', '5', '7', '8', '7', '4', '5', '0', '4', '2', ],
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
    data: ['17', '16', '16', '15', '14', '16', '15', '15', '15', '10', '15', '13', '0', '12', '14', '13', '0', '12', '12', '13', '12', '13', '11', '13', '12', '13', '13', '10', '12', '6', '10', '12', '11', '10', '8', '8', '10', '10', '11', '8', '9', '9', '6', '8', '10', '8', '8', '0', '3', '3', ],
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
    data: ['16', '17', '16', '14', '16', '12', '12', '13', '11', '8', '9', '11', '14', '10', '12', '12', '12', '10', '10', '9', '12', '8', '12', '10', '7', '10', '6', '6', '8', '10', '6', '5', '7', '7', '7', '7', '4', '7', '8', '0', '7', '6', '7', '6', '3', '8', '5', '4', '3', '2', ],
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
    data: ['14', '10', '11', '9', '7', '5', '9', '4', '6', '11', '5', '10', '12', '10', '4', '7', '6', '6', '8', '7', '3', '4', '7', '5', '4', '4', '4', '3', '3', '4', '2', '2', '1', '1', '3', '3', '2', '1', '1', '0', '1', '1', '2', '4', '1', '3', '1', '3', '2', '1', ],
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
    data: ['8', '10', '6', '9', '5', '4', '0', '4', '6', '6', '6', '8', '8', '6', '4', '2', '10', '5', '1', '5', '4', '3', '4', '5', '4', '2', '3', '4', '3', '4', '2', '4', '2', '1', '1', '2', '2', '3', '2', '0', '2', '1', '3', '2', '2', '2', '0', '3', '3', '4', ],
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
    data: ['2', '1', '1', '1', '1', '0', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '0', '0', '0', '0', ],
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
    data: ['58', '59', '56', '57', '54', '53', '53', '46', '54', '46', '46', '45', '43', '58', '46', '45', '42', '47', '51', '46', '50', '50', '44', '40', '47', '45', '46', '46', '37', '41', '42', '36', '46', '40', '48', '37', '45', '35', '35', '29', '31', '39', '36', '34', '39', '22', '26', '19', '22', '14', ],
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
    data: ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '3', '5', '5', '5', '5', '5', '5', '5', '4', '5', '4', ],
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
    data: ['31', '15', '45', '47', '25', '48', '26', '55', '20', '9', '18', '21', '60', '31', '10', '8', '15', '21', '27', '19', '7', '13', '29', '5', '13', '14', '13', '2', '36', '13', '80', '23', '21', '28', '7', '19', '19', '4', '20', '9', '16', '7', '8', '30', '17', '33', '15', '12', '7', '9', ],
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
    data: ['22085211', '22430211', '21198023', '19342710', '18470472', '17318646', '14349533', '17406928', '15841459', '16048647', '14880990', '16544429', '13998129', '15494897', '16066146', '13396252', '12980940', '15974741', '14114690', '14048909', '15900521', '14556408', '16523178', '14086409', '12914427', '11022970', '14846771', '12383333', '10626408', '13409584', '10947239', '14264584', '9128751', '8371876', '8685626', '9368595', '10530989', '9853907', '8378751', '6993750', '11672552', '8867814', '8918595', '6174532', '11306302', '7207501', '4995000', '5127814', '3744376', '7522033', ],
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
    data: ['83892597', '81832565', '78165232', '79522380', '79953028', '81154972', '79916317', '78903606', '74818061', '72439557', '75680458', '76208512', '83628528', '78506939', '76045981', '70932082', '69037530', '76289168', '74258111', '68957282', '78985637', '76747254', '71743533', '73498628', '73534076', '71418777', '75369325', '70416143', '67488990', '66750351', '67413977', '64259060', '69357523', '66937264', '67276813', '62848482', '71614388', '63256963', '56444053', '46511126', '67133451', '67592965', '66443922', '48485400', '68527600', '56432360', '60566161', '45553011', '49613819', '53594205', ],
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
