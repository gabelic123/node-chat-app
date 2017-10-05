const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Gabe';
		var text = 'Some message'
		var message = generateMessage(from, text);
		expect(typeof message.createdAt).toBe('number');
		expect(message.from).toBe(from);
		expect(message.text).toBe(text);
	});
});