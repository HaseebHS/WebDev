import React, { Component } from 'react';
import './App.css';
import Products from './components/Products.js';
import Filter from './components/Filter.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { designer: '', sort: '', products: [], filteredProducts: []};
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSortDesigner = this.handleSortDesigner.bind(this);
  }

  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.designer !== '') {
        return { filteredProducts: state.products.filter(a => a.designer.indexOf(state.designer)) };
      }
      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }

  handleSortDesigner = (e) => {
    this.setState({ designer: e.target.value });
    this.listProducts();
  }

  render() {
    return (
     <div className="App">
     <h1>NAP-WebDev-Test</h1>
      <hr/>
      <div className="row">
       <div className="col-md-13">
         <Filter designer={this.state.designer} count={this.state.filteredProducts.length} handleSortChange={this.handleSortChange} handleSortDesigner={this.handleSortDesigner} />
         <Products products={this.state.filteredProducts}/>
        </div>

      </div>
      </div>
    );
  }
}
  

export default App;
