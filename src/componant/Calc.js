import React from "react";
export default function Calc() {
    return (

        <div className="section">

            <input type="text" id="display" placeholder="0" />
                <div class="part1">

                    <button id="clear">AC</button>
                    <button id="delete">DEL</button>
                    <button value="%">%</button>
                    <button value="/">/</button>
                </div>
                <div class="part1">

                    <button ><sup>1</sup>/<sub>x</sub></button>
                    <button>x<sup>2</sup></button>
                    <button><sup>2</sup>√¯x</button>
                    <button><sup>-</sup>/<sub>+</sub></button>
                </div>
                <div class="part1">
                    <button value="1">1</button>
                    <button value="2">2</button>
                    <button value="3">3</button>
                    <button value="*">X</button>
                </div>
                <div class="part1">
                    <button value="4">4</button>
                    <button value="5">5</button>
                    <button value="6">6</button>
                    <button value="+">+</button>
                </div>
                <div class="part1">
                    <button value="7">7</button>
                    <button value="8">8</button>
                    <button value="9">9</button>
                    <button value="-">-</button>
                </div>
                <div class="part1">
                    <button value=".">.</button>
                    <button value="0">0</button>
                    <button value="00">00</button>
                    <button value="=" id="equal">=</button>
                </div>

        </div>

    )
}