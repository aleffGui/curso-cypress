it('nada agora', function(){})

/*function soma(a,b) {
    return a + b;
}*/
/*const soma = function (a,b) {
    return a + b;
}*/
const soma = (a,b) => {return a+b}
console.log(soma(9, 5))
it('a function test...', function() {
    console.log('Function', this)
})
it('a arrow test...', () => {
    console.log('Arrow', this)
})