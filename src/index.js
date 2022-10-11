class Szazlabu{
  #labakSzama;
  constructor(labakSzama) {
    this.#labakSzama = labakSzama;
  }
  toString() {
    return labakSzama + "lába van";
  }
}




document.addEventListener('DOMContentLoaded', () => {
  let tomb = [];
 
  for (let i = 0; i < 20; i++) {
  
    let veletlen = Math.floor(Math.random() * 29) + 1;
    szamok.push(veletlen);
  }
  document.getElementById('valogat').addEventListener('click', () => {
    let ottelOszthato = szamok.filter(e => e % 5 === 0);
  
    console.log(ottelOszthato);
    
  })
  
  })
   

