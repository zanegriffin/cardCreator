const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]


const $div = $('<div>').addClass("container")
$('body').append($div)
const $divAdd = $('<div>').append("Add a Card").addClass("add")
$('.container').prepend($divAdd)

//generates random card
let randomCard = () => {
  let randomImg = Math.floor(Math.random() * cards.length)
  const $img = $('<img>')
  $img.attr('src', cards[randomImg], 'alt', cards[randomImg])
  let $div = $('<div>').append($img).attr('id', 'img')
  return $div
}

//listener, click appends
$divAdd.on('click', () => {
  $('.container').append(randomCard())
  $('div #img').on('click', () => {
    //removal only works here for some reason. have to double click to remove completely
    event.target.remove('div #img')
  })
});

$('button').on('click', () => {
  cards.push($('input').val())
  $('input').val('')
})

