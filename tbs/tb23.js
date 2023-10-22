// setup 
const data = {
  labels: ['Blattu', 'Tranced', 'Skaar', 'XCAL', 'Enigma', 'Puck', 'Tyron Brandt', 'Jonesmalones', 'Delara Exibil', 'Patrick4', 'MINI DarthAzazel', 'DarthDax', 'WharfRat', 'G4reth', 'ArtVandalay', 'RoTahn Taske', 'Nomad', 'Marl Jewel', 'Dârth Jungle Asian', 'OwningXylophone', 'Jeeves', 'Rhil Margos', 'JHang', 'Trask droll', 'T', 'Javin Fis', 'Lambert', 'Chikiller', 'JakeY', 'El Jefe', 'Verage Valoor', 'Dava', 'BobbyMarshal', 'Geralt of Rivia', 'JediAhsoka', 'non7top', 'Tani Mayse', 'Kirath Tyria', 'manolis', 'Q Ryker', 'Scof', 'Tyrian', 'BobaChuck91', 'Yosh', 'Jay Maop', 'Fidget92', 'Squanchy420', 'Taco Hat', 'Avatany', 'Excessive Fist', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['94', '93', '90', '83', '80', '79', '78', '76', '76', '73', '73', '71', '70', '68', '68', '65', '65', '64', '60', '59', '59', '58', '57', '55', '54', '53', '52', '51', '51', '51', '50', '50', '49', '49', '46', '46', '45', '45', '44', '44', '40', '38', '36', '33', '28', '27', '27', '22', '21', '15', ],
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
    data: ['20', '20', '22', '21', '21', '21', '16', '18', '19', '20', '19', '22', '20', '20', '20', '22', '18', '21', '18', '15', '20', '17', '15', '14', '11', '0', '16', '16', '17', '17', '16', '19', '17', '17', '11', '18', '18', '15', '16', '14', '15', '12', '0', '11', '14', '4', '8', '7', '3', '6', ],
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
    data: ['18', '17', '17', '14', '15', '15', '14', '15', '16', '11', '13', '13', '11', '13', '15', '13', '10', '11', '9', '14', '9', '13', '11', '10', '8', '12', '10', '11', '11', '12', '12', '10', '10', '10', '10', '10', '8', '10', '8', '8', '8', '9', '9', '10', '7', '4', '7', '4', '8', '4', ],
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
    data: ['15', '18', '15', '13', '16', '14', '16', '15', '16', '15', '14', '12', '15', '14', '14', '12', '13', '14', '14', '14', '13', '10', '10', '7', '7', '15', '13', '12', '12', '14', '12', '10', '9', '7', '8', '9', '10', '7', '10', '10', '8', '8', '8', '6', '3', '12', '8', '3', '3', '1', ],
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
    data: ['17', '18', '16', '17', '14', '13', '14', '14', '15', '13', '11', '11', '13', '12', '10', '12', '12', '9', '8', '8', '9', '10', '11', '8', '11', '13', '8', '7', '9', '5', '8', '8', '6', '8', '7', '7', '4', '6', '5', '9', '6', '5', '9', '2', '3', '5', '1', '4', '1', '3', ],
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
    data: ['13', '12', '12', '10', '8', '8', '9', '8', '4', '8', '11', '10', '7', '5', '4', '4', '7', '5', '6', '5', '5', '4', '7', '8', '11', '8', '3', '3', '1', '2', '1', '1', '4', '5', '6', '1', '4', '4', '3', '2', '1', '2', '6', '3', '0', '1', '3', '1', '3', '1', ],
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
    data: ['11', '8', '8', '8', '6', '8', '9', '6', '6', '6', '5', '3', '4', '4', '5', '2', '5', '4', '5', '3', '3', '4', '3', '8', '6', '5', '2', '2', '1', '1', '1', '2', '3', '2', '4', '1', '1', '3', '2', '1', '2', '2', '4', '1', '1', '1', '0', '3', '3', '0', ],
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
    data: ['1', '2', '2', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '0', '1', '0', ],
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
    data: ['61', '58', '57', '57', '53', '57', '55', '47', '47', '48', '58', '49', '55', '46', '48', '52', '55', '51', '48', '45', '47', '48', '45', '46', '43', '35', '48', '43', '47', '45', '42', '40', '39', '39', '29', '43', '51', '42', '43', '32', '37', '36', '30', '21', '18', '33', '21', '27', '23', '15', ],
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
    data: ['5', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '4', '5', '5', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '4', '5', '5', '5', '5', ],
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
    data: ['10', '40', '52', '54', '15', '24', '19', '66', '55', '14', '32', '36', '23', '6', '11', '8', '26', '16', '15', '15', '39', '24', '13', '20', '11', '19', '23', '17', '22', '6', '29', '98', '11', '16', '31', '11', '8', '18', '6', '22', '17', '21', '8', '24', '19', '13', '2', '10', '13', '18', ],
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
    data: ['22705055', '23006774', '22665524', '19257554', '18603178', '19462554', '17891566', '15565053', '19691460', '17673804', '14824690', '15527284', '16142084', '17692553', '14042033', '16734740', '15077553', '16543803', '13948490', '12167658', '12962971', '15435522', '13717502', '14530210', '12766722', '13920941', '12061614', '12835208', '9775626', '11149689', '9691876', '12527552', '11576458', '9996408', '10241252', '9534376', '8730470', '9569064', '11791927', '11507502', '11310052', '5827188', '10984584', '6591720', '5909688', '8566564', '5127969', '4157657', '6106564', '4710938', ],
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
    data: ['84842579', '87151608', '83067743', '74866407', '83325996', '82524576', '86172283', '86231939', '82709401', '79637223', '78693420', '83418691', '75786889', '79576023', '71689232', '80813382', '77286761', '79827527', '75788407', '74072723', '75229367', '74585695', '63425789', '60741786', '64922063', '72566869', '65990812', '73916531', '70350431', '72625667', '70112845', '72030604', '69152425', '65644139', '63699786', '67274350', '69537001', '69541012', '72512040', '68689890', '61529364', '56509291', '59301086', '64816990', '67345874', '48973825', '51061360', '59046070', '65080777', '61044863', ],
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
