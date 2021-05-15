import React,{useState} from 'react';

const SongAddForm = ({ addSong }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addSong(title);
        setTitle('');

    }

    return (  
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <label> Song name: </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <input type="submit" value="Add" ></input>
            </form>
        </div>
     );
}
 
export default SongAddForm;