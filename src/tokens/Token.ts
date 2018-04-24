export default class Token {
  private value: string;
  protected minLength: number;
  protected maxLength: number;
  protected nextChar: string;

  constructor(value: string) {
    this.value = value;

  }

  getValue(): string {
    return this.value;
  }
}
