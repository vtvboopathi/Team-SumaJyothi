let count = document.getElementById('count')
let od = document.getElementById('od')
let swt = document.getElementById('swt')
let trt = document.getElementById('trt')
let fqlt = document.getElementById('fqlt')
let tr = document.getElementById('tr')
let sr = document.getElementById('sr')


let countA = document.getElementById('countA')
let odA = document.getElementById('odA')
let swtA = document.getElementById('swtA')
let trtA = document.getElementById('trtA')
let fqltA = document.getElementById('fqltA')
let trA = document.getElementById('trA')
let srA = document.getElementById('srA')


countA.addEventListener('input', () =>{
  count.innerText = countA.value
})

odA.addEventListener('input', () =>{
  od.innerText = odA.value
})

swtA.addEventListener('input', () =>{
  swt.innerText = swtA.value
})

trtA.addEventListener('input', () =>{
  trt.innerText = trtA.value
})

fqltA.addEventListener('input', () =>{
  fqlt.innerText = fqltA.value
})

trA.addEventListener('input', () =>{
  tr.innerText = trA.value
})

srA.addEventListener('input', () =>{
  sr.innerText = srA.value
})


//  Occupancy section

let occuOne = document.getElementById('occuOne')
let occuTwo = document.getElementById('occuTwo')
let occuThree = document.getElementById('occuThree')
let occuFour = document.getElementById('occuFour')
let occuFive = document.getElementById('occuFive')


let occ1 = document.getElementById('occ-1')
let occ2 = document.getElementById('occ-2')
let occ3 = document.getElementById('occ-3')
let occ4 = document.getElementById('occ-4')
let occ5 = document.getElementById('occ-5')


occuOne.addEventListener('input', () =>{
  occ1.innerText = occuOne.value
})

occuTwo.addEventListener('input', () =>{
  occ2.innerText = occuTwo.value
})

occuThree.addEventListener('input', () =>{
  occ3.innerText = occuThree.value
})

occuFour.addEventListener('input', () =>{
  occ4.innerText = occuFour.value
})

occuFive.addEventListener('input', () =>{
  occ5.innerText = occuFive.value
})


// Positive comments section

// Tutor name "p"
let tutorOne = document.getElementById('tutorOne')
let tutorTwo = document.getElementById('tutorTwo')
let tutorThree = document.getElementById('tutorThree')
let tutorFour = document.getElementById('tutorFour')
let tutorFive = document.getElementById('tutorFive')
let tutorSix = document.getElementById('tutorSix')
let tutorSeven = document.getElementById('tutorSeven')

//Input name
let firstTutor = document.getElementById('firstTutor')
let secTutor = document.getElementById('secTutor')
let thirdTutor = document.getElementById('thirdTutor')
let fourTutor = document.getElementById('fourTutor')
let fiveTutor = document.getElementById('fiveTutor')
let sixTutor = document.getElementById('sixTutor')
let sevenTutor = document.getElementById('sevenTutor')


firstTutor.addEventListener('input', () =>{
  tutorOne.innerText = firstTutor.value
})

secTutor.addEventListener('input', () =>{
  tutorTwo.innerText = secTutor.value
})

thirdTutor.addEventListener('input', () =>{
  tutorThree.innerText = thirdTutor.value
})

fourTutor.addEventListener('input', () =>{
  tutorFour.innerText = fourTutor.value
})

fiveTutor.addEventListener('input', () =>{
  tutorFive.innerText = fiveTutor.value
})

sixTutor.addEventListener('input', () =>{
  tutorSix.innerText = sixTutor.value
})

sevenTutor.addEventListener('input', () =>{
  tutorSeven.innerText = sevenTutor.value
})


// Comments "p"
let commOne = document.getElementById('commOne')
let commTwo = document.getElementById('commTwo')
let commThree = document.getElementById('commThree')
let commFour = document.getElementById('commFour')
let commFive = document.getElementById('commFive')
let commSix = document.getElementById('commSix')
let commSeven = document.getElementById('commSeven')

//Input comments
let firstComm = document.getElementById('firstComm')
let secComm = document.getElementById('secComm')
let thirdComm = document.getElementById('thirdComm')
let fourComm = document.getElementById('fourComm')
let fiveComm = document.getElementById('fiveComm')
let sixComm = document.getElementById('sixComm')
let sevenComm = document.getElementById('sevenComm')


firstComm.addEventListener('input', () =>{
  commOne.innerText = firstComm.value
})

secComm.addEventListener('input', () =>{
  commTwo.innerText = secComm.value
})

thirdComm.addEventListener('input', () =>{
  commThree.innerText = thirdComm.value
})

fourComm.addEventListener('input', () =>{
  commFour.innerText = fourComm.value
})

fiveComm.addEventListener('input', () =>{
  commFive.innerText = fiveComm.value
})

sixComm.addEventListener('input', () =>{
  commSix.innerText = sixComm.value
})

sevenComm.addEventListener('input', () =>{
  commSeven.innerText = sevenComm.value
})


//Question "h2"
let comm1 = document.getElementById('comm1')
let comm2 = document.getElementById('comm2')
let comm3 = document.getElementById('comm3')
let comm4 = document.getElementById('comm4')
let comm5 = document.getElementById('comm5')

//Question input
let question1 = document.getElementById('question1')
let question2 = document.getElementById('question2')
let question3 = document.getElementById('question3')
let question4 = document.getElementById('question4')
let question5 = document.getElementById('question5')


question1.addEventListener('input', () =>{
  comm1.innerText = question1.value
})

question2.addEventListener('input', () =>{
  comm2.innerText = question2.value
})

question3.addEventListener('input', () =>{
  comm3.innerText = question3.value
})

question4.addEventListener('input', () =>{
  comm4.innerText = question4.value
})

question5.addEventListener('input', () =>{
  comm5.innerText = question5.value
})


// Date & Time

function updateTime(){
  let datee = document.getElementById('date')
  let timee = document.getElementById('time')
  let dayy = document.getElementById('day')
  let noOfDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  let today = new Date()


  var date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear()
  datee.innerText = date

  let secondss = today.getSeconds()
  let time = today.getHours()+':'+today.getMinutes()+':'+secondss
  timee.innerText = time
  
  if(secondss < 10){
    secondss = '0'+secondss
  }

  let day = today.getDay()
  let orgDay = noOfDay[day]
  dayy.innerText = noOfDay[day]

}

setInterval(updateTime, 1000)




// window.onbeforeunload = function (e) {
//   e.returnValue = '';
//   };