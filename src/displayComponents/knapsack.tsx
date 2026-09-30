import { useState } from 'react';
import setArrayValues, { knapsackAlgo } from './knapsackLogic.ts';

const capacity = 10;

export default function Knapsack() {
    const [items, setItems] = useState(setArrayValues);
    const solution = knapsackAlgo(items.weights, items.values, capacity);

    return (
        <main className="knapsack">

            <p>Weight limit: {capacity}</p>
            <button onClick={() => setItems(setArrayValues())}>New items</button>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Value</th>
                        <th scope="col">Selected</th>
                    </tr>
                </thead>
                <tbody>
                    {items.weights.map((weight, index) => (
                        <tr key={index} className={solution.indices.includes(index) ? 'selected-item' : undefined}>
                            <th scope="row">{index + 1}</th>
                            <td>{weight}</td>
                            <td>{items.values[index]}</td>
                            <td>{solution.indices.includes(index) ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <section aria-live="polite" aria-atomic="true">
                <p>Selected items: {solution.indices.map(index => index + 1).join(', ') || 'None'}</p>
                <p>Total weight: {solution.weight} / {capacity}</p>
                <p>Total value: {solution.value}</p>
            </section>
        </main>
    );
}
