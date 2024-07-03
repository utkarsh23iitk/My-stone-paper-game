let you=document.querySelector('#user-score');
let comp=document.querySelector('#comp-score');

let userscore=0;
let compscore=0;

let mssg=document.querySelector('#mssg');
let userchoice;
const choices=document.querySelectorAll('.choice')

const gencompchoice=()=>{
    const options=['rock','paper','scissor'];
   const ranindex=Math.floor(Math.random()*3);
   return options[ranindex];

}
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    console.log('comp choice = ',compchoice);
    if(userchoice==compchoice){
        mssg.innerText="This Round is Tied !!";
        mssg.style.backgroundColor='cornflowerblue';
        userscore++;
        compscore++;

    }
    else if(userchoice=='scissor'&&compchoice=='paper'||userchoice=='paper'&&compchoice=='rock'||userchoice=='rock'&&compchoice=='scissor'){
        mssg.innerText=`You Win !! Your ${userchoice} beats comp ${compchoice} `;
        mssg.style.backgroundColor='green';
        userscore=userscore+5;
        
    }
    else{
        mssg.innerText=`You Lose !! Comp ${compchoice} beats My ${userchoice}`;
        mssg.style.backgroundColor='Red';
        compscore=compscore+5;
    }
    you.innerText=userscore;
    comp.innerText=compscore;

}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute('id');

        console.log('Users choise is',userchoice);
        playgame(userchoice);
    });
});

