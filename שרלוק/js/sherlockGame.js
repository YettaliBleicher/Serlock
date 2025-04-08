let myBoardGame=document.querySelector('#boardGame');
let myChoosePicture=document.querySelector('#choosePicture');
let myTools=document.querySelector('#tools');

let arr_cards=[];
let arr_cards_in_board=[];
let heap_of_cards = [
    {
        "name":"בייגלה",
        "src":"../picture/41.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"בלון",
        "src":"../picture/45.jpeg",
        "direction":"right",
        "steps":4
    },
    {
        "name":"בננה",
        "src":"../picture/33.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        
        "name":"בקבוק",
        "src":"../picture/21.jpeg",
        "direction":"right",
        "steps":1
    },
    
    {
        "name":"ברווז",
        "src":"../picture/5.jpeg",
        "direction":"right",
        "steps":3
    },
    {
        "name":"גזר",
        "src":"../picture/15.jpeg",
        "direction":"left",
        "steps":1
    },
    {
        "name":"גלגל",
        "src":"../picture/6.jpeg",
        "direction":"right",
        "steps":3
    },
    {
        "name":"גלידה",
        "src":"../picture/30.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"גפרור",
        "src":"../picture/8.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"גרביים",
        "src":"../picture/36.jpeg",
        "direction":"right",
        "steps":3
    },
    {
        "name":"דג",
        "src":"../picture/38.jpeg",
        "direction":"right",
        "steps":3
    },
    {
        "name":"דובדבן",
        "src":"../picture/7.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"דובי",
        "src":"../picture/31.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"דלי",
        "src":"../picture/18.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"חולצה",
        "src":"../picture/27.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"כובע",
        "src":"../picture/49.jpeg",
        "direction":"right",
        "steps":4
    },
    {
        "name":"כובע שמש",
        "src":"../picture/46.jpeg",
        "direction":"right",
        "steps":4
    },
    {
        "name":"כוכב ים",
        "src":"../picture/16.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"כוס",
        "src":"../picture/19.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"כסא",
        "src":"../picture/26.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"מטאטא",
        "src":"../picture/25.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"מטריה",
        "src":"../picture/39.jpeg",
        "direction":"left",
        "steps":4
    },
    {
        "name":"מכחול",
        "src":"../picture/3.jpeg",
        "direction":"right",
        "steps":3
    },

    {
        "name":"מספריים",
        "src":"../picture/14.jpeg",
        "direction":"left",
        "steps":1
    },
    
    {
        "name":"מסרק",
        "src":"../picture/10.jpeg",
        "direction":"left",
        "steps":1
    },
    {
        "name":"מעדר",
        "src":"../picture/4.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"מפתח",
        "src":"../picture/37.jpeg",
        "direction":"right",
        "steps":3
    },
    {
        "name":"משקפיים",
        "src":"../picture/48.jpeg",
        "direction":"right",
        "steps":4
    },
    {
        "name":"מתנה",
        "src":"../picture/2.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"נוצה",
        "src":"../picture/42.jpeg",
        "direction":"left",
        "steps":4
    },
    {
        "name":"נורה",
        "src":"../picture/44.jpeg",
        "direction":"right",
        "steps":4
    },
    {
        "name":"נעל",
        "src":"../picture/34.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"נר",
        "src":"../picture/20.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"סוכריה",
        "src":"../picture/40.jpeg",
        "direction":"left",
        "steps":4
    },
    {
        "name":"ספר",
        "src":"../picture/22.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"עוגן",
        "src":"../picture/17.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"עיפרון",
        "src":"../picture/47.jpeg",
        "direction":"left",
        "steps":4
    },
    {
        "name":"עפיפון",
        "src":"../picture/12.jpeg",
        "direction":"left",
        "steps":1
    },
    {
        "name":"פטיש",
        "src":"../picture/35.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"פטריה",
        "src":"../picture/1.jpeg",
        "direction":"left",
        "steps":3
    },
    {
        "name":"פעמון",
        "src":"../picture/29.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"פרפר",
        "src":"../picture/32.jpeg",
        "direction":"right",
        "steps":2
    },
    {
        "name":"ציפור",
        "src":"../picture/24.jpeg",
        "direction":"left",
        "steps":1
    },
    {
        "name":"קומקום",
        "src":"../picture/28.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"שולחן",
        "src":"../picture/13.jpeg",
        "direction":"left",
        "steps":1
    },
    {
        "name":"שמש",
        "src":"../picture/11.jpeg",
        "direction":"right",
        "steps":1
    },
    {
        "name":"שעון",
        "src":"../picture/23.jpeg",
        "direction":"left",
        "steps":2
    },
    {
        "name":"תוף",
        "src":"../picture/43.jpeg",
        "direction":"left",
        "steps":4
    },
    {
        "name":"תפוח",
        "src":"../picture/9.jpeg",
        "direction":"right",
        "steps":3
    },
];

