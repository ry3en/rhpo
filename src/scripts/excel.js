const XLSX = require('xlsx');

const workbook = XLSX.readFile('../../pages/Buzones para impresora de oficinaa.xlsx');
const worksheet = workbook.Sheets['hoja 1'];
const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});

let table = '<table>';
for (let i = 0; i < data.length; i++) {
    table += '<tr>';
    for (let j = 0; j < data[i].length; j++) {
        table += '<td>' + data[i][j] + '</td>';
    }
    table += '</tr>';
}
table += '</table>';
const style = `
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #4CAF50;
      color: white;
    }
  </style>
`;

const html = style + table;
const body = document.getElementsByTagName('body')[0];
body.innerHTML = html;
