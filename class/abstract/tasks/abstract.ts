interface Queue<T> {
	enqueue(item: T): void  // поставить в очередь
	dequeue(): T | undefined  // исключить из очереди
	front(): T | undefined | null  // посмотреть первый элемент
	isEmpty(): boolean  // проверка на "пустоту" сущности
	size(): number  // проверка на длину
}

class ArrayQueue<T> implements Queue<any>
{
  private queue: T[] = []
  isEmpty (): boolean
  {
    return this.queue.length === 0
  }
  size (): number
  {
    return this.queue.length
  }
  enqueue<E extends T>(item: E): void
  {
      this.queue.push(item)
  }
  dequeue(): any
  {
    return this.queue.shift()
  }
  front (): any
  {
    return this.queue[0]
  }
}

const arrTest1 = new ArrayQueue<number>()
arrTest1.enqueue(5)
arrTest1.enqueue(10)
console.log(arrTest1.front())
console.log(arrTest1.dequeue())
console.log(arrTest1.size())
const arrTest2 = new ArrayQueue<string>()
arrTest2.enqueue("5")
arrTest2.enqueue("10")
console.log(arrTest2.front())
console.log(arrTest2.dequeue())
console.log( arrTest2.size() )

//! STACK

class Stack<T>
{
  stack: T[] = []
  limit: number
	constructor(limit: number = Number.MAX_VALUE) {
		this.limit = limit
  }
  length() {
		return this.stack.length
	}
  isEmpty() {
		return this.length() === 0
  }

  push<E extends T>( entity: E ): void
  {
    if ( this.length() < this.limit ) this.stack.push( entity )
    else throw new Error('The limit has been reached!')
	}

  pop (): never | any
  {
    if ( this.isEmpty() ) throw new Error( 'Satck is Empty' )
    return this.stack.pop()
	}
  top (): any | null
  {
    return this.stack[this.length() - 1]
	}
}
const stackTest1 = new Stack<number>(10)
stackTest1.push(20)
stackTest1.push(50)
console.log(stackTest1.top())
console.log(stackTest1.pop())
console.log(stackTest1.length())

const stackTest2 = new Stack<string>(10)
stackTest2.push("20")
stackTest2.push("50")
console.log(stackTest2.top())
console.log(stackTest2.pop())
console.log(stackTest2.length())
