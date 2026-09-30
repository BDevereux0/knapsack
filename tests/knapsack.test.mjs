import assert from 'node:assert/strict';
import { test } from 'node:test';
import { knapsackAlgo } from '../src/displayComponents/knapsackLogic.ts';

test('selects the optimal subset without exceeding capacity or reusing items', () => {
  const result = knapsackAlgo([5, 4, 2, 3], [1, 4, 3, 5], 10);
  assert.deepEqual(result, { weight: 9, value: 12, indices: [1, 2, 3] });
});
