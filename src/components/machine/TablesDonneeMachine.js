import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import UpdateMachine from './UpdateMachine';
import swal from "sweetalert";

class TablesDonneeMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({open: false});
    this.props.valueForUpdate(value);
  };

  clicked = () => {
    this.state.id = this.props.machine._id;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer cette machine!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.valueFromTable(this.state.id);
          swal("machine a été supprimé avec succes", {
            icon: "success",
          });
        } else {
          swal("Suppression annulée!");
        }
      });
  };

  render() {
    console.log(this.props.machine);
    const etatmachine = "" ;
    if (this.props.machine.etat === true){
      this.etatmachine = "en marche"
    }else{
      this.etatmachine = "en panne"
    }
    return (
      <tr>
        <td><center>{this.props.machine.name}</center></td>
        <td><center>{this.props.machine.reference}</center></td>
        <td><center>{this.props.machine.prix_par_hr}</center></td>
        <td><center>{this.props.machine.nombre_hr_travail}</center></td>
        <td><center>{this.etatmachine}</center></td>
        <td><IconButton onClick={this.clicked.bind(this)} >
          <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
               src={window.location.origin + '/images/poubelle.png'}/>
        </IconButton></td>
        <td><IconButton onClick={this.handleClickOpen}>
          <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
               src={window.location.origin + '/images/update.png'}/>
        </IconButton></td>
      <UpdateMachine machine={this.props.machine} open={this.state.open} onClose={this.handleClose} />
      </tr>

    );
  }
}

export default TablesDonneeMachine;
