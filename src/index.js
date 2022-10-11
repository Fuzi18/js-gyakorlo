class Szazlabu{
  #labakSzama;
  constructor(labakSzama) {
    this.#labakSzama = labakSzama;
  }
  toString() {
    return labakSzama + "lába van";
  }
}


let t = [];


document.addEventListener('DOMContentLoaded', () => {
  let tomb = [];
 
  for (let i = 0; i < 30; i++) {
  
    tomb.push(Math.floor(Math.random() * 30 + 1));
  }
  tomb.forEach((e) => {
    console.log(e);
  })
   

  
});

document.getElementById('otteloszthato').addEventListener('click', () => {
  t.filter(e => e % 5 == 0);
  
})