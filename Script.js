function sleep_in(weekday,vacation){
    if(weekday && !vacation){
        return false;
    }else{
        return true;
    }

}

function monkey_trouble(a_smile, b_smile){

    if(a_smile && b_smile){
        return true;
    }else{
        if(a_smile||b_smile){
            return false;

        }
    }
    if(!a_smile, !b_smile){
        return true;
    }
    if(!a_smile || b_smile){
        return false;
    }
}


function string_times(string,num){
    var answer= "";
    for(var i=0; i<num; i++){
        answer+=string;
    }
    return answer;
}


function front_times(string,num){
    var answer="";
    for(var i=0; i<num; i++){
        answer+= string.substring(0,3);
    }
    return answer;
}


function string_bits(string){
    var answer="";
    for(var i=0; i<string.length; i+=2){
        answer+= string[i];
    }
    return answer;
}

function caughtSpeeding(sp,birthday) {
    var sp= speed;
    if(birthday){
        num-=5
    }
    if(num<=60
    ){
        return 0;
    }else if(num<=80){
        return 1;
    }else{
        return 2;
    }

}


function fizz_buzz(string){
    if (string%3==0 && string%5==0){
        return "FizzBuzz";
    }else if(string%3==0){
        return "Fizz";
    }else if(string%5==0){
        return "Buzz";
    }else {
        return string +"!";
    }
}
function teaParty(tea,candy){

    if(tea<5 || candy<5){
        return 0;
    }else if(tea>=candy*2 || candy>=tea*2) {
        return 2;
    }else{
        return 1;
    }

}

function blackjack(x,y){
    if(x<=21 && y<x){
        return x;
    }else if(y<=21 && x<y) {
        return y;
    }else if(y>21 && x>21){
        return 0;
    }else if(x>21 && y<x){
        return y;
    }else if(y>21 && x<y){
        return x;
    }
}

function loneSum(a,b,c){
    if(a==c && a==b){
        return 0;
    }
    if(a==c){
        a=0;
        c=0;
    }
    if(a==b) {
        a = 0;
        b = 0;

    }
    if(b==c){
        b=0;
        c=0;
    }
    return a+b+c;
}



function tester() {
    console. log(num);
    document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output1").innerHTML = monkey_trouble(a_smile,b_smile);
    document.getElementById("output2").innerHTML = string_times("Seli",3);
    document.getElementById("output3").innerHTML = front_times("Down",7);
    document.getElementById("output4").innerHTML = string_bits("Hi");
    document.getElementById("output5").innerHTML = caughtSpeeding(65,false);
    document.getElementById("output6").innerHTML = fizzString(27);
    document.getElementById("output7").innerHTML = teaParty(3,8);
    document.getElementById("output8").innerHTML =blackjack(5,10);
    document.getElementById("output9").innerHTML = loneSum(6,7,8);
    //test third method, etc
}






