import { cartActions } from './cart-slice';
import {uiActions} from './ui-slice';

export const fetchCartData = () => {
    return(
        async dispatch => {

            const fetchData = async() => {
                const response = await fetch('https://react-http-4a6b5-default-rtdb.firebaseio.com/cart.json');

                if(!response.ok){
                    throw new Error('Couldn\'t fetch cart data');
                }

                const data = response.json();

                return data;
            };

            try{
                const cartData = await fetchData();
                dispatch(cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity
                }));
            }catch(error){
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: error.message
                }));
            }
        }
    );
}

export const sendCartData = (cart) => {
    return (
        async dispatch => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Send cart data!'
            }));
            
            const sendRequest = async() => {
                const respone = await fetch('https://react-http-4a6b5-default-rtdb.firebaseio.com/cart.json',{
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    })
                });

                if(!respone.ok){
                  throw new Error('Sending cart data failed');
                }
            }

            try{
                await sendRequest();

                dispatch(uiActions.showNotification({
                    status: 'sucess',
                    title: 'Success!',
                    message: 'Sent cart data successfully'
                }));
            } catch(error){
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: error.message
                }));
            }
        }
    );  
}