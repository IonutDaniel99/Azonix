export function getObjectByChildrensValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}
