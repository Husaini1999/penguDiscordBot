const { SlashCommandBuilder } = require('discord.js');
const responses = [
	'Yes, but only on alternate Tuesdays.',
	'No way, Jose!',
	'Maybe, but only if you bring pizza.',
	'Absolutely, positively, indubitably!',
	'No chance, my friend. Not even in your wildest dreams.',
	"Hmm... let me consult my crystal ball... Oh, it says 'Reply hazy, try again later.'",
	'Yes, unless the moon is full and the stars align.',
	'Nope, not in a million years!',
	'Maybe, but only if you promise to dance the Macarena.',
	"Definitely! I'd bet my collection of rubber ducks on it.",
	"No doubt about it! It's as clear as chocolate pudding.",
	'Possibly, but only if you wear a chicken suit.',
	"No way, Jose! And that's non-negotiable.",
	'Maybe, if the planets align, the unicorns sing, and the leprechauns grant their blessing.',
	'Affirmative! But be prepared for unexpected penguin appearances.',
	"Negative! Not even a snowball's chance in the Sahara.",
	'Perhaps, but only if you can juggle flaming swords.',
	'Yes, absolutely! As certain as the fact that socks mysteriously disappear in the laundry.',
	"Nope, sorry! The Magic 8 Ball says 'Outlook not so good.'",
	'Maybe, but only if you can solve a riddle from a wise owl.',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask a YES/NO question and gets a witty response!'),
	async execute(interaction) {
		const randomNum = Math.floor(Math.random() * responses.length);
		await interaction.reply(responses[randomNum]);
	},
};
