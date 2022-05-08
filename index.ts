import * as readline from 'readline'

;(async () => {
	await main()
})()

async function main() {
	for (;;) {
		console.log('1.パーー\n2.チョキ\n3.グー')
		const answer = Number(await getInputNum())
		const match = new Match(new Player(answer), Player.randomHand())
		match.print()
		if (typeof answer === 'number' && Hand.isHand(answer)) {
			break
		}
	}
}

class Hand {
	private readonly _value: number
	private readonly _name: string

	public static readonly Paper = 1
	public static readonly Scissors = 2
	public static readonly Rock = 3

	public static hands: Hand[] = [
		new Hand(Hand.Paper, '✋'),
		new Hand(Hand.Scissors, '✌️'),
		new Hand(Hand.Rock, '👊'),
	]

	private constructor(handValue: number, handName: string) {
		this._value = handValue
		this._name = handName
	}

	public static fromValue(handValue: number): Hand {
		return Hand.hands[handValue - 1]
	}
	public static isHand(handValue: number): boolean {
		return this.hands.map((hand) => hand._value).includes(handValue)
	}

	public fight(enemyHand: Hand): string {
		if (this == enemyHand) return '引き分け'
		if ((this._value + 1) % 3 === enemyHand._value) return 'あなたの負け'
		return 'あなたの勝ち'
	}
	get name(): string {
		return this._name
	}
}

class Player {
	public _hand: Hand
	constructor(handNum: number) {
		this._hand = Hand.fromValue(handNum)
	}
	displayHand() {
		return this._hand.name
	}
	public static randomHand() {
		return new Player(1 + Math.floor(Math.random() * 3))
	}
}

class Match {
	private _you: Player
	private _enemy: Player
	constructor(you: Player, enemy: Player) {
		this._you = you
		this._enemy = enemy
	}

	public print() {
		console.log(`あなたの手: ${this._you.displayHand()}`)
		console.log(`相手の手: ${this._enemy.displayHand()}`)
		console.log(`結果: ${this.judge()}`)
	}
	private judge(): string {
		return this._you._hand.fight(this._enemy._hand)
	}
}

async function getInputNum(): Promise<string | undefined> {
	const answer = await question('あなたの手を選択してください。>')
	if (typeof answer !== 'string') return
	return answer.trim().toLowerCase()
}

function question(question: string): Promise<unknown> {
	const readlineInterface = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	return new Promise((resolve) => {
		readlineInterface.question(question, (answer) => {
			resolve(answer)
			readlineInterface.close()
		})
	})
}
