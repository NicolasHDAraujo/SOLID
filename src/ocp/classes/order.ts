import { Persistency } from '../services/persistency';
import { Message } from '../services/message';
import { ShoppingCart } from './shopping-carts';
import { OrderStatus } from '../interfaces/order-status';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //injeção de dependencias
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `O pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
