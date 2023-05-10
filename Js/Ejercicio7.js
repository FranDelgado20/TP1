let numero1 =parseInt(prompt('Escriba un numero'))
let numero2 =parseInt(prompt('Escriba otro numero'))
let numero3 =parseInt(prompt('Escriba otro numero mas'))
if(numero1>numero2 && numero1>numero3){
    document.write('El numero ' +numero1+ ' es mayor')
}else if(numero2>numero1 && numero2>numero3){
    document.write('El numero '+numero2+' es mayor')
}else if(numero3>numero1 && numero3>numero2){
    document.write('El numero '+numero3+' es mayor')
}
