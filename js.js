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
// function clickToPhone(){
//     return new Promise((resolve)=>{
//         function onClickToPhone(){
//             const phoneLinks=document.querySelectorAll(".phone,a[href^='tel:']");
//         }
//     });
// }
function second(){
    return new Promise((resolve)=>{
        function okSecond(){
            console.log("Welcome to my website! Second messages!");
        }
        resolve(okSecond());
    });
}
function date(){
    return new Promise((resolve)=>{
        function okDate(){
            const footer=document.querySelector("footer");
            const year=new Date().getFullYear();
            footer.innerHTML=`&copy; ${year} Ильяс — Сборка и ремонт мебели. Все права защищены.`;
        }
        resolve(okDate());
    });
}
async function main(){
    await first();
    await second();
    await date();
}
