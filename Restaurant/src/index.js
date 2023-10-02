import './style.css';

const tabs = ["home", "menu", "contact"]
const data = {
    "home" : {
        "header": "The Programmer's Cafe",
        "tabContent": {
            "1" : {
                "t" : "test",
                "b" : "blah blah blah",
                "e" : "kenny",
                "img" : ""
            },
            "2" : {
                "t" : "second",
                "b" : "lorem ipsumadsibf sda fsdha fuhi",
                "e" : "kenny",
                "img" : ""
            },
        }
    },
    "menu": {
        "header": "",
        "tabContent": {

        }
    },
    "contact": {
        "header": "",
        "tabContent": ""
    }
}
let current = 0;

let content = document.getElementById("content");

function changeTab() {
    console.log(current);
    
    clearContent();

    content.appendChild(createSection(tabs[current]));

    current += 1;
    if(current > 2) {
        current = 0;
    }
}

function createSection(section) {
    const content = data[section];
    let header = document.createElement("div");
    header.innerHTML = content["header"];
    console.log(content["tabContent"]);
    for(const [ _, stuff ] of Object.entries(content["tabContent"])) {
        let toAppend = document.createElement("div");
        for(const [ cls, innerContent ] of Object.entries(stuff)) {
            let temp = document.createElement("div");
            let text = document.createTextNode(innerContent);
            temp.appendChild(text);
            toAppend.appendChild(temp);
        }

        header.appendChild(toAppend);
    }

    return header;
}

function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

document.getElementById("change").onclick = (function(){changeTab()});

changeTab();