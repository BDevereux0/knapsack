import randomizeItemValues from "../randomizer/RandomizeItemValues.ts"

export default function setArrayValues() {
    let weights: number[] = [];
    let values: number[] = [];
    randomizeItemValues(weights, values)

    //brackets around the return create array. squiggly brackets(technical term) create object.
    return{weights,values}

}

export function knapsackAlgo(weights: number[], values: number[], capacity = 10) {

    //k: weights, v: values
    const map = new Map<number, { value: number; indices: number[] }>();
    map.set(0, { value: 0, indices: [] });

    //looping through and adding values to weights so i can add them later.
    for (let i = 0; i < weights.length; i++) {
        const currentWeight = weights[i];
        const currentValue = values[i];

        //prevents reading items (with the loop below)
        const currentStates = Array.from(map.entries());

        for (const [existingWeight, existingState] of currentStates) {
            const newWeight = existingWeight + currentWeight;

            if (newWeight <= capacity) {
                const newValue = existingState.value + currentValue;
                const oldValue = map.get(newWeight)?.value ?? -1;
                if (newValue > oldValue) {
                    map.set(newWeight, {
                        value: newValue,
                        indices: [...existingState.indices, i],
                    });
                }
            }
        }
    }
    let best = { weight: 0, value: 0, indices: [] as number[] };
    for (const [weight, state] of map) {
        if (state.value > best.value || (state.value === best.value && weight < best.weight)) {
            best = { weight, ...state };
        }
    }
    return best;
}/*

This apparently is the actual solution, not my combinations.

       if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w];
            }

            // Current item can fit
            else {
                const dontTakeItem =
                    dp[i - 1][w];

                const takeItem =
                    dp[i - 1][w - weights[i - 1]]
                    + values[i - 1];

                dp[i][w] =
                    Math.max(dontTakeItem, takeItem);
            }
        }
    }

    return dp[n][capacity];
}
}
 */




/*
Note: Can only include an item once

Weight = 10

val[] = {1,4,3,5}
weights[] = {5,4,2,3}

knapsackValue = how many times i can put an item in without going over weight

when:
weight[0], possible choices: 5 + 2 + 3(v= 9), 5 + 4 (v =5)
weight[1], possible choices: 5 + 4 (v=5), 4 + 2 (v=7), 4 + 3 + 2 (v=12)
weight[2], possible choices: 2+3+5(v=9), 2 + 4 + 3(v=12)
weight[3], possible choices: 3 + 2 +5(v=9), 3 + 2 + 4(v=12)




 */