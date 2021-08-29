import Topo from "./topo";
import Corpo from "./corpo";
import BarraPedido from "./barrapedido";
import Confirmacao from "./confirmacao";
import React, { useState } from "react";
import "../css/reset.css";
import "../css/styles.css";
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from "react-router-dom";

export default function App(){

    const [itensSelecionados, setItensSelecionados] = useState({
        pratos: [], bebidas: [], sobremesas: []
    });

    return (
        <Router>
            <Topo />
            <Switch>
                <Route path="/revisar">
                    <Confirmacao itens={itensSelecionados} setItens={setItensSelecionados}/>
                </Route>
                <Route path="/">
                    <Corpo itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
                    <BarraPedido itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
                </Route>
            </Switch>
        </Router>
    );
}