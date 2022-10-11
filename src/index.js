
document.addEventListener('DOMContentLoaded', () => {
  let tomb = [];
for (let i = 0; i < 30; i++) {
    tomb.push(Math.floor(Math.random()* 30 + 1));
  }
  tomb.forEach((e) => {
    console.log(e);
  })
   

  
})