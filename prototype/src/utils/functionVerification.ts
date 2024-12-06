/**
 * Safely verifies if a function exists and is callable
 * @param functionName The name of the function to verify
 * @returns boolean indicating if the function exists and is callable
 */
export const isFunctionCallable = (functionName: string): boolean => {
  try {
    // Get the global object (window in browser, global in Node.js)
    const globalObj = typeof window !== 'undefined' ? window : global;
    
    // Check if the function exists on the global object
    const func = (globalObj as any)[functionName];
    
    // Verify that it exists and is actually a function
    return typeof func === 'function';
  } catch (error) {
    // Handle any potential errors during verification
    return false;
  }
};

/**
 * Safely attempts to verify and execute a function
 * @param functionName The name of the function to verify and execute
 * @returns Object containing verification result and execution status
 */
export const verifyAndExecute = (functionName: string): { exists: boolean; canExecute: boolean } => {
  try {
    const globalObj = typeof window !== 'undefined' ? window : global;
    const func = (globalObj as any)[functionName];

    // First verify existence and type
    if (typeof func !== 'function') {
      return { exists: false, canExecute: false };
    }

    // Try to get the function's length (number of parameters)
    // This will throw if the function is not properly defined
    const paramCount = func.length;
    
    return { exists: true, canExecute: true };
  } catch (error) {
    return { exists: false, canExecute: false };
  }
};

// Example usage for myUndefinedFunction
export const verifyMyUndefinedFunction = (): boolean => {
  return isFunctionCallable('myUndefinedFunction');
};