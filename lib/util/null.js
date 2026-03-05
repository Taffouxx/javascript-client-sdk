export function toNullable(data) {
    return typeof data === "undefined" ? null : data;
}
export function toNullableDate(data) {
    return data ? new Date(typeof data === 'string' ? data : data.$date) : null;
}
//# sourceMappingURL=null.js.map
