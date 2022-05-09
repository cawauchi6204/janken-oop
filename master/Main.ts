import Player from './Player'
import Game from './Game'

class Main {
	constructor(args: string[]) {
		const user: Player = new Player('あなた')
		const com: Player = new Player('相手')
		const game: Game = new Game('')

		this.displayInputInstruction()

		// ユーザー入力

		// ユーザーの手を生成

		// comの手を生成

		// 勝敗決定
		// 結果表示
	}

	private displayInputInstruction(): void {
		console.log('1.グー')
		console.log('2.チョキ')
		console.log('3.パー')
		console.log('あなたの手を選択してください > ')
	}
}
