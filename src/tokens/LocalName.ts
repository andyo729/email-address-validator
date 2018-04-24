import Token from './Token';

export default class LocalName extends Token {
  protected minLength: number = 6;
  protected maxLength: number = 12;
  protected nextChar: string = '@';
}
