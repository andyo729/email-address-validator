import index from './index';

describe('email validator', () => {
  it('returns true for a valid email', () => {
    expect(index('orahoske.2@gmail.com')).toEqual(true);
  });
});
