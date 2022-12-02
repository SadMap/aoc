import { run } from 'aoct'
const Points = {
  win:6,
  draw:3,
  lose:0
}
const Rock = {
  keys:["A","X"],
  score:1
}
const Paper = {
  keys:["B","Y"],
  score:2
}
const Scissors = {
  keys:["C","Z"],
  score:3
}
const winMap = [
  {
    w:Rock,
    l:Scissors
  },
  {
    w:Paper,
    l:Rock
  },
  {
    w:Scissors,
    l:Paper
  }
]
const tools = [Rock,Paper,Scissors]
const part1 = (input: Array<string>) => {
  const tools = [Rock,Paper,Scissors]
  input.pop()
  let points = 0;
  for (const game of input) {
    const hands = game.split(" ")
    const oppontent = hands[0];
    const me = hands[1];
    const myTool = tools.filter(t => t.keys.indexOf(me) !== -1)[0]
    if (tools.some(t => t.keys.indexOf(me) !== -1 && t.keys.indexOf(oppontent) !== -1)) {
      points += (Points.draw + myTool.score)
    }
    else if (winMap.some(g => (g.w.keys.indexOf(me) > -1) && (g.l.keys.indexOf(oppontent) > -1)))
     {
      points += (Points.win + myTool.score)
    }
    else if (winMap.some(g => (g.w.keys.indexOf(oppontent) > -1) && (g.l.keys.indexOf(me) > -1)))
    {
      points += (Points.lose + myTool.score)
    }
  }
  return points
}

const part2 = (input: Array<string>) => {
  let points = 0;
  for (const game of input) {
    const [opponent,end] = game.split(" ")
    switch (end) {
      case "X":
        const myMove = winMap.filter(w => w.w.keys.indexOf(opponent) !== -1)[0].l
        points+=(myMove.score+Points.lose)
        break
      case "Y":
        const myTool = tools.filter(t => t.keys.indexOf(opponent) !== -1)[0]
        points+=(myTool.score+Points.draw)
        break;
      case "Z":
        const myWin = winMap.filter(w => w.l.keys.indexOf(opponent) !== -1)[0].w
        points+=(myWin.score+Points.win)
        break;
      default:
        break;
    }
  }
  return points
}

run(part1, part2)
