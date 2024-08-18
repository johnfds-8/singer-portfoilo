import "./Song.css";
import React, { useState } from "react";
import { SongData } from "../Songs/Songcomp/SongData.js"

function Song() {
  const [songs] = useState(SongData)

  return (
    <>
      {songs.map((song) => {
        return (
          <div className="card" key={song.id}>
            <img className="card-image" src={song.imageSrc} alt="profile picture"></img>
            <h1 className="card-title" >{song.title}</h1>
            <h3 className="card-stream">Streaming Now</h3>
            <div className="tech-stack-icons">
              {/* Spotify link */}

              <a href={song.spotify} className={song.spClass} >
                <img src={song.spotifySrc} alt={song.spAlt} width={30} />
              </a>

              {/* Youtube Link  */}

              <a href={song.youtube} className={song.ytClass} >
                <img src={song.youtubeSrc} alt={song.ytAlt} width={30} />
              </a>

              {/* Apple Music Link*/}

              <a href={song.apple} className={song.apClass}>
                <img src={song.appleSrc} alt={song.apAlt} width={30} />
              </a>

              {/* Amazon Music link  */}

              <a href={song.amazon} className={song.amClass} >
                <img src={song.amazonSrc} alt={song.amAlt} width={30} />
              </a>



            </div>

          </div>
        )
      })}

    </>
  )
}

export default Song;