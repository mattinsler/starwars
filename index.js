const assert = require('assert');
const data = require('./data');

function selectSpecies(people, species, speciesName) {}

assert.deepEqual(selectSpecies(data.people, data.species, 'Human'), [
  'Luke Skywalker',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun lars',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
]);
