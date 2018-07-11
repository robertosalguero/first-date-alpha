const modal = document.getElementById('gameinfo');
const start = document.getElementById("start");
const info = document.getElementById("info");
const vol = document.querySelector(".vol");
const span = document.getElementsByClassName("close")[0];
const main = document.querySelector(".landingwrap");
const select = document.querySelector(".selectwrap");
const choice = document.querySelectorAll(".choice");
const stat1 = document.querySelector("#wun");  
const stat2 = document.querySelector("#two");
const stat3 = document.querySelector("#tree");
const vend = document.querySelector("#blaze");
const box = document.querySelector("#bomb");
const mask = document.querySelector("#douche");
const con = document.querySelector(".container");
const view = document.querySelector(".viewer");
const prom = document.querySelector(".prompt");
const all = document.querySelectorAll(".dec");
const ch1 = document.querySelector("#ay");
const ch2 = document.querySelector("#bee");
const ch3 = document.querySelector("#see");
const ch4 = document.querySelector("#dee");


//scen2-1
const sure = "sure, ill just wait a little while";
const weird = "dont make me drink alone! ill feel weird";
const day = "cool how's your day";
const rude = "thats rude why would you turn down my offer";
const stare = "*angry stare*";

//scen3-1A
const sick = "you know, i just don't think i'm feeling well right now";
const show = "why did you even show up?";
const sorr = "i'm sorry, i couldn't tell";
const ord = "haha why don't we order some food?";
const wut = "okay, whatever";

//scen3-1B
const prod = "it was okay. happy i was able to be productive, but i'm starving.";
const much = "damn, okay. just don't order too much food.";
const goo = "that's good.";
const morn = "you have any plans in the morning?";

//scen3-2
const leav = "*picks up phone* oh my god im so sorry i have to go";
const ple = "please don't we have a connection";
const tra = "wow just like my mother";
const pol = "okay it was nice meeting u";

//scen3-3
const pun = "haha i hope youre a little more punctual than me. so unattractive";
const nah = "nah im usually pretty good about that";
const who = "who? me? naaaaaaaah";
const act = "i have a huge problem, its debilitating";
const ass = "who cares time is an illusion";

//scen3-3A
const tep = "that's good.";
const dis = "yeah, im very disciplined.";
const sub = "pretty annoyed that i had to wait, honestly";
const mat = "i guess. doesn't really matter to me.";

//scen3-3B
const heh = "hehe yeah i'm sure.";
const ser = "i'm serious!! you think i would lie to you???";
const han = "::raises hand:: hand to god";
const fin = "fine don't believe me.";

//scen3-3C
const wow = "wow you should really talk to someone about that.";
const bag = "::unload emotional baggage::";
const her = "why do you think i'm here?";
const mom = "yeah, thats what my mom says.";

//scen3-3D
const ifu = "if you say so";
const spl = "explain the space-time continuum";
const que = "did i say something?";
const sti = "keep that in mind if i'm ever late.";

//scen3-4
const sor = "really im so sorry im terrible do you still want dinner?";
const mes = "yeah haha i was just messing with you";
const qui = "im outta here";
const gui = "at this point im not sure";

//scen3-4A
const wor = "oh okay, i was worried for a second. don't play like that!";
const resi = "sorry, i couldn't resist.";
const use = "get used to it.";
const sens = "don't be so sensitive";

//scen4
const tell = "so why don't you tell me about yourself";
const rap = "i'm a rapper. been building a movement the past couple years";
const ex = "::tell a story about most recent relationship and why it ended::";
const goal = "::share a reasonable yet ambitious goal you set for yourself::";
const open = "::open up about something with which you have recently struggled::";

//scen5
const bou = "wow, i didn't know that about you. tell me more";
const gut = "::spill your guts::";
const emb = "::tell an embarassing story::";
const shy = "::express some shyness::";
const sou = "::offer a soundcloud link::";

//scen6
const dwb = "don't worry about that, it's fine.";
const som = "::express some embarassment::";
const list = "yeah, i know. thanks for listening";
const sen = "::send soundcloud link anyway::";
const shr = "::shrung it off::";

//scen7
const awk = "::awkward silence::";
const ork = "::ask about work::";
const fam = "::ask about family::";
const self = "::talk more about yourself::";
const hob = "::ask about hobbies::";

//scen8-1
const tir = "i don't even want to think about work";
const pry = "::keep inquiring about her job::";
const gla = "i'm glad you came out tonight. this was fun";
const cre = "::complement her body::";

//scen8-2
const miss = "we're very close. i miss them so much";
const lam = "::lament about you and your mother's relationship::";
const wei = "::ask about her mother's weight::";
const shar = "::share an intimate family story::";

//scen8-3
const mad = "things've been so hectic lately i don't have time for much. i love singing!";
const col = "you should check out my soundcloud. maybe we can collab";
const righ = "sing something. i'll tell you if you're any good";
const hea = "i'd like to hear you one day. probably much better than me in the shower";

//scen9-1
const thin = "its getting late. i'm gonna start heading home."
const alr = "already? woooow";
const than = "thanks for coming out! i'll call you";

//scen9-2
const fun = "this was fun! i know a place nearby if you're not too tired";
const coo = "i'm good. let's get out of here";
const nop = "actually i have to get up pretty early in the morning";

const a = new Audio("audio/inmyfeelings.mp3");
a.loop = true;
setTimeout(a.play(), 1000);


info.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

