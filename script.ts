let lastSandReplaceDate : Date = new Date('2024-06-15')
let lastLitterCleanDate : Date = new Date('2024-06-15')

const setDateText : Function = (type : string, date: Date) => {
  console.log('date: ', date)
  const textEl = document.getElementById(`last-${type}`) as HTMLElement
  textEl.innerText = date.toLocaleTimeString('en-GB', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false  // for 24h format
  })
}

const updateCatEmoji = (status:number) => {
  const emojies: string[] = ['😿', '🐱', '😺']
  document.getElementById('cat-emoji')!.innerText = emojies[status]
}

const buttonClicked: Function = (buttonType: string) => {
  setDateText(buttonType, new Date(Date.now()))
}
const onInit: Function = () => {
  console.log('init!')
  updateCatEmoji(1)
  setDateText('clean', lastLitterCleanDate)
  setDateText('replace', lastSandReplaceDate)
}

