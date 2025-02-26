
function flattening(n) {
    if (typeof n !== "object") {
        console.log(n.join("."), "->", n);
        return;
    }
    for (const key in n) {
        flattening(n[key], [n, key]);
    }
}

flattening(nested);