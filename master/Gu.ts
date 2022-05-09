import Hand from './Hand'

class Gu implements Hand {
	private HAND_NAME = 'グー'

	public compare(): number {
		// TODO: 実装する
		return 1
	}

	public getHandName(): string {
		return this.HAND_NAME
	}
}

export default Gu
