export function removeFalsyKeysWithExceptions(obj: Record<string, any>) {
    const cleanObject: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined && value !== null) {
            cleanObject[key] = value;
        }
    }

    return cleanObject;
}


export function toCamelCase(str: string): string {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '')  // Remove spaces
        .replace(/[^a-zA-Z0-9]/g, '');  // Remove non-alphanumeric characters
}

export function camelCaseToNormal(str: string): string {
    const result = str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Insert space before uppercase letter
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Handle consecutive uppercase letters like 'HTTPResponse'
        .replace(/([A-Z])/g, ' $1') // Add space before each uppercase letter
        .trim() // Remove any leading/trailing spaces
        .replace(/\s+/g, ' '); // Replace multiple spaces with a single one
    
    // Capitalize the first letter of each word
    return result.replace(/\b\w/g, char => char.toUpperCase());
}