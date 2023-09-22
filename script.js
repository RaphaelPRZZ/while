"use srcict"

/*WHILE

declarer une variable qui est egale a 3
tant que a est plus petit que 9
increment a de 1
si a est egale a 8 arrete la boucle 
si a est egale a 7 revient au debut de la boucle 
on console.log(a)

*/

let a=3;
while(a<9){
    a++
    if(a==7){
        continue
    }
    if(a==8){
        break
    }
    console.log(a);
}
console.log('jai cassé boucle  bout de'+a+"tours");
