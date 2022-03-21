const fs =  require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar = false , hasta = 10)=> {
     try {
        let i = 1;
        let salida = '';
    
      
    
    
        while (i <= hasta) {
            salida += `${base} ${'X'} ${i} = ${base * i}\n`;
             i++;
         }
         
         if(listar){
            console.clear();
            console.log('========================'.green);
            console.log(    `tabla del ${base.toString().green}`);
            console.log('========================'.green);
            console.log(salida);
         }
       
         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida); 
          
         return `TABLA DEL ${base} CREADA`;
     } catch (error) {
        return error;
     }
   
}


module.exports = {
    crearArchivo
}













 // fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
//     if(err) throw err;
//     console.log(`TABLA DEL ${base} CREADA`);
// });
