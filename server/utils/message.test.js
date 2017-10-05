const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Gabe';
		var lat = 12.32443;
		var lng = 54.232;
		var url = `https://google.com/maps?q=${lat},${lng}`;
		var message = generateLocationMessage(from, lat, lng);
		expect(typeof message.createdAt).toBe('number');
		expect(message.from).toBe(from);
		expect(message.url).toBe(url);
	});
});