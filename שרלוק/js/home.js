sessionStorage.setItem('count_player',JSON.stringify(0));

let myhome=document.querySelector('#home');

function creatBoard()
{
    
    let games=document.createElement('div');
    games.id="games";
    games.background
    let logo=document.createElement('img');
    logo.src="./picture/logo.jpg"
    games.append(logo);
    

    //שרלוק
    let sherlock=document.createElement('a');
    sherlock.href="./html/sherlockLogin.html";
    let sherlock_button=document.createElement('input');
    sherlock_button.id="sherlock_button"
    sherlock_button.type='button';
    sherlock_button.value="שרלוק";
    sherlock.append(sherlock_button);
    games.append(sherlock);

    //בול פגיעה
    let master_mind=document.createElement('a');
    master_mind.href="./בול פגיעה/index.html";
    let master_mind_button=document.createElement('input');
    master_mind_button.id="master_mind";
    master_mind_button.type='button';
    master_mind_button.value="בול פגיעה";
    master_mind.append(master_mind_button);
    games.append(master_mind);

    //משחק זיכרון
    let memory_game=document.createElement('a');
    memory_game.href="./בול פגיעה/index.html";
    let memory_game_button=document.createElement('input');
    memory_game_button.id="memory_game";
    memory_game_button.type='button';
    memory_game_button.value="משחק זיכרון";
    memory_game.append(memory_game_button);
    games.append(memory_game);

    //טטריס
    let tetris=document.createElement('a');
    tetris.href="./טטריס/index.html";
    let tetris_button=document.createElement('input');
    tetris_button.type='button';
    tetris_button.id="tetris";
    tetris_button.value="טטריס";
    tetris.append(tetris_button);
    games.append(tetris);

    myhome.append(games);
}

creatBoard()
