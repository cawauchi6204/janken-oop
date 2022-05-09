class Player {
	private name: string

	constructor(name: string) {
		this.name = name
	}

	public createRandomHand(): void {}

	public getName() {
		return this.name
	}
}
export default Player
