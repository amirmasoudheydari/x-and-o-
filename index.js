
let $ul = document.querySelector('.ul')
let $reset = document.querySelector('#reset')
let $message = document.querySelector('#message')

let count = 0;
let items = {};
let x = {};
let o = {};
let WinningMode = ['123','369','789','147','159','357','147','258','369','456','321','963','789','741','951','753','741','852','963','654']

$ul.onclick = (event) => {


    let _classLi = event.target.className;
    let _span = event.target.firstElementChild;

    if(_classLi == 'liItem' && _span.innerText.length == 0){
        let _id = _span.id;

        if(count % 2 == 0){
            _span.innerText = 'x'
            items[_id] = 'x';
            x[_id] = 'x'
        }else{
            _span.innerText = 'o'
            items[_id] = 'o';
            o[_id] = 'o'
        }
        
        count += 1;
        if(count > 4){
            handelClick();
        }
        console.log($message.length);
        if(count == 9 && $message.length == undefined){
            $message.innerText = 'بدون برنده';
            $ul.onclick = ''
        }
    }
}

function handelClick(){
    let lenghO = Object.keys(o).length
    let lenghX = Object.keys(x).length
    let stringO = Object.keys(o).join('')
    let stringX = Object.keys(x).join('')




    if(lenghO > 2){
        WinningMode.forEach(item => {
            let sItem = item.split('')
            let xx = 0
            sItem.forEach(lit =>{

                if(stringO.includes(lit)){
                    xx +=1;
                }

                if(xx == 3){
                    $message.innerText = 'user2 برنده شد'
                    $ul.onclick = ''
                }
            })
        })
    }



    if(lenghX > 2){
        WinningMode.forEach(item => {
            let sItem = item.split('')
            let xx = 0
            sItem.forEach(lit =>{
                if(stringX.includes(lit)){
                    xx +=1;
                }

                if(xx == 3){
                   $message.innerText = 'user1 برنده شد'
                    $ul.onclick = ''
                }
            })
        })
    }
}

$reset.onclick = () =>{
    window.location.reload();
}