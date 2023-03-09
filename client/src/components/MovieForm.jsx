import { useState } from React;


const MovieForm = () => {

    const [form, setForm] = useState({
        name: '',
        year: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(form)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Movie:</label>
                <input 
                    required
                    type='text'
                    id='name'
                    placeholder='Enter Movie Name'
                    value={form.name}
                    onChange={ e => setForm({ name: e.target.value }) }
                />

                <label htmlFor='name'>Movie:</label>
                <input 
                    required
                    type='number'
                    id='year'
                    placeholder='Year'
                    value={form.year}
                    onChange={ e => setForm({ year: e.target.value }) }
                />

                <button type='submit'>Submit Movie</button>
        </form>
    </div>
  )
}

export default MovieForm