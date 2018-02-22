const expect = require('expect');
const request = require('supertest');
const { app } = require('../server');
const { populatePosts } = require('./seed/seed');

// Drop database before every test
beforeEach(populatePosts);

describe('API :: GET /posts', () => {
	it('should get all posts', (done) => {
		request(app)
			.get('/posts')
			.expect(200)
			.expect((res) => {
				expect(res.body.posts.length).toBe(2);
			})
			.end(done);
	});
});
