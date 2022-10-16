const rows=5;
const cols=5;


var boxes = document.getElementsByClassName("box");
var boxesList=Array.from(boxes);

var leftBoxes=[]
var rightBoxes=[]

for (let x = 0; x < boxesList.length; x++) {
    const element = boxesList[x];
    
    if (x < boxesList.length/2){
        leftBoxes.push(element)
        element.innerHTML= Math.floor(Math.random()*100);
    }
    else{
        rightBoxes.push(element)
        element.innerHTML= "0";
    }
}



var leftMatrix = [[],[],[],[],[]]
var rightMatrix = [[],[],[],[],[]]


var z = 0;
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        leftMatrix[r][c]=leftBoxes[z];
        rightMatrix[r][c]=rightBoxes[z];
        z++;
    }   
}
delete z;   


/* 
var delay = 50;


function add(r,c,times_done) {
    if (typeof times_done === 'undefined') {times_done = 0;}
    let obj = rightMatrix[r][c];
    let till = parseInt(leftMatrix[r][c].innerHTML);
    current_num=parseInt(obj.innerHTML);
    if (current_num < till) {
        obj.innerHTML!=till? obj.innerHTML++ :clearTimeout(timer);
        var timer = setTimeout(add,delay,r,c,times_done)
    }
}



for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        var loop = setInterval(add,delay,r,c)
    }   
}
 */
var select = document.getElementById("chosen_option")
console.log(select.value);



select.addEventListener('change',function(){
    let option = parseInt(select.value);
    console.log(option);
    switch (option) {
        case 0:
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }   
            }
            break;
        case 1:
            let c = 2;
            for (let r= 0; r < cols; r++) {
                rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
            }
            break;
        case 2:
            let r = 2;
            for (let c = 0; c < cols; c++) {
                rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
            }   
            break;
        case 3:
            for (let r = 0; r < rows; r++) {
                rightMatrix[r][r].innerHTML=leftMatrix[r][r].innerHTML;
            }
            break;
        case 4:
            for (let r = 0; r < rows; r++) {
                rightMatrix[r][(rows-1)-r].innerHTML=leftMatrix[r][(rows-1)-r].innerHTML;
            }
            break;
        case 5:
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    rightMatrix[r][c].innerHTML=0;
                }   
            }
            break;
                            
    }   
    
})
