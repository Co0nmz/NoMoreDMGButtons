Hooks.on('renderChatMessage', (_, jq) => {
  if (game.user.isGM) return;
  jq.find('[data-action="applyDamage"]').closest('.inline-action').remove();
});