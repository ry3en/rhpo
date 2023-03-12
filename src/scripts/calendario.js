import moment from "../";

const app = express();

app.get('/calendario', (req, res) => {
    const now = moment();
    const daysInMonth = now.daysInMonth();

    let table = `
    <table>
      <tr>
        <th colspan="7">${now.format('MMMM YYYY')}</th>
      </tr>
      <tr>
        <th>Lun</th>
        <th>Mar</th>
        <th>Mie</th>
        <th>Jue</th>
        <th>Vie</th>
        <th>Sab</th>
        <th>Dom</th>
      </tr>
  `;

    let day = 1;

    for (let i = 0; i < 6; i++) {
        table += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < now.day()) {
                table += '<td></td>';
            } else if (day > daysInMonth) {
                table += '<td></td>';
            } else {
                table += `<td>${day}</td>`;
                day++;
            }
        }

        table += '</tr>';
    }

    table += '</table>';

    res.send(table);
});
