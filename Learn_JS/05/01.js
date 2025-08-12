function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}
function gcd(a, b){
    while(b != 0){
        const temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}
function lcm(a, b){
    return Math.floor(a * b / gcd(a, b));
}