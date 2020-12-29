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
        <h1 className="bg-red-400">World wide</h1>
        { items.map((item, index) => 
        <tr> 
          <table class="table-fixed">
  <thead>
    <tr>
    {item.attributes.Country_Region}
    </tr>
    </thead>
    </table>
            <th key={index}>     
              <td className="bg-blue-200">{item.attributes.Confirmed}</td>
              <br/>
              <td className="text-center">{item.attributes.Deaths}</td>
              </th> 
              
        </tr>
        )}
      </div>

      
    )
  }
}

export default App;