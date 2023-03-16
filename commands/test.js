const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription("Validates bot."),
		async execute(interaction) {
		await interaction.reply({ content: `${interaction.client.user} successfully validated.`, ephemeral: true});
		console.log('(Successfully executed command: test)')
	},  catch (error) {
		console.error(error);
		console.log('(Command execution failed! Command: test)')
	}
};