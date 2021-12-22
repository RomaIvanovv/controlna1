getEl = x => document.querySelector(x)

let lorem1 = getEl('.box1');
let lorem2 = getEl('.form2');
let box2 = getEl('.box2')
let textarea = getEl('#textarea');
let p = getEl('p');

let f1 = document.forms.f1;
let f2 = document.forms.f2;
let f3 = document.forms.f3;
let f4 = document.forms.f4;
let f5 = document.forms.f5;
let f6 = document.forms.f6;
let f7 = document.forms.f7;
let f8 = document.forms.f8;
let f9 = document.forms.f9;

let styles = getEl('.styles');
let colors = getEl('.colors');
let colors1 = getEl('.colors1');

let red = getEl('.red');
let blue = getEl('.blue');
let green = getEl('.green');
let black = getEl('.black');
let orange = getEl('.orange');
let pink = getEl('.pink');
let white = getEl('.white');
let violet = getEl('.violet');
let aqua = getEl('.aqua');

let red1 = getEl('.red1');
let blue1 = getEl('.blue1');
let green1 = getEl('.green1');
let black1 = getEl('.black1');
let orange1 = getEl('.orange1');
let pink1 = getEl('.pink1');
let white1 = getEl('.white1');
let violet1 = getEl('.violet1');
let aqua1 = getEl('.aqua1');

let boxTableList = getEl('.boxTableList');
let table = getEl('.table');
let list = getEl('.list')

console.log(lorem1)

f1.Edit.onclick = function() { 
    lorem2.style.display = 'block';
    textarea.innerHTML = lorem1.innerHTML;
    styles.style.display = 'none';
    colors.style.display = 'none';
    colors1.style.display = 'none';
}
f2.Save.onclick = function() {
    lorem1.innerHTML = textarea.value;
    lorem2.style.display = 'none';
}
f1.Style.onclick = function() {
    styles.style.display = 'block';
    lorem2.style.display = 'none';
    colors1.style.display = 'none';
    colors.style.display = 'none';
}
f5.Color.onclick = function() {
    colors.style.display = 'flex';
    colors1.style.display = 'none';
}
f5.Background.onclick = function() {
    colors1.style.display = 'flex';
    colors.style.display = 'none';
}

for (let i = 0; i < f3.length; i++) {
    f3.elements[i].addEventListener('click', function(){
        lorem1.style.fontSize = this.value;
    })
}

f4.famaly.onchange = function() {
    for (let i = 0; i < f4.famaly.length; i++) {
        if (f4.famaly[i].selected) {
            lorem1.style.fontFamily = this.value;
        }
    }
}
// Color
red.onclick = function() {
    lorem1.style.color = 'red';
}
blue.onclick = function() {
    lorem1.style.color = 'blue';
}
green.onclick = function() {
    lorem1.style.color = 'green';
}
black.onclick = function() {
    lorem1.style.color = 'black';
}
orange.onclick = function() {
    lorem1.style.color = 'orange';
}
pink.onclick = function() {
    lorem1.style.color = 'pink';
}
white.onclick = function() {
    lorem1.style.color = 'white';
}
violet.onclick = function() {
    lorem1.style.color = 'violet';
}
aqua.onclick = function() {
    lorem1.style.color = 'aqua';
}

// BackgroundColor

red1.onclick = function() {
    lorem1.style.backgroundColor = 'red';
}
blue1.onclick = function() {
    lorem1.style.backgroundColor = 'blue';
}
green1.onclick = function() {
    lorem1.style.backgroundColor = 'green';
}
black1.onclick = function() {
    lorem1.style.backgroundColor = 'black';
}
orange1.onclick = function() {
    lorem1.style.backgroundColor = 'orange';
}
pink1.onclick = function() {
    lorem1.style.backgroundColor = 'pink';
}
white1.onclick = function() {
    lorem1.style.backgroundColor = 'white';
}
violet1.onclick = function() {
    lorem1.style.backgroundColor = 'violet';
}
aqua1.onclick = function() {
    lorem1.style.backgroundColor = 'aqua';
}

// blod / cursive text

f6.ch1.addEventListener('click', function() {
    if(this.checked) {
        lorem1.style.fontWeight = 'bold'
    }else {
        lorem1.style.fontWeight = 'normal'
    }
})

f6.ch2.addEventListener('click', function() {
    if(this.checked) {
        lorem1.style.fontStyle = 'italic'
    }else {
        lorem1.style.fontStyle = 'normal'
    }
})

// TABLE / LIST

f2.Add.onclick = function() {
    lorem1.style.display = 'none';
    f1.style.display = 'none';
    box2.style.display = 'none';
    list.style.display = 'none';
    table.style.display = 'none'
    boxTableList.style.display = 'block';
    f7.reset();
    f8.reset();
    f9.reset();
}


f7.rd1.onclick = function() {
    table.style.display = 'block'
    list.style.display = 'none'
}
f7.rd2.onclick = function() {
    list.style.display = 'block'
    table.style.display = 'none'
}

f8.buttonTable.onclick = function() {
    boxTableList.style.display = 'none'
    lorem1.style.display = 'block';
    f1.style.display = 'flex';
    box2.style.display = 'block';

    let divTable = document.createElement('div');
    let table = document.createElement('table');
    let totalTr = f8.TR.value;
    let totalTd = f8.td.value;

    f8.border.onchange = function() {
        for (let i = 0; i < f8.border.length; i++) {
        }
    }

    f8.colorBorder.onchange = function() {
        for (let i = 0; i < f8.colorBorder.length; i++) {
        }
    }

    for (let i = 0; i < totalTr; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        divTable.appendChild(table)
        for (let i = 0; i < totalTd; i++) {
            let td = document.createElement('td');
            tr.appendChild(td)
            td.innerHTML = `TD`;
            td.style.width = f8.wtd.value + 'px';
            td.style.height = f8.htd.value + 'px';
            table.style.borderCollapse = 'collapse';
            td.style.borderWidth = f8.wbr.value + 'px';
            td.style.borderColor = f8.colorBorder.value;
            td.style.borderStyle = f8.border.value;
        }
    }
    textarea.innerHTML += divTable.innerHTML;
    
}

f9.buttonList.onclick = function() {
    boxTableList.style.display = 'none';
    lorem1.style.display = 'block';
    f1.style.display = 'flex';
    box2.style.display = 'block';

    let amount = f9.li.value;

    let ul = document.createElement('ul');

    for (let i = 0; i < amount; i++) {

        f9.typeMarks.onchange = function() {
            for (let i = 0; i < f9.typeMarks.length; i++) {
            }
        }

        let li = document.createElement('li');
        li.innerHTML = `item ${i+1}`;
        li.style.listStyle = f9.typeMarks.value;
        ul.appendChild(li)
    }

    textarea.innerHTML += ul.innerHTML;
}