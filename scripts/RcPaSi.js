let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
        };
        

      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      
        
      
      function playGame(playerMove)
      {
        let result = '';
        const computerMove = pickComputerMove();
        
        if(playerMove === 'Scissor')
        {
          if(computerMove === 'rock'){
            result = 'You Loose';
          }else if(computerMove === 'Paper'){
            result = 'You win';
          }else if(computerMove === 'Scissor'){
            result = 'Tie';
          }
        }
        
        else if(playerMove === 'Paper')
        {
          if(computerMove === 'rock'){
            result = 'You win';
          }else if(computerMove === 'Paper'){
            result = 'Tie';
          }else if(computerMove === 'Scissor'){
            result = 'You Loose';
          }
        }
        
        else if(playerMove === 'rock')
        {
          if(computerMove === 'rock'){
            result = 'Tie';
          }else if(computerMove === 'Paper'){
            result = 'You Loose';
          }else if(computerMove === 'Scissor'){
            result = 'You win';
          }
        }

        if(result === 'You win')
        {
          score.wins += 1;
        }
        else if(result === 'You Loose')
        {
          score.losses += 1;
        }
        else if(result === 'Tie')
        {
          score.ties += 1;
        }

        localStorage.setItem('score' , JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result')
          .innerHTML = result;
        document.querySelector('.js-moves')
          .innerHTML = `You 
          <img src="images/${playerMove}-emoji.png" class="move-icon">
          <img src="images/${computerMove}-emoji.png" class="move-icon">
          Computer`;
        
      }

      function updateScoreElement()
      {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
      }
      
      let computerMove = '';
      function pickComputerMove()
      {
        const randomNumber = Math.random();
    
        if(randomNumber >= 0 && randomNumber < 1/3)
        {
          computerMove = 'rock';
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
        {
          computerMove = 'Paper';
        }
        else if(randomNumber >= 2/3 && randomNumber < 1)
        {
          computerMove = 'Scissor';       
        }
        return computerMove;
      }
