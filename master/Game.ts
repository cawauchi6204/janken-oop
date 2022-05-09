import Player from './Player'
import Hand from './Hand'

class Game {
	private playerName: string
	private hand: Hand

	constructor(playerName: string) {
		this.playerName = playerName
	}

	public judge(p1Ï: Player, p2: Player): number {
		return 1
	}

	public getPlayerName(): string {
		return this.playerName
	}
	public getHand(): string {
		return this.hand
	}
}

export default Game
