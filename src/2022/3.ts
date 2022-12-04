import { run } from 'aoct'
function chunkString(str:string, length:number) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
// alphabed a-z and A-Z
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const part1 = (input: Array<string>) => {
  input.pop()
  let points = 0;
  for (const backpack of input) {
    const splited = chunkString(backpack,Math.round(backpack.length/2))
    if (!splited) {
      break;
    }
    const [compartment1,compartment2] = splited
    const letter = alphabet.findIndex(l => compartment1.includes(l) && compartment2.includes(l))
    if (letter === -1) break;
    points += letter+1;
  }
  return points
}

const part2 = (input: Array<string>) => {
  let points = 0;
  const groups:{
    backpacks:string[];
    symbol:number
  }[] = []
  for (const backpack of input) {
    let group = groups[groups.length-1]
    if (!group) {
      group = {
        backpacks:[backpack],
        symbol:-2
      }
      groups.push(group)
    }
    else if (group.backpacks.length <2) {
      group.backpacks.push(backpack)
    }
    else if (group.backpacks.length == 2) {
      group.backpacks.push(backpack)
      group.symbol = alphabet.findIndex(l => group.backpacks.every(b => b.includes(l)))+1
      points+=group.symbol
    }
    else {
      group = {
        backpacks:[backpack],
        symbol:-2
      }
      groups.push(group)
    }
  }
  return points
}

run(part1, part2)
