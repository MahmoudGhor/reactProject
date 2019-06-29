import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import swal from "sweetalert";

class TableDonnéeUtilisateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null
    }
  }
  clicked = () => {
    this.state.id = this.props.user._id;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer cet utilisateur!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.valueFromTable(this.state.id);
          swal("Utilisateur a été supprimé avec succes", {
            icon: "success",
          });
        } else {
          swal("Suppression annulée!");
        }
      });
  };


  render() {

    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.Last_Name}</td>
        <td>{this.props.user.email}</td>
        <td><IconButton onClick={this.clicked.bind(this)}>
          <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
               src={window.location.origin + '/images/poubelle.png'}/>
        </IconButton></td>
        <td><IconButton>
          <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
               src={window.location.origin + '/images/update.png'}/>
        </IconButton></td>
        <td/>
      </tr>
    );
  }
}

export default TableDonnéeUtilisateur;
