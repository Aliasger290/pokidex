import React from "react";

function Pokemons(props) {
  const { onFormSubmit, onInputChange, pokemonData, pokemonType } = props;
  return (
    <>
      <div className="App">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="">
            <input
              type="text"
              onChange={onInputChange}
              placeholder="Enter pokemon name: "
            />
          </label>
        </form>
        {pokemonData.map((data) => {
          return (
            <div key={data.id} className="pokemon-container">
              {/* <button className="rotate-left"><i className="fas fa-caret-left"></i></button> */}
              <img
                src={data.sprites.front_default}
                alt=""
                className="pokemon-image"
              />
              {/* <button className="rotate-right"><i className="fas fa-caret-right"></i></button> */}
              <div className="pokemon-stats">
                <h1 className="stats">Type: {pokemonType}</h1>

                <h1 className="stats">
                  Height: {Math.round(data.height * 3.9)}"
                </h1>

                <h1 className="stats">
                  Weight: {Math.round(data.weight * 4.3)} lbs
                </h1>

                <h1 className="stats">Battles: {data.game_indices.length}</h1>
                <h1 className="stats">Experience: {data.base_experience}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pokemons;
