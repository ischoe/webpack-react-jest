import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import image from '../../images/img.png'

const scaleIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const fromLeftIn = keyframes`
  from {
    transform: translate(-1000px);
    opacity: 0;
  }

  to {
    transform: translate(0px);
    opacity: 1;
  }
`;

const fromLeftOut = keyframes`
  from {
    transform: translate(0px);
    opacity: 0;
  }

  to {
    transform: translate(-1000px);
    opacity: 1;
  }
`;

const scaleInAnimation = `${scaleIn} 0.3s`;
const scaleOutAnimation = `${scaleOut} 0.3s`;

const fromLeftInAnimation = `${fromLeftIn} 0.5s`;
const fromLeftOutAnimation = `${fromLeftOut} 0.5s`;

const ProductWrapper = styled('ul')`
  list-style-type: none;
  background-color: beige;
  margin-bottom: ${(props) => props.isDisplayed ? '10px' : '0px'};
  padding: ${(props) => props.isDisplayed ? '10px' : '0px'};
  font-size: 20px;
  text-align: center;
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  animation: ${(props) => 
    props.isVisible ? fromLeftInAnimation : fromLeftOutAnimation};
  transition: all 0.3s ease-in-out;
  height: ${(props) => props.isDisplayed ? 'auto' : '0px'};
  opacity: ${(props) => props.isDisplayed ? '1' : '0'};
  overflow: ${(props) => props.isDisplayed ? 'auto' : 'hidden'};
  position: relative;
`

const ProductProp = styled('li')`
  margin-bottom: 5px;
`

const ProductPropLeft = styled('li')`
  float: left;
`

const ProductImg = styled('img')`
  width: 150px;
`

const ProductPropName = styled(ProductProp)`
  font-weight: bold;
`

export class ProductElement extends React.Component {
  static defaultProps = {
    isVisible: true
  }

  state = {
    isDisplayed: true
  }

  
  handleTransition = () => {    
    const { isVisible } = this.props
    this.setState({
      isDisplayed: isVisible
    })
  }

  render() {
    return (
      <ProductWrapper 
          isDisplayed={this.state.isDisplayed || this.props.isVisible}
          isVisible={this.props.isVisible} 
          onTransitionEnd={this.handleTransition}>
        <ProductPropLeft>
            <ProductImg src={image} />
        </ProductPropLeft>
        <ProductPropName>Product: {this.props.name}</ProductPropName>
        <ProductProp>Number: {this.props.number}</ProductProp>
        <ProductProp>Description: {this.props.description}</ProductProp>
        <ProductProp>Price: {this.props.price} €</ProductProp>
      </ProductWrapper>
    )
  }
}


ProductElement.propTypes = {
  isVisible: PropTypes.bool,
  name: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.string
}