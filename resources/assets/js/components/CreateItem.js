import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class CreateItem extends Component {
    
    constructor(props){
        super(props);
        this.state  =   {productName: '', productPrice: ''}
        
        this.handleProductPrice    =   this.handleProductPrice.bind(this);
        this.handleProductName     =   this.handleProductName.bind(this);
        this.handleSubmit           =   this.handleSubmit.bind(this);
    }
    
    handleProductPrice(e){
        this.setState({
           productPrice :   e.target.value 
        });
    }
    
    handleProductName(e){
        this.setState({
           productName :   e.target.value 
        });
    }
    
    handleSubmit(e){
        e.preventDefault();
        const products  =   {
            name : this.state.productName,
            price: this.state.productPrice
        };
        let uri =   'http://localhost:8000/items';
        axios.post(uri, products).then( (response)  => {
            browserHistory.push('/display-items');
        } );
    }
    
    
    render() {
      return (
            <div>
              <h1>Create An Item</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Item Name:</label>
                      <input type="text" className="form-control" onChange={this.handleProductName}  />
                    </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Item Price:</label>
                        <input type="text" onChange={this.handleProductPrice} className="form-control col-md-6" />
                      </div>
                    </div>
                  </div><br />
                  <div className="form-group">
                    <button className="btn btn-primary">Add Item</button>
                  </div>
              </form>
            </div>
      );
      
    }
}

export default CreateItem;