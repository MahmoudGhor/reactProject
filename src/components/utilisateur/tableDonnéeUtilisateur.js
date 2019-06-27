import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import swal from "sweetalert";

class TableDonnéeUtilisateur extends Component {
  clicked = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
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
