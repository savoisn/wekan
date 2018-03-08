Mixins.ScrumMode = BlazeComponent.extendComponent({
  isScrumedAndHasComplexity(card) {
    const boardId = Session.get('currentBoard');
    const user = Meteor.user();
    return user && user.hasScrumed(boardId) && card.complexity;
  },
  isScrumed(){
    const boardId = Session.get('currentBoard');
    const user = Meteor.user();
    return user && user.hasScrumed(boardId);
  }
});
