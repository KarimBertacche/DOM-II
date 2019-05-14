// Your code goes here
//CASHING VARIABLES FOR TARGETING ELEMENTS IN THE DOM
const heroImg = document.querySelector('.intro');
const logo = document.querySelector('.logo-heading'); 

heroImg.addEventListener('mouseover', () => {
    if(heroImg.style.transform === '') {
        heroImg.style.transform = "scale(1.2)";
        heroImg.style.backgroundColor = 'black';
        heroImg.style.color = 'white';
    } else {
        mouseOut(); 
    } 
})

const mouseOut = heroImg.addEventListener('mouseout', () => {
    heroImg.style.transform = '';
    heroImg.style.backgroundColor = '';
    heroImg.style.color = '';
})

document.addEventListener('keypress', (event) => {
    console.log(event.key);
    switch(event.key){
        case 'a':
            var audioA = new Audio('../sounds/a.mp3');
            audioA.play();
            break;
        case 'b':
            var audioB = new Audio('../sounds/b.mp3');
            audioB.play();
            break;
        case 'c':
            var audioC = new Audio('../sounds/c.mp3');
            audioC.play();
            break;
        case 'd':
            var audioD = new Audio('../sounds/d.mp3');
            audioD.play();
            break;
        case 'e':
            var audioE = new Audio('../sounds/e.mp3');
            audioE.play();
            break;
        case 'f':
            var audioF = new Audio('../sounds/f.mp3');
            audioF.play();
            break;
        case 'g':
            var audioG = new Audio('../sounds/g.mp3');
            audioG.play();
            break;
        case 'h':
            var audioH = new Audio('../sounds/h.mp3');
            audioH.play();
            break;
        case 'i':
            var audioI = new Audio('../sounds/i.mp3');
            audioI.play();
            break;
        case 'j':
            var audioJ = new Audio('../sounds/j.mp3');
            audioJ.play();
            break;
        case 'k':
            var audioK = new Audio('../sounds/k.mp3');
            audioK.play();
            break;
        case 'l':
            var audioL = new Audio('../sounds/l.mp3');
            audioL.play();
            break;
        case 'm':
            var audioM = new Audio('../sounds/m.mp3');
            audioM.play();
            break;
        case 'n':
            var audioN = new Audio('../sounds/n.mp3');
            audioN.play();
            break;
        case 'o':
            var audioO = new Audio('../sounds/o.mp3');
            audioO.play();
            break;
        case 'p':
            var audioP = new Audio('../sounds/p.mp3');
            audioP.play();
            break;
        case 'q':
            var audioQ = new Audio('../sounds/q.mp3');
            audioQ.play();
            break;
        case 'r':
            var audioR = new Audio('../sounds/r.mp3');
            audioR.play();
            break;
        case 's':
            var audioS = new Audio('../sounds/s.mp3');
            audioS.play();
            break;
        case 't':
            var audioT = new Audio('../sounds/t.mp3');
            audioT.play();
            break;
        case 'u':
            var audioU = new Audio('../sounds/u.mp3');
            audioU.play();
            break;
        case 'v':
            var audioV = new Audio('../sounds/v.mp3');
            audioV.play();
            break;
        case 'w':
            var audioW = new Audio('../sounds/w.mp3');
            audioW.play();
            break;
        case 'x':
            var audioX = new Audio('../sounds/x.mp3');
            audioX.play();
            break;
        case 'y':
            var audioY = new Audio('../sounds/y.mp3');
            audioY.play();
            break;
        case 'z':
            var audioZ = new Audio('../sounds/z.mp3');
            audioZ.play();
            break;
        case '1':
            var audio1 = new Audio('../sounds/1.mp3');
            audio1.play();
            break;
        case '2':
            var audio2 = new Audio('../sounds/2.mp3');
            audio2.play();
            break;
        case '3':
            var audio3 = new Audio('../sounds/3.mp3');
            audio3.play();
            break;
        case '4':
            var audio4 = new Audio('../sounds/4.mp3');
            audio4.play();
            break;
        case '5':
            var audio5 = new Audio('../sounds/5.mp3');
            audio5.play();
            break;
        case '6':
            var audio6 = new Audio('../sounds/6.mp3');
            audio6.play();
            break;
            case '7':
            var audio7 = new Audio('../sounds/7.mp3');
            audio7.play();
            break;
        case '8':
            var audio8 = new Audio('../sounds/8.mp3');
            audio8.play();
            break;
        case '9':
            var audio9 = new Audio('../sounds/9.mp3');
            audio9.play();
            break;
        case '0':
            var audio0 = new Audio('../sounds/0.mp3');
            audio0.play();
            break;
    }
})
