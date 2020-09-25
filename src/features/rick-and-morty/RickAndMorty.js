import React, { Fragment, useEffect, useState } from 'react';

export function RickAndMorty() {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(function () {
        async function fetchCharacters() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            if (200 <= response.status && response.status < 300) {
                const { results } = await response.json();
                setCharacters(results);
            }
        }
        fetchCharacters()
    }, [page]);

    return (
        <Fragment>
            <input type="number" name="page" id="pageNumber" min="1" value={page} onChange={({ target: { value } }) => setPage(value)} />
            <ul>
                {characters.map(({ id, name, image }) => (
                    <li key={id}>
                        <h1>{name}</h1>
                        <img src={image} alt={name} />
                    </li>
                ))}
            </ul>
        </Fragment>
    );

}