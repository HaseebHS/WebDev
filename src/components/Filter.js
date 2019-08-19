import React, { Component } from 'react';
import styled from 'styled-components';

const Filters = styled.select`
  background: #efefef;
`;

class Filter extends Component {
  render() {
    return (
      <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
                       <Filters className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </Filters>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter Designer
               <Filters className="form-control" value={this.props.designer} onChange={this.props.handleSortDesigner}>
                            <option value="">ALL</option>
                            <option value="Madeleine Thompson">Madeleine Thompson</option>
                            <option value="Donna Karan">Donna Karan</option>
                            <option value="By Malene Birger">By Malene Birger</option>
                            <option value="Notte by Marchesa">Notte by Marchesa</option>
                            <option value="Roland Mouret">Roland Mouret</option>
                            <option value="Proenza Schouler">Proenza Schouler</option>
                            <option value="House of Holland">House of Holland</option>
                            <option value="Stella McCartney">Stella McCartney</option>
                            <option value="Oscar de la Renta">Oscar de la Renta</option>
                            <option value="Étoile Isabel Marant">Étoile Isabel Marant</option>
                            <option value="Michael Kors">Michael Kors</option>
                            <option value="Balmain">Balmain</option>
                            <option value="Erdem">Erdem</option>
                            <option value="Chloé">Chloé</option>
                            <option value="Temperley London">Temperley London</option>
                            <option value="Burberry Brit">Burberry Brit</option>
                            <option value="Tamara Mellon">Tamara Mellon</option>
                            <option value="Peter Pilotto">Peter Pilotto</option>
                            <option value="Lela Rose">Lela Rose</option>
                            <option value="Thakoon Addition">Thakoon Addition</option>
                            <option value="Altuzarra">Altuzarra</option>
                            <option value="Givenchy">Givenchy</option>
                            <option value="Isabel Marant">Isabel Marant</option>
                            <option value="MiH Jeans">MiH Jeans</option>
                            <option value="Saint Laurent">Saint Laurent</option>
                            <option value="Victoria, Victoria Beckham">Victoria, Victoria Beckham</option>
                            <option value="Roksanda Ilincic">Roksanda Ilincic</option>
                            <option value="Joseph">Joseph</option>
                            <option value="Gucci">Gucci</option>
                            <option value="Marni">Marni</option>
                            <option value="Tomas Maier">Tomas Maier</option>
                            <option value="Marc Jacobs">Marc Jacobs</option>
                            <option value="Fendi">Fendi</option>
                            <option value="Rosetta Getty">Rosetta Getty</option>
                            <option value="The Row">The Row</option>
                            <option value="Maiyet">Maiyet</option>
                            <option value="Matthew Williamson">Matthew Williamson</option>
                            <option value="Jil Sander">Jil Sander</option>
                            <option value="Agnona">Agnona</option>
                            <option value="Roland Mouret">Roland Mouret</option>
                            <option value="Altuzarra">Altuzarra</option>
                            <option value="TOME">TOME</option>
                        </Filters>
                    </label>
                </div>
        </div>
    );
  }
}

export default Filter;