const { SlashCommandBuilder } = require('discord.js');
// import chalk from 'chalk';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true});
		console.log('(Successfully executed command: ping)')
		console.log(chalk.blue('Hello world!'));
	}, catch (error) {
		console.error(error);
		console.log('(Command execution failed! Command: test)')
	}
};