export enum TennisMatchEnum {
  MAXIMUM_NUMBER_OF_SETS = "3",
  MATCH_IN_PROGRESS = "In progress",
  PLAYER_ONE_WINS = "Player 1 wins",
  PLAYER_TWO_WINS = "Player 2 wins",

  INITIAL_SCORE = "(0-0)",

  PLAYER_1 = "p1",
  PLAYER_2 = "p2"
}

export enum TennisSetEnum {
  NUMBER_OF_GAMES_TO_WIN = 6,
  MINIMUM_DIFFERENCE_OF_GAMES_TO_WIN = 2
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

export enum TennisTieBreakEnum {
  MINIMUM_NUMBER_OF_POINTS_TO_WIN = 7,
  MINIMUM_DIFFERENCE_OF_POINTS_TO_WIN = 2,
  // scores
  PLAYER_WINS = "PLAYER_WINS",
  
  // game states
  ZERO_ZERO = "0-0",
  PLAYER_ONE_WINS = "PLAYER_ONE_WINS",
  PLAYER_TWO_WINS = "PLAYER_TWO_WINS"
}