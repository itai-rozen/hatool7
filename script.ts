const getCatEmoji = () : null => {
  const emojies : string[] = ['', '', '']
  const now : Date = new Date();
  console.log('now: ', now)
  const lastSandReplace : number = now.setDate(1)
  const lastLitterCleaning : number = now.setDate(2)
  console.log('last replace: ', lastSandReplace)
  console.log('last litter cleaning: ', lastLitterCleaning)
  return null
}

const updateCatEmoji = (status:number) => {
  const emojies: string[] = ['😿', '🐱', '😺']
  document.getElementById('cat-emoji')!.innerHTML = emojies[status]
}

const onInit: Function = () => {
  updateCatEmoji(1)
}

