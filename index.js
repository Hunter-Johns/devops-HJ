exports.factorial = function(n) {
    if (n==0 || n==1)
        return n;
    return n*this.factorial(n-1);
}