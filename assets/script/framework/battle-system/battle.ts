class BattleSys {
    protected handCard: Array<any> = [];

    addHandCard(card) {
        this.handCard.push(card);
    }
    deleteHandCard(card) {
        const index = this.handCard.findIndex((item) => card.uuid === item.uuid);
        this.handCard.splice(index, 1);
    }
}

export default BattleSys;