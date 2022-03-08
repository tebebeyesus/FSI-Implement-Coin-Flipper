// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
    

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})

let coinFlipTrack = {
    Total: 0,
    NumOfHeads: 0,
    NumOfTails: 0,
    PercentHead: 0,
    PercentTail: 0,
    setAttributes : function(generatedNumber)
    {
        if(generatedNumber == 1)
        {
           this.Total++; 
           this.NumOfHeads++; 
           this.PercentHead = `${(this.NumOfHeads/this.Total) * 100}%`
        }
        else 
        {
            this.Total++; 
            this.NumOfTails++; 
            this.PercentTail = `${(this.NumOfTails/this.Total) * 100}%`
          
        }
    } ,
    reset: function()
    {
        console.log('resetting')
        this.Total = 0;
        this.NumOfHeads = 0;
        this.NumOfTails = 0;
        this.PercentHead = `${0}%`;
        this.PercentTail = `${0}%`;
        console.log(` Total: ${coinFlipTrack.Total} NumOfHeads: ${coinFlipTrack.NumOfHeads} NumOfTails: ${coinFlipTrack.NumOfTails} PerHead: ${coinFlipTrack.PercentHead} PerTail: 
        ${coinFlipTrack.PercentTail}`)
    }
}



function generateRandomNumber () {
  // let random = Math.random() * 2
  return Math.floor(Math.random() * 2)
   // console.log(random)
   // console.log(Math.floor(random))
}

function changeCoinImage(generatedNumber) {
   if(generatedNumber == 1)
   {
      document.querySelector('img').setAttribute('src','./assets/images/penny-heads.jpg') 
   }
   else 
   {
     document.querySelector('img').setAttribute('src','./assets/images/penny-tails.jpg') 
   }
}

function describeOutcomeOfCoinFlip(generatedNumber) {
    if(generatedNumber == 1)
    {
       document.querySelector('.message-container').textContent = `You Flipped Heads!`
    }
    else 
    {
        document.querySelector('.message-container').textContent = `You Flipped Tails!`
    }
}

function clearMessageBoard() {
    
    document.querySelector('.message-container').textContent = `Let's Get Rolling!`
    
}

function displayCoinFlipStat()
{
    /*
    <td id="heads">0</td>
                            <td id="heads-percent">0%</td>
                            <td id="tails">0</td>
                            <td id="tails-percent">0%</td>
                            */
    document.querySelector('#heads').textContent = coinFlipTrack.NumOfHeads;
    document.querySelector('#heads-percent').textContent = coinFlipTrack.PercentHead;
    document.querySelector('#tails').textContent = coinFlipTrack.NumOfTails;
    document.querySelector('#tails-percent').textContent = coinFlipTrack.PercentTail;
}


function flipCoin() {
  const flipButton = document.querySelector('#flip')
  flipButton.addEventListener('click', () => {
    let random = generateRandomNumber();
    console.log(random)
    changeCoinImage(random);
    describeOutcomeOfCoinFlip(random)
    coinFlipTrack.setAttributes(random)
    console.log(` Total: ${coinFlipTrack.Total} NumOfHeads: ${coinFlipTrack.NumOfHeads} NumOfTails: ${coinFlipTrack.NumOfTails} PerHead: ${coinFlipTrack.PercentHead} PerTail: 
     ${coinFlipTrack.PercentTail}`)
     displayCoinFlipStat();
  })
}


function clearBoard() {
    const flipButton = document.querySelector('#clear')
    flipButton.addEventListener('click', () => {
      coinFlipTrack.reset();
      clearMessageBoard();
      displayCoinFlipStat();

    })
  }

flipCoin()
clearBoard()