// Template.cards.events({
//   'click .member': Popup.open('cardMember')
// });

BlazeComponent.extendComponent({
  template() {
    return 'minicard';
  },
  isScrumedAndHasComplexity() {
    const card = this.currentData();
    const boardId = Session.get('currentBoard');
    const user = Meteor.user();
    return user && user.hasScrumed(boardId) && card.complexity;
  },
}).register('minicard');
