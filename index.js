  
var string = "";
var ActiveButton;
var answer;
for(var i=0; i<document.querySelectorAll("button").length; i++){
   
     document.querySelectorAll("button")[i].addEventListener("click",function(){
          
           ActiveButton = this.innerHTML;
           clickAction(ActiveButton);
           shadow(ActiveButton);
          
     });
    }
        document.addEventListener("keypress",function(event){
              clickAction(event.key);
              shadow(event.key);
        });
            
      function clickAction(ActiveButton){

          
          if(ActiveButton == "X" || ActiveButton == "x"){
            string = string.slice(0,string.length-1);
            document.querySelector("input").value = string;
          }
           else if((ActiveButton == "C") || (ActiveButton == "backspace")){
            string = "";
            document.querySelector("input").value = string;
           }

           else if(ActiveButton == "PIE"){
             string = string + 3.14;
             document.querySelector("input").value = string;
           }

           else if(ActiveButton == "=" ){
           
            document.querySelector("input").value = eval(string);
            string = eval(string);
          }

          else if((ActiveButton != "+") && (ActiveButton != "-")  && (ActiveButton != "/") && (ActiveButton != "*") && (ActiveButton != "%") && (ActiveButton != "="))
          {
            
            string = string + ActiveButton;
            document.querySelector("input").value = string;
          }
          
          else {
            string = string + ActiveButton;
            document.querySelector("input").value = string;
          }
          return;

        }
           function shadow(hlo){
             switch(hlo){
              case "C" : 
                          var newitem = document.querySelectorAll("button")[0];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

              case "PIE" : 
                          var newitem = document.querySelectorAll("button")[1];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

               case "/" : 
                          var newitem = document.querySelectorAll("button")[2];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

               case "7" : 
                          var newitem = document.querySelectorAll("button")[4];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

               case "8" : 
                          var newitem = document.querySelectorAll("button")[5];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

              case "9" : 
                          var newitem = document.querySelectorAll("button")[6];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

              case "4" : 
                          var newitem = document.querySelectorAll("button")[8];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

               case "5" : 
                          var newitem = document.querySelectorAll("button")[9];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;

                case "6" : 
                          var newitem = document.querySelectorAll("button")[10];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
                 case "1" : 
                          var newitem = document.querySelectorAll("button")[12];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
             
                case "2" : 
                          var newitem = document.querySelectorAll("button")[13];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
             
                case "3" : 
                          var newitem = document.querySelectorAll("button")[14];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
             
                case "0" : 
                          var newitem = document.querySelectorAll("button")[16];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
             
                case "." : 
                          var newitem = document.querySelectorAll("button")[17];
                          newitem.classList.add("shadow");
                          setTimeout(function(){
                            newitem.classList.remove("shadow");
                          },100);
                          break;
                case "X" : 
                         var newitem = document.querySelectorAll("button")[18];
                         newitem.classList.add("operator");
                         setTimeout(function(){
                          newitem.classList.remove("operator");
                        },100);
             
             
                                           
                        
             }
           }
    















  