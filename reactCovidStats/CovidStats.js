import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
   
const CovidStats = () => {
  const[covidData, setcovidData] = useState([]); 

  useEffect(() => {  
    axios.get('https://api.covid19api.com/summary')
    .then(res => {
      console.log(res.data);
      setcovidData(res.data.Countries); 
      console.log(err);
    })
    $(document).ready(() => {
      $('#datatable').DataTable();
    })
  }, [])

  const tableData = covidData.map(Countries => { 
    return <tr>
      <td>{Countries.Country}</td>
      <td>{Countries.TotalConfirmed}</td>
      <td>{Countries.TotalConfirmed - Countries.TotalRecovered}</td>
      <td>{Countries.TotalRecovered}</td>
      <td>{Countries.TotalDeaths}</td>
      </tr>
  })

  return (
    <div>
     <h1 className="m-5" style={{backgroundColor: 'black', color: 'white'}}>CovidStats Component</h1> {/* Bootstrap className="m-5" is margin of 50 px */}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <table id="datatable" className="table table-dark">
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered </th>
                <th>Deaths</th>
              </tr>
            </thead>

            <tbody>
              {tableData}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}
export default CovidStats

