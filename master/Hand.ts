interface Hand {
	/*
    手の強弱を比較する
    返り値 -1 : 引数で指定した手が強い
            0  : 引数で指定した手と同じ
            1  : 引数で指定した手が弱い
    */
	compare(hand: Hand): number
}
export default Hand
