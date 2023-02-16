let name2='my name is Ali'
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())

let store=name2.split(' ')
let titlecase=''
for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++){
        if (j==0){
            titlecase += store[i][j].toUpperCase()
        }
        else{
            titlecase += store[i][j].toLowerCase()
        }

    }
    titlecase+=' '
  }
console.log(titlecase)