Hooks.on('renderChatMessage', (_, jq) => {
  if (game.user.isGM) return;
  jq.find('[data-action="damage"]').closest('.card-buttons').remove();
});
