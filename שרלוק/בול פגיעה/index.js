    let div_roundU=document.querySelectorAll('.roundU');
    console.log(div_roundU);
    let div_roundC=document.querySelectorAll('.roundC');
    const colors=["red", "yellow", "orange", "green", "blue", "pink","skyblue","purple"];
    let bul, pgia;
    let chose_c = [];
    let guess_c=[];
    let count_rounndU=0;
    let count_rounndC=0
    let icheck=0;


    //פונקצייה בה המחשב בוחר את 4 הצבעים.
    function secretColors()
    { 
        for(let i=1;i<=4;i++)
        {
            let rand_num = Math.floor((Math.random()*8));
            chose_c.push(colors[rand_num]);
        } 
        console.log(chose_c);
    }

    secretColors();


     //פונקציה הבודקת כמה בול וכמה פגיעה.
    function checkGuess(guess_c_in)
    {
        let bul_in=0, pgia_in=0;
        let temp=[];
        
        for(let i=0;i<4;i++)
        {
            temp.push(chose_c[i]);
        }

        for(let i=0;i<4;i++)
        {
            if(temp.includes(guess_c_in[i]))
            {
                   let flag=false;
                   let color=guess_c_in[i];
                   for(let j=0;j<4;j++)
                   {
                       if(temp[j]===guess_c_in[j]&&temp[j]===color)
                       {
                           bul_in++;
                           flag=true;
                           temp[j]="";
                           
                       }
                       if(flag)
                           break;
                   }
                   if(!flag)
                   {
                       pgia_in++;
             
                       for(let j=0;j<temp.length;j++)
                       {
                           if(temp[j]===color)
                           {
                                   temp[j]="";
                                   break;
                           }
                       }
                   }
            }
        }

       bul=bul_in;
       pgia=pgia_in;

    }

 
     //פונקציה הממלא את השחורים והלבנים.
     function score()
     {
         for(let i=1;i<=bul;i++)
         {
             div_roundC[count_rounndC].style.backgroundColor="black";
             count_rounndC++;
         }
         for(let i=1;i<=pgia;i++)
         {
             div_roundC[count_rounndC].style.backgroundColor="white";
             count_rounndC++;
         }
         for(i=1;i<=4-bul-pgia;i++)
             count_rounndC++;
     }


    //פונקצית ניצחון
     function won()
     {
        let buttons=document.querySelectorAll('input');
        console.log(buttons);
        for(let i=0;i<8;i++)
        {
            buttons[i].disabled=true;
        }
        let p=document.querySelector('#text');
        p.innerText="You won!!!!"
     }
 


    //פונקציה בה השחקן מנחש את הצבעים
    function guess(c)
    {
        if(count_rounndU<12*4)
        {
            div_roundU[count_rounndU].style.backgroundColor =colors[c];
            guess_c.push(colors[c]);
            count_rounndU++;
            icheck++;
            if(icheck===4)
            {
                icheck=0;
                checkGuess(guess_c);
                score();
                if(bul===4)
                    won();
                else
                    guess_c.splice(0,4);
            }
        }
        else
        {
            let p=document.querySelector('#text');
            p.innerText="GAME-OVER"
        }
    }

   
