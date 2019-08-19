import React, { Component } from 'react'
import styled from 'styled-components';

const Layout = styled.ul`
  list-style-type: none;
  font-family: Arial;
  font-size: 18px;
  display: block;
  padding: 0;
  width: 100%;
`;

const Brand = styled.li`
  text-transform: uppercase;
  font-weight:bold;
`;

const Thumbnail = styled.div`
  background: white;
`;

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-3" key={product.id}>
          <Thumbnail className="thumbnail">
            <img src={product.image.outfit} alt={product.name} />
            <Layout>
              <Brand>{product.designer}</Brand>
              <li>{product.name}</li>
              <li>{product.price}</li>
            </Layout>
          </Thumbnail>
      </div>
  ));

  return (
      <div className="row">
          {productItems}
      </div>
  )
}
}