const rows=5;
const cols=5;


var boxes = document.getElementsByClassName("box");
var boxesList=Array.from(boxes);

var leftBoxes=[]
var rightBoxes=[]
var leftMatrix = [[],[],[],[],[]];
var rightMatrix = [[],[],[],[],[]];

function generate() {
    for (let x = 0; x < boxesList.length; x++) {
        const element = boxesList[x];
        
        if (x < boxesList.length/2){
            leftBoxes.push(element)
            element.innerHTML= Math.floor(Math.random() * (99 - 10)) + 10;
        }
        else{
            rightBoxes.push(element)
            element.innerHTML="";
        }
    }
    var z = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            leftMatrix[r][c]=leftBoxes[z];
            rightMatrix[r][c]=rightBoxes[z];
            z++;
        }   
    }
    delete z;   
}
    
    
var select = document.getElementById("chosen_option")
console.log(select.value);

select.addEventListener('change',function(){
    let option = parseInt(select.value);
    console.log(option);
    switch (option) {
        case 1:
            generate();
            break;
        case 2:
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }   
            }
            alert("2 completed");
            break;
        case 3:
            for (let r = 0; r < rows; r++) {
                rightMatrix[r][(rows-1)-r].innerHTML=leftMatrix[r][(rows-1)-r].innerHTML;
            }
            break;
        case 4:
            for (let r = 0; r < rows; r++) {
                rightMatrix[r][r].innerHTML=leftMatrix[r][r].innerHTML;
            }
            break;
        case 5:
            for (let r = 0; r < 2; r++) {
                for (let c = 3; c < 5; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }
            }
            break;
        case 6:
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }
            }
            break;
        case 7:
            for (let r = 3; r < 5; r++) {
                for (let c = 3; c < 5; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }
            }
            break;
        case 8:
            for (let r = 3; r < 5; r++) {
                for (let c = 0; c < 2; c++) {
                    rightMatrix[r][c].innerHTML=leftMatrix[r][c].innerHTML;
                }
            }
            break;
        case 9:
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    rightMatrix[r][c].innerHTML="";
                }   
            }
            break;
                 
    }   
    
})