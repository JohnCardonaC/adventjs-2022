"use strict";

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  let packWeights = 0;
  let reindeersCarry = 0;
  for (const pack of packOfGifts) {
    packWeights += pack.length;
  }
  for (const reindeer of reindeers) {
    reindeersCarry += reindeer.length * 2;
  }
  return reindeersCarry / packWeights;
}
distributeGifts(packOfGifts, reindeers);
