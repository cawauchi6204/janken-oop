import Hand from './Hand'

class Pa implements Hand {
	private HAND_NAME = 'チョキ'

	public compare(hand: Hand) {
		// TODO: 実装する
	}

	public getHandName() {
		return this.HAND_NAME
	}
}

export default Pa
