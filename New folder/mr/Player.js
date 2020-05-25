class Player {
  constructor(){
    this.index = null;
    this.score = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  getScore(){
    var playerRank = database.ref('scoreAtEnd');
    playerRank.on("value",(data)=>{
      this.score = data.val();
    })
  }

  static updateScore( score){
    database.ref('/').update(
      {
        'carsAtEnd': score
      }
    )
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      score:this.score

    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
