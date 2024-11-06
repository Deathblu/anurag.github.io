export default function json2html(data) {
    const tableStart = '<table data-user="sunumee1463@gmail.com">';
    const tableEnd = '</table>';

    const header = `
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>`;

    const body = `
      <tbody>
        ${data.map(item => `
          <tr>
            <td>${item.Name}</td>
            <td>${item.Age}</td>
            <td>${item.Gender || ''}</td>
          </tr>
        `).join('')}
      </tbody>`;

    return `${tableStart}${header}${body}${tableEnd}`;
}