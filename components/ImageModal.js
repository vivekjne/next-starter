
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
      
        {this.props.product && <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>{this.props.product.name}</ModalHeader>
          <ModalBody >
           <img src={this.props.product.image} style={{width:'300px',margin:'auto',display:'block'}}/>
          </ModalBody>
        
        </Modal>}
      </div>
    );
  }
}

export default ModalExample;