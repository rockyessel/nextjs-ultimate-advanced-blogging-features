export const isObjectEmpty = (obj: any): boolean => {
  if (Array.isArray(obj)) {
    return obj.length === 0; // Check if the array is empty
  }

  if (typeof obj === 'object' && obj !== null) {
    for (const prop in obj) {
      if (!isObjectEmpty(obj[prop])) {
        return false; // Object property has a value
      }
    }
    return true; // All object properties have no values
  }

  if (typeof obj === 'string' && obj.trim() !== '') {
    return false; // String is not empty
  }

  return true; // Other types (number, boolean, null, undefined) have no values
};


export const stringToSlugValue = (slug:string) => {
  let sanitizedString = slug.replace(/ /g, '-');
  // Remove non-alphanumeric characters
  sanitizedString = sanitizedString.replace(/[^a-zA-Z0-9-]/g, '');
  return sanitizedString;
}