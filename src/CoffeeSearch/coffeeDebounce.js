function debounceFn(fn, t = 1000) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, t);
    }
}
export { debounceFn }