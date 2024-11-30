export function removeFalsyKeysWithExceptions(obj: Record<string, any>) {
    const cleanObject: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined && value !== null) {
            cleanObject[key] = value;
        }
    }

    return cleanObject;
}
