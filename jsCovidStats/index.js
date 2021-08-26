$.ajax({
  type: 'GET',
  url: 'https://api.covid19api.com/summary',
  success: function(response) {
    for(let i = 0; i < response.Countries.length; i++) {
      let totalActive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered;
      let tableRow = `<tr>
        <td>${response.Countries[i].Country}</td>
        <td>${response.Countries[i].TotalConfirmed}</td>
        <td>${totalActive}</td>
        <td>${response.Countries[i].TotalRecovered}</td>
        <td>${response.Countries[i].TotalDeaths}</td>
      </tr>`;
      $('#tbody').append(tableRow);
    }
    $('#covidTable').DataTable();
  },
  error: function(error) {
    console.log(error);
  }
})