const tog = function () {
    if (a.muted===false) {
        vol.style.backgroundColor = "#ff6933";
        a.muted=true;}
    else {vol.style.backgroundColor = "#009a83";
        a.muted=false;}
}

vol.addEventListener("click", tog);

const star = function () {
    main.style.display = "none";
}

const begin = function () {
    main.classList.add("top");
}
start.addEventListener("click", (evt) => {
    begin();
    setTimeout(star, 1450);
});

const gone = function () {
    select.style.display="none";
}
const selected = function () {
    select.classList.add("opa");
    vol.classList.add("opa");
    setTimeout(gone, 1000);
    vol.style.display="none";
}

const show1 = function () {
    wun.style.display="block";
}
const hide1 = function () {
    wun.style.display="none";
}
const show2 = function () {
    too.style.display="block";
}
const hide2 = function () {
    too.style.display="none";
}
const show3 = function () {
    tree.style.display="block";
}
const hide3 = function () {
    tree.style.display="none";
}
vend.addEventListener("mouseenter", show1);
vend.addEventListener("mouseout", hide1);
box.addEventListener("mouseenter", show2);
box.addEventListener("mouseout", hide2);
mask.addEventListener("mouseenter", show3);
mask.addEventListener("mouseout", hide3);

let charArray = [];
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", (evt) => {
        let tar=evt.target;
        selected();
        a.pause();
        charArray.push(tar.id);
    });
}

let scen = function(res, pos1, pos2, pos3, pos4) {
    prom.innerHTML=res;
    ch1.innerHTML=pos1;
    ch2.innerHTML=pos2;
    ch3.innerHTML=pos3;
    ch4.innerHTML=pos4;
}

const job = "great job!";
const win = function () {
    view.style.backgroundImage = "url('images/win.gif')";
    a.play();
    scen(job, null, null, null, null); }

const losi = "love is a losing game";
const lose = function () {
    view.style.backgroundImage = "url('images/lose.png')";
    scen(losi, null, null, null, null) }

let upset = function () {
    view.style.backgroundImage = "url('images/uprestcopy.png')";
}
let pathArray = [];

let checkPath = function (arr) {
    ///
    if (arr[0] == ["ay"])
    {scen(sure, weird, day, rude, stare);}
    if (arr[0] == ["bee"])
    {scen(leav, ple, tra, pol, stare);}
    if (arr[0] == ["see"])
    {scen(pun, nah, who, act, ass);}
    if (arr[0] == ["dee"])
    {scen(sor, mes, gui, qui, stare);}
    ///
    if (arr[0] == ["ay"] && arr[1] == ["ay"]) 
        { upset();
        scen(sick, show, sorr, ord, wut); }
    if (arr[0] == ["ay"] && arr[1] == ["bee"]) 
    { scen(prod, much, goo, ord, morn); }
    if (arr[0] == ["ay"] && arr[1] == ["see"]) 
        { upset();
            scen(thin, null, null, null, null);
            setTimeout(lose, 3000);}
    if (arr[0] == ["ay"] && arr[1] == ["dee"]) 
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    ///
    if (arr[0] == ["bee"] && arr[1] == ["ay"]) 
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (arr[0] == ["bee"] && arr[1] == ["bee"]) 
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (arr[0] == ["bee"] && arr[1] == ["see"]) 
        { scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (arr[0] == ["bee"] && arr[1] == ["dee"]) 
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    ///
    if (arr[0] == ["see"] && arr[1] == ["ay"])
        { scen(tep, dis, sub, mat, ord);}
    if (arr[0] == ["see"] && arr[1] == ["bee"])
        { scen(heh, ser, han, ord, fin);}
    if (arr[0] == ["see"] && arr[1] == ["see"])
        { scen(wow, bag, mom, her, ord);}
    if (arr[0] == ["see"] && arr[1] == ["dee"])
        { upset();
        scen(ifu, spl, que, sti, ord);}
    ///
    if (arr[0] == ["dee"] && arr[1] == ["ay"])
        { scen(wor, resi, use, sens, ord);}
    if (arr[0] == ["dee"] && arr[1] == ["bee"])
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (arr[0] == ["dee"] && arr[1] == ["see"])
        { upset();
        scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (arr[0] == ["dee"] && arr[1] == ["dee"])
        { upset();
         scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    if (pathArray.length === 3)
        { scen(tell, rap, ex, goal, open);}
    if (pathArray,length === 4)
        { scen(bou, gut, emb, shy, sou);}
    if (pathArray.length === 5)
        { scen(dwb, som, list, sen, shr);}
    if (pathArray.length === 6)
        { scen(awk, ork, fam, self, hob);}
    if (pathArray[6] == ["ay"])
        { scen(tir, pry, gla, cre, awk);}
    if (pathArray[6] == ["bee"])
        { scen(miss, lam, wei, shar, awk);}
    if (pathArray[6] == ["see"])
        { scen(mad, col, righ, hea, awk)}
    if (pathArray[7] == ["bee"])
        { scen(thin, null, null, null, null);
        setTimeout(lose, 3000);}
    //if (pathArray.length === 8)
     //   { scen(thin, alr, than, null, null);
     //       setTimeout(lose, 2000);}
    if (pathArray.length === 8)
        { scen(fun, coo, nop, null, null)
        setTimeout(win, 2000);
        scen(job, null, null, null, null)
    }
    

}

con.addEventListener("click", (evt) => {
        let tar=evt.target;
        evt.stopPropagation();
        pathArray.push(tar.id);
            checkPath(pathArray);
})

