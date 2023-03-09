import React from 'react'
import Movie from "./Movie"
import { useState } from 'React'

const Movies = ({movies}) => {

    const [form, setForm] = useState({
        name: '',
        year: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Movie:</label>
                    <input 
                        required
                        type='text'
                        id='name'
                        placeholder='Enter Movie Name'
                        value={form.name}
                        onChange={ e => setForm({ ...form, name: e.target.value }) }
                    />

                    <label htmlFor='name'>Year:</label>
                    <input 
                        required
                        type='number'
                        id='year'
                        placeholder='Year'
                        value={form.year}
                        onChange={ e => setForm({ ...form, year: e.target.value }) }
                    />
                <button type='submit'>Submit Movie</button>
            </form>
        </div>

        <div className="movies">
            {movies.map((m,i) => <Movie key={i} movie={m} />)}
        </div>

    </div>
    )
}

export default Movies