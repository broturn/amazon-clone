import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] =useStateValue();

        const stripe = useStripe();
        const elements = useElements();

        const [error, setError] = useState(null);
        const [disabled, setDisabled] = useState(true);

        const handleSubmit = e => {

        }
        const handleChange = e => {
            setDisabled(event.empty);
            setError(event.error ? event.error.message : '')
        }
    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
