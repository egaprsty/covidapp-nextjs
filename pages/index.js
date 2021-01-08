import { Component } from "react"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('https://api.kawalcorona.com/')
    .then(response => response.json())
    .then(data => this.setState({ items: data }))
  }

  render(){
    const { items } = this.state
    return(
      
      <div className="justify-items-start md:justify-items-center">
        <h1 className="bg-blue-400 text-center">COVID19</h1>
        <br />
        { items.map((item, index) => 
        <tr> 
      <div className="shadow ml-20 text-center mr-3">
    {item.attributes.Country_Region}
    </div>
          
            <th key={index}>     
                <td className="bg-blue-200">{item.attributes.Confirmed}</td>
                  <br/>
                <td className="bg-red-200">{item.attributes.Deaths}</td>
              </th>
                       
        </tr>
        )}
      </div>

      
    )
  }
}

export default App;
