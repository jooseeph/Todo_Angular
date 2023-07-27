import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[] = [];

  constructor() {
    this.name = 'John';
    this.items = [
      { description: 'Eat', action: true },
      { description: 'Sport', action: true },
      { description: 'Shopping', action: false }
    ];
  }
}
