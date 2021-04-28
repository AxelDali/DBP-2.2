// 8.- Hacer un programa que solo nos permita introducir S o N.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.setPrompt('Introduzca S o N: ');
readline.prompt();

readline.on('line', function(input){
    if(input == "S" || input == "N"){
        readline.close();
    } else{
        console.log('Input incorrecto\n')
        readline.prompt()
    }
}).on('close', function() {
    console.log('\nGracias por participar :)');
    process.exit(0);
});;
