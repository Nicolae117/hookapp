import React,{useState, useEffect} from 'react';
import SongAddForm from './SongAddForm';
import {v1 as uuidv1} from 'uuid';

const SongList = () => {
    const [songlist, setSonglist] = useState([
        {title:"firstSong", id:1},
        {title:"secondSong", id:2},
        {title:"thirdSong", id:3},
    ]);

    const [age, setAge] = useState(20)

    const addSong = (text) =>{
        setSonglist(
            [...songlist,{title: text, id:uuidv1()}]
        )
    }

    useEffect(()=>{
        console.log('useEffect hook run', songlist);
    },[songlist])
    

    return ( 
        <div className="song-list">
            <ul>
                {songlist.map(song=>{
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <SongAddForm addSong={addSong}/>

            <button onClick={ ()=>setAge(age+1) }>Add 1 to age:{age}</button>
        </div>
     );
}
 
export default SongList;