let radios_in_board=[];
let amount_cards=49;
let sherlock;
let logo;
// let strat=true;
let name_player1=JSON.parse(sessionStorage.getItem('currntUser1'));
let name_player2=JSON.parse(sessionStorage.getItem('currntUser2'));
let player1=true;
let player2=false;
let button_ok;
let card_for_player1=0;
let card_for_player2=0;
let check_is_open=[false,false,false,false,false,false,false,false];
// let begin_game;
let button_start;
let timer;
//new
// let tmpSound;
let tmpSource;



 //פוקציה  לייצירת בנק אפשרויות הקלפים
function createRadios()
{
    let defulft_radio;
    let fieldset=document.createElement('fieldset');
    let legend=document.createElement('legend');
    legend.innerHTML="בלש אמיתי? תנחש";
    fieldset.appendChild(legend);

    for(let i = 0; i < 49; i++)
    {
        let div=document.createElement('div');
        div.className="chooses";
        let radio=document.createElement('input');
        radio.type="radio";
        radio.name="answer";
        radio.className="radio";
        radio.id=heap_of_cards[i].name;
        let label=document.createElement('label');
        label.innerHTML=heap_of_cards[i].name;
        div.append(radio);
        div.append(label);
        fieldset.append(div);
        myChoosePicture.append(fieldset);
        radios_in_board.push(div);
        defulft_radio=radio;
    }
    defulft_radio.checked=true;
    let ok=document.createElement('input');
    ok.id="ok"
    ok.type="button";
    ok.value="אישור";
    ok.disabled=true;
    ok.addEventListener('click',checkChoosen);
    myChoosePicture.append(ok);
    button_ok=document.querySelector("#ok");
}

function createTools()
{
    let menue=document.createElement('div');
    let container=document.createElement('div');
    let line1=document.createElement('div');
    container.append(line1);
    let line2=document.createElement('div');
    container.append(line2);
    let line3=document.createElement('div');
    container.append(line3);
    menue.append(container);


    let nav_tool=document.createElement('div');
    nav_tool.className="navTools";

    //דף הבית
    let button_home=document.createElement('button');
    button_home.className="tool";
    button_home.title="דף הבית";
    let a_home=document.createElement('a');
    a_home.href="../home.html";
    button_home.append(a_home);
    let img_home=document.createElement('img');
    img_home.className="imgTool";
    // img_home.id="menue_img_home";
    img_home.src="../picture/home page.png";
    a_home.append(img_home);
    nav_tool.append(button_home);

    //הוראות
    let button_how_to=document.createElement('button');
    button_how_to.className="tool";
    let img_how=document.createElement('img');
    img_how.className="imgTool";

    img_how.src="../picture/how to.png";
    img_how.title="הוראות";
    button_how_to.append(img_how);
    nav_tool.append(button_how_to);


    //משחק חדש
    let a=document.createElement('a');
    a.href="./sherlockGame.html";
    let button_new_game=document.createElement('button');
    button_new_game.className="tool";
    let img_new=document.createElement('img');
    img_new.className="imgTool";

    img_new.src="../picture/new game.png";
    img_new.title="משחק חדש";
    button_new_game.append(img_new);
    a.append(button_new_game);
    nav_tool.append(a);


    //התחל משחק
    button_start=document.createElement('button');
    button_start.addEventListener('click', fillBoard);
    button_start.className="tool";
    let img_start=document.createElement('img');
    img_start.className="imgTool";

    img_start.src="../picture/exit.png";
    img_start.title="התחל משחק";
    button_start.append(img_start);
    nav_tool.append(button_start);

    //שמע
    let button_sound=document.createElement('button');
    button_sound.className="tool";
    let img_sound=document.createElement('img');
    img_sound.className="imgTool";
    img_sound.src="../picture/sound.png";
    img_sound.title="שמע";
    button_sound.append(img_sound);
    nav_tool.append(button_sound);

    //טיפול בסאונד
    let tmpSound=document.createElement('audio');
    tmpSource=document.createElement('source')



    menue.append(nav_tool);
    myTools.append(menue);
}

//פונקציה ליצירת לוח המשחק (קלפים)
function makeBoard()
{
    let arr_current=[];
    for(let i=0;i<9;i++)
    {
        let card=document.createElement('div');
        card.className="card";
        card.id='c'+i;
        myBoardGame.append(card);
        arr_current.push(card);
        let back=document.createElement('img');
        if(i!=4)
            back.src="../picture/BACK.jpeg";
        back.className="back";
        card.append(back);
    }

    //סידור הכרטיסים שבמעגל במערך 
    for(let i=0;i<3;i++)
    {
        arr_cards.push(arr_current[i]);
    }

    arr_cards.push(arr_current[5]);
    for(let i=8 ;i>=6;i--)
    {
        arr_cards.push(arr_current[i]);
    }

    arr_cards.push(arr_current[3]);
    logo=arr_current[4];
    console.log(arr_cards);
    fillBack();
}

