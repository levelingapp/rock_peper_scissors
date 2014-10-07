$(document).ready(function(){
	
	var game = new Game();

	$(".user_option").click(function(){
		
		var id = $(this).attr("id");
		
		
		game.main(id);

	});
	
	

});

// alert();
	
	
	
	
	function Game(){
		
		this.user_choice;
		this.computer_choice;
		this.options = ["rock", "paper", "scissors"];
		
		this.message;
		this.computerWins = 0;
		this.userWins = 0;
		this.ties = 0;
		
		this.main = function(user_option){
			
			this.user_choice = user_option;
			this.computer_choice = this.computer_option();
			
			
			
			this.compare();
			
			$("#results").html("Won: " + this.userWins + " | Tied: " + this.ties + " | Lose: " + this.computerWins);
			$("#message").html(this.message);
			
			$("#computer").attr("src", "images/" + this.computer_choice + ".gif");
			$("#user").attr("src", "images/" + this.user_choice + ".gif");
			$(".result img").show();
			
		};
		
		
		this.compare = function(){
			
			if(this.user_choice === this.computer_choice){
				this.message = "Tied";
				this.ties++;
				return;
			}
			
			
						
			if(this.user_choice == "rock"){
				
				if(this.computer_choice == "scissors"){
					this.message = "You won";
					this.userWins++;
					
				}else{
			
					this.message = "You Lose";
					this.computerWins++;
				}
			}
			
			if(this.user_choice == "paper"){
				
				if(this.computer_choice == "rock"){
					this.message = "You won";
					this.userWins++;
				}else{
					this.message = "You Lose";
					this.computerWins++;
				}
			}
			

			if(this.user_choice == "scissors"){
				
				if(this.computer_choice == "paper"){
					this.message = "You won";
					this.userWins++;
				}else{
					this.message = "You Lose";
					this.computerWins++;
				}
			}
			
			
			
		};
		
		this.computer_option = function(){
			var start = 0;
			var limit = 3;
			var element = Math.floor(Math.random() * limit) + start;
			return this.options[element];
		}
		
	}
