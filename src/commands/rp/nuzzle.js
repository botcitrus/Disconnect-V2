const { fetchMember } = require('../../tools');
const { createEmbed } = require('../../utils/embed');
const { nuzzle: images } = require('../../../assets/responses/links.json');

module.exports.run = async ({ message, args }) => {
	// Get user
	let user;
	if (args[0]) user = fetchMember(message, args.join(' '));
	if (!user && args[0]) user = args.join(' ');
	if (user && typeof user !== 'string') user = user.displayName;

	// Set the sentence
	const title = user
		? `${message.member.displayName} has nuzzled ${user}!`
		: `${message.member.displayName} is nuzzling themself!`;

	// Get Image
	const image = images[Math.floor(Math.random() * images.length)];

	const e = await createEmbed({
		title,
		image,
	});
	return message.channel.send(e);
};

module.exports.config = {
	name: 'nuzzle',
	aliases: ['cuddle'],
};
