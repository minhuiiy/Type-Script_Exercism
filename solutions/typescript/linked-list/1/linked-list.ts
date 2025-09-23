export class LinkedList<TElement> {
  private elements: TElement[] = []

  public push(element: TElement): void {
    this.elements.push(element)
  }

  public pop(): TElement | undefined {
    return this.elements.pop()
  }

  public shift(): TElement | undefined {
    return this.elements.shift()
  }

  public unshift(element: TElement): void {
    this.elements.unshift(element)
  }

  public delete(element: TElement): void {
    const index = this.elements.indexOf(element)
    if (index !== -1) {
      this.elements.splice(index, 1)
    }
  }

  public count(): number {
    return this.elements.length
  }
}
