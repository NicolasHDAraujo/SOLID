import { CartItem } from '../interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items //+ converte para number
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    //verificando se o carrinho está vazio
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho esvaziado!');
    this._items.length = 0;
  }
}
