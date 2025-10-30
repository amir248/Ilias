window.addEventListener("DOMContentLoaded",main);

function openMenu(){
    return new Promise((resolve)=>{
        function menu(){
            const createMenu=document.createElement("div");
            createMenu.classList.add("openMenu");
            createMenu.innerHTML=`<a href="/">Главная</a><a href="/about">О мастере</a><a href="/#services">Услуги</a><a href="/#prices">Цены</a><a href="/#contacts">Контакты</a>`;
            document.querySelector("body").prepend(createMenu);

            document.querySelector(".nav").addEventListener("click",()=>{
                console.log('click');
                document.querySelector(".openMenu").style.cssText=`
                    transition: all ease-in-out 1s;
                    height:100vh;
                    font-size:33px;
                    opacity:1;
                `;
                document.querySelector(".openMenu").addEventListener("click",()=>{
                    document.querySelector(".openMenu").style.cssText=`
                    transition: all ease-in-out 1s;
                    height:0;
                    font-size:0px;
                    bottom:0;
                    
                     
                `;
                })
            })
        }
        resolve(menu());
    })
};
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
    await openMenu();
    await first();
    await second();
    await date();
}
