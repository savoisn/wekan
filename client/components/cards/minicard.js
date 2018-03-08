// Template.cards.events({
//   'click .member': Popup.open('cardMember')
// });

BlazeComponent.extendComponent({
  mixins() {
    return [Mixins.ScrumMode];
  },
  template() {
    return 'minicard';
  },
}).register('minicard');