function fillBack()
{
    for(let i=0; i<8;i++)
    {
        arr_cards[i].lastElementChild.src="../picture/BACK.jpeg";
    }
}

//פונקציה למילוי הקלפים בקרטיסים חדשים
function fillBoard()
{
    button_start.disabled=true;
    // button_start.disabled=true;
    arr_cards_in_board=[];
    $("div#c4").empty();
    let p=document.createElement('div');
    p.id="p";
    let img=document.createElement('img');
    if(player1)
    {
        img.src="../picture/player1.png";
        p.innerHTML=name_player1.name;
        logo.append(img);
        logo.append(p);
    }
    else
    {
        img.src="../picture/player2.png";
        p.innerHTML=name_player2.name;
        logo.append(img);
        logo.append(p);
    }
    let num;
    for(let i=0; i<8;i++)
    {
        num = Math.floor((Math.random()*amount_cards));
        arr_cards[i].lastElementChild.src=heap_of_cards[num].src;
        arr_cards_in_board.push(heap_of_cards[num]);
        heap_of_cards.splice(num,1);
        amount_cards--;
    }
    
    button_ok.disabled=true;
    setTimeout(() => {
        for(let i=0; i<8;i++)
            {
                arr_cards[i].lastElementChild.src="../picture/BACK.jpeg";
            }
        randSherlock();

    }, 10000);

    let counter=10;

    timer= setInterval(()=>{
        counter--;
        document.querySelector("#timer")
    })

}



//פונקציה לרינדום מקום השרלוק - בתחילת תור וכאשר מתחלף קלף
function randSherlock()
{
        button_ok.disabled=true;

        sherlock = Math.floor((Math.random()*8));
        while(check_is_open[sherlock])
            sherlock = Math.floor((Math.random()*8));
        setTimeout(()=>{
            arr_cards[sherlock].lastElementChild.src="../picture/SHERLOCK.jpeg";
            button_ok.disabled=false;

        },1000)
}

//פונקציה לבדיקת הבחירה של השחקן
function checkChoosen()
{
    let answers = document.getElementsByName('answer');
    // button_ok.disabled=true;
    for(i = 0; i < answers.length; i++) {
        if(answers[i].checked)
        {
            result = answers[i].id;
            break;
        }
       
    }

    if(arr_cards_in_board[sherlock].name===result)
    {
        moveSherlock();
    }

    else
    {
        console.log(heap_of_cards.length);
        amount_cards+=8;
        for(let i=0; i<8; i++)
        {
            heap_of_cards.push(arr_cards_in_board[i]);
        }
        console.log(heap_of_cards.length);

        if(player1)
        {
            player1=false;
            player2=true;
        }

        else
        {
            player1=true;
            player2=false;
        }

        fillBoard();
    }

}

//פונקציה להזזת מיקום השרלוק לפי הקלף עליו הוא עומד
function moveSherlock()
{
    arr_cards[sherlock].lastElementChild.src=arr_cards_in_board[sherlock].src;
    check_is_open[sherlock]=true;
    
    let direct=arr_cards_in_board[sherlock].direction;
    let step=arr_cards_in_board[sherlock].steps;
    let tmp_sherlock=sherlock;
    
    if(direct==="right")
    {
        for(let i=0;i<step;i++)
        {
            if(tmp_sherlock+1===8)
                tmp_sherlock=0;
            else
                tmp_sherlock++;
        }
    }
    else
    {
        for(let i=0;i<step;i++)
        {
            if(tmp_sherlock===0)
                tmp_sherlock=7;
            else
                tmp_sherlock--;
        }
    }

    sherlock=tmp_sherlock;
    checkIsOpen();
}


function checkIsOpen()
{
    if(check_is_open[sherlock]===false)
        arr_cards[sherlock].lastElementChild.src="../picture/SHERLOCK.jpeg";
    else
    {
        if(player1)
        {
            card_for_player1++;
            if(card_for_player1===6)
                console.log("player1 you are won!");
        }
        else 
        {
            card_for_player1++;
            if(card_for_player1===6)
                console.log("player2 you are won!");
        }
        console.log( arr_cards_in_board[sherlock]);
        arr_cards_in_board[sherlock]=null;
        console.log( arr_cards_in_board[sherlock]);
        changeCard();
    }
}

//פונקציה המחליפה קלף
function changeCard()
{
    arr_cards[sherlock].lastElementChild.src="";
    let num;
        setTimeout(() => {

        num = Math.floor((Math.random()*amount_cards));
        arr_cards[sherlock].lastElementChild.src=heap_of_cards[num].src;
        arr_cards_in_board[sherlock]=heap_of_cards[num];
        heap_of_cards.splice(num,1);
        amount_cards--;
        check_is_open[sherlock]=false;
        button_ok.disabled=true;
        setTimeout(() => {
            arr_cards[sherlock].lastElementChild.src="../picture/BACK.jpeg";
            randSherlock();
            button_ok.disabled=false;
                
        },2000);
    }, 2000);

}

createRadios();
createTools();
makeBoard();
