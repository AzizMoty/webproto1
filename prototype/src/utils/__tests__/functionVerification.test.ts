import { isFunctionCallable, verifyAndExecute } from '../functionVerification';

describe('Function Verification Utilities', () => {
  beforeEach(() => {
    // Clear any previously defined test functions
    (global as any).testFunction = undefined;
  });

  test('isFunctionCallable returns false for undefined function', () => {
    expect(isFunctionCallable('myUndefinedFunction')).toBe(false);
  });

  test('isFunctionCallable returns true for defined function', () => {
    (global as any).testFunction = () => {};
    expect(isFunctionCallable('testFunction')).toBe(true);
  });

  test('isFunctionCallable returns false for non-function properties', () => {
    (global as any).testProperty = 'not a function';
    expect(isFunctionCallable('testProperty')).toBe(false);
  });

  test('verifyAndExecute properly checks function existence', () => {
    const undefinedResult = verifyAndExecute('myUndefinedFunction');
    expect(undefinedResult).toEqual({ exists: false, canExecute: false });

    (global as any).testFunction = () => {};
    const definedResult = verifyAndExecute('testFunction');
    expect(definedResult).toEqual({ exists: true, canExecute: true });
  });
});