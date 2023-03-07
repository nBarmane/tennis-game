export enum TennisMatchEnum {
  MATCH_IN_PROGRESS = "In progress...",
  PLAYER_ONE_WINS = "Player1 wins",
  PLAYER_TWO_WINS = "Player2 wins",

  INITIAL_MATCH_SCORE = "(0-0)",

  PLAYER_1 = "p1",
  PLAYER_2 = "p2"
}

export enum TennisSetEnum {
  MAXIMUM_GAMES_PER_SET = 6
}

export enum TennisGameEnum {
  // scores
  ZERO = "0",
  FIFTEEN = "15",
  THIRTY = "30",
  FORTY = "40",
  ADVANTAGE = "AD",
  DEUCE = "Deuce",
  ADVANTAGE_PLAYER_ONE = "AD Player 1",
  ADVANTAGE_PLAYER_TWO = "AD Player 2",
  
  PLAYER_WINS = "PLAYER_WINS",
  
  // game states
  ZERO_ZERO = "0-0",
  PLAYER_ONE_WINS = "PLAYER_ONE_WINS",
  PLAYER_TWO_WINS = "PLAYER_TWO_WINS"
}