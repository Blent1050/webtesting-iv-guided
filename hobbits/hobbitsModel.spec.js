const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
  describe('insert()', () => {
    afterEach(async () => {
      //Should clean out server
      await db('hobbits').truncate();
    });
    it('insert the provided hobbit into the db', async () => {
      const hobbit = await Hobbits.insert({name: 'gaffer'});

      expect(hobbit.name).toBe('gaffer');
    });
    it('insert the provided hobbits into the db', async () => {
      await Hobbits.insert({name: 'sam'});
      await Hobbits.insert({name: 'gaffer'});

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });
    it('insert the provided hobbits into the db', async () => {
      let hobbit = await Hobbits.insert({name: 'gaffer'});
      expect(hobbit.name).toBe('gaffer');

      hobbit = await Hobbits.insert({name: 'sam'});
      expect(hobbit.name).toBe('sam');
    });
  });
});
