// arquivo Order.js
import PropTypes from 'prop-types';
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.shape({
    user: PropTypes.string.isRequired,
    product: PropTypes.string,
    price: PropTypes.shape({
      value: PropTypes.number,
      currency: PropTypes.string,
    }),
  })
}

export default Order;