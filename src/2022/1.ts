import { run } from 'aoct'
class Elf {
  constructor(public name: string) {
    this.name = name
  }
  private _snacks: number[] = [];
  get TotalCalories() {
    return this._snacks.reduce((a,b) =>a+b,0)
  }
  public addCalories(calories:number) {
    this._snacks.push(calories)
  }
}
function getTheElfCarryIngMostCalories(elfs:Elf[],index?:number) {
  return elfs.sort((elf,elf2) => elf2.TotalCalories - elf.TotalCalories)[index ?? 0]
}
const part1 = (input: Array<string>) => {
  const elfs:Elf[] = []
  let elf = new Elf(`1. ELf`)
  for (const item of input) {
    if (item == "") {
      elf = new Elf(`${elfs.length+1}. ELf`)
      elfs.push(elf)
    }
    else {
      const calories = parseInt(item)
      elf.addCalories(calories)
    }
  }
  const biggestElf = getTheElfCarryIngMostCalories(elfs)
  return `${biggestElf.name} Holds ${biggestElf.TotalCalories} calories worth of snacs`
}

const part2 = (input: Array<string>) => {
  const elfs:Elf[] = []
  let elf = new Elf(`1. ELf`)
  for (const item of input) {
    if (item == "") {
      elf = new Elf(`${elfs.length+1}. ELf`)
      elfs.push(elf)
    }
    else {
      const calories = parseInt(item)
      elf.addCalories(calories)
    }
  }
  const top3elfs = [0,1,2].map(index => getTheElfCarryIngMostCalories(elfs,index))
  return `Top Calories
1st elf :${top3elfs[0].TotalCalories}
2nd elf :${top3elfs[1].TotalCalories}
3rd elf :${top3elfs[2].TotalCalories}
Total :${top3elfs[0].TotalCalories+top3elfs[1].TotalCalories+top3elfs[2].TotalCalories}`
}

run(part1, part2)
