window.addEventListener("DOMContentLoaded",main);

function first(){
    return new Promise((resolve)=>{
        function okFirst(){
            console.log("Hello, First messages!");
        }
        setTimeout(()=>{
            resolve(okFirst());
        },700);
    });
    
}
function second(){
    return new Promise((resolve)=>{
        function okSecond(){
            console.log("Welcome to my website! Second messages!");
        }
        resolve(okSecond());
    });
    
}

async function main(){
    await first();
    await second();
}
