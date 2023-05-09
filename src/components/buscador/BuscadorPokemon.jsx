import React from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/acions/buscadorAction";


const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = React.useState("pikachu");
    return(
        <div className="form-group">
            <label htmlFor="buscar_pokemon" className="text-white">Esto es un cambio</label>
            <input type="text" className="form-control" id="buscar_pokemon" 
            value={pokemon_name}
            onChange={
                (e)=>{
                    set_pokemon_name(e.target.value);
                }
            }/>
            <button className="btn btn-primary mt-3 " onClick={
                ()=>{
                    dispatch(fetchPokemon(pokemon_name))
                }
            }>Enviar</button>
        </div>
    )
}

export default BuscadorPokemon;
