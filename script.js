let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        
         else if(e.target.innerHTML=='AC')
         {
             string="";
             input.value=string;

         }

         else if(e.target.innerHTML=='X')
         {
                 string=string.substring(0,string.length-1);
                 input.value=string;
         }
         else
         {
             string +=e.target.innerHTML;
             input.value = string;

         }
    })
})


    
>>>>>>> 12d57bf168bf9c81b5f56bcfcb116223c23fa733
