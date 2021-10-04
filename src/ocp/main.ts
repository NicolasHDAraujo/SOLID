import { FiftyPercentDiscount } from './classes/dicount';
/**Open / closed principle
 * Entidades devem estar abertas para extenção, mas fechadas para modificação
 */

import { Product } from './classes/product';
import { Message } from './services/message';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-carts';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);

shoppingCart.addItem(new Product('Camisa', 20.9));
shoppingCart.addItem(new Product('Bermuda', 50.9));
shoppingCart.addItem(new Product('Tenis', 120.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
