export default function randomizeItemValues(
    weights: number[],
    values: number[]
) {
    for (let i = 0; i < 10; i++) {
        weights[i] = Math.floor(Math.random() * 10);
        values[i] = Math.floor(Math.random()* 100);
    }

    return {weights, values};

}