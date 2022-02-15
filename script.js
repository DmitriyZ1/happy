

document.querySelector('.but').addEventListener('click', process)
document.querySelector('.zanovo').addEventListener('click', sn)

function process(){
    this.classList.add('del')
    anims();
}

function sn(){
    let el = document.querySelectorAll('.el');
    el.forEach(item => {
        item.classList.add('del');
    })
    anims();
}


function startanim(el, sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(el).classList.remove('del');
            resolve();
        },sec)
    })
}






async function anims(){
    await startanim('.cvet',100);
    await startanim('.text_1',2000);
    await startanim('.text_2',2000);
    await startanim('.text_3',2000);
    await startanim('.colc',2000);
    await startanim('.zanovo',2000);
}