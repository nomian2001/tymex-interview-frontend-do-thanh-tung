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
        .replace(/\s+/g, '') 
        .replace(/[^a-zA-Z0-9]/g, ''); 
}