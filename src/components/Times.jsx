import React, { useState, useEffect } from 'react';

const App = () => {
    const [times, setTimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTimes = async () => {
            try {
                const response = await fetch('https://api.cartola.globo.com/clubes');
                const data = await response.json();
                const timesArray = Object.values(data); // Converte o objeto em um array
                setTimes(timesArray);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar clubes:', error);
                setLoading(false);
            }
        };

        fetchTimes();
    }, []);

    return (
        <div className="App">
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {times.map((time) => (
                        <li key={time.id}>
                            <img src={time.escudos['60x60']} alt={time.nome}/>
                            {time.nome} <p className='timape'>{time.apelido}</p>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;