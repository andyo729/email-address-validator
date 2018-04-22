import Token from './tokens/Token';
import LocalName from './tokens/LocalName';

const getLastTokenInArray = (arr: Token[]): Token => {
  if (arr.length === 0) {
    return null;
  }

  return arr.splice(-1)[0];
};

export default (email: string): Boolean => {
  const tokens = email.split('').reduce(
    (currentTokens: Token[], currentChar: string): Token[] => {
      const currentToken = getLastTokenInArray(currentTokens);
      const newToken = new LocalName();
      newToken.value = `${currentToken.value}${currentChar}`;
      return [newToken];
    },
    [new LocalName()]
  );
  return true;
};
