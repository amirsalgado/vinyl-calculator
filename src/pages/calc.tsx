import React, { useState } from 'react';
import { Container } from "@mantine/core";

const Calc: React.FC = () => {
    const [vinylCost, setVinylCost] = useState(0);
    const [designWidth, setDesignWidth] = useState(0);
    const [designHeigth, setDesignHeigth] = useState(0);
    const [shirtCost, setShirtCost] = useState(0);
    const [fixedCost, setFixedCost] = useState(2000);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const designArea = () => {
        const area = designWidth * designHeigth;

        return area;
    }

    const area = designArea();
    
    const vinylCostCalculator = () => {
        const cost = (vinylCost / 5000) * area;

        return cost;
    }

    const totalVinylCost = vinylCostCalculator();

    const cutCost = () => {
        const cut = totalVinylCost * 2;
        return cut;
    }

    const totalCutCost = cutCost();
    
    const totalPrice = () => {
        return fixedCost + totalVinylCost + totalCutCost + shirtCost;
    }

    const total = totalPrice();

    console.log(totalPrice);

    return (<Container>
        <form onSubmit={handleSubmit}>
            <label>Costo del Vinilo x Metro: 
                <input 
                    type = "text" 
                    value = {vinylCost}
                    onChange = {e => setVinylCost(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <label>Ancho del diseño en Cm: 
                <input 
                    type = "text" 
                    value = {designWidth}
                    onChange = {e => setDesignWidth(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <label>Alto del diseño en Cm: 
                <input 
                    type = "text" 
                    value = {designHeigth}
                    onChange = {e => setDesignHeigth(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <label>Costo de la Camiseta: 
                <input 
                    type = "text" 
                    value = {shirtCost}
                    onChange = {e => setShirtCost(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <label>Costos Fijos: 
                <input 
                    type = "text" 
                    value = {fixedCost}
                    onChange = {e => setFixedCost(parseFloat(e.target.value))}
                />
            </label>
            <br />
            <button type="submit" onClick={totalPrice}>Calcular</button>
            <br />
            <h1>{` Precio por camiseta: ${total} `}</h1>
        </form>
    </Container>)
}

export default Calc;