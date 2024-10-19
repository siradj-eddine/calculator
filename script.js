let display = document.getElementById("display");

// let calc ='';


// // display value

// buttons.forEach(function(button){
//     if(button.value=='del'){
//         button.onclick = function(){
//             calc='';
//             display.innerHTML='';
//             result.innerHTML='';
            
//         };
//     }else if(button.value=='='){
//         button.onclick = function calcu(){
//             if(display.innerHTML==''){
//                 result.innerHTML=`<p>error</p>`
//             }else{
//                 try{
//                     const unknow = eval(display.innerHTML)
//                     result.innerHTML= unknow
                    
//                } catch (error) {
//                 result.innerHTML='<p>error</p>';
//                }
                
//             }
//         }
//     }
//     else{
//         button.onclick =function(){
//             calc += button.value;
//             display.innerHTML = `<p>${calc}</p>`;
           
//         }
//     }
// });

function AppendToDisplay(value){
    display.innerHTML+=value;
}

function reset(){
   
    display.innerHTML='';
}
function calculate(){
    if(display.innerHTML===''){
        display.innerHTML='please enter an equation'
    }else{
    try{
        const result = eval(display.innerHTML);
        display.innerHTML=result;
    } catch(error){
        display.innerHTML=`error`
    }
   
    }
}