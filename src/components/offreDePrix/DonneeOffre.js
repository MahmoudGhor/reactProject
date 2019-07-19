import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Spinner from "../common/Spinner";

class DonneeOffre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offre: null,
      etat: false
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/offrePrix/getbyid/'+this.props.offre._id

    }).then((res) => {
      this.setState({
        etat: true,
        offre: res.data.data,
      });
    })
  }

  makeChoiceForOffre = e => {
    this.props.getoffre(this.props.offre._id);
  };

  render() {
    if (this.state.offre === null && this.state.etat === false) {
      return <Spinner/>;
    }
    return (
      <tr>
        <td>{this.state.offre.client.name} {this.state.offre.client.lastname}</td>
        <td>{this.state.offre.ordre.name}</td>
        <td>{this.state.offre.offreprixs.date}</td>
        <td><IconButton>
          <img onClick={this.makeChoiceForOffre.bind(this)}
               style={{marginTop: '-20px', width: '30px', height: '30px', borderRadius: '10px'}}
               src={window.location.origin + '/images/details.png'}/>
        </IconButton></td>

      </tr>
    );
  }
}

export default DonneeOffre;
