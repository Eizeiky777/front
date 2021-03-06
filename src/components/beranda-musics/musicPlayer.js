import React  from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import './musicPlayer.css';

const MusicPlayer = ({ music, playIndex, getAudioInstance, onPlayHandler, onPauseHandler }) => {
    // console.log(setPlayIndex)
    const musicas = Object.values(music);
	const playlist = musicas.map((X) => ({
		name: X.title,
		singer: X.Artist.name,
		cover: `https://dumbsound-backend-777.herokuapp.com/public/${X.thumbnail}`,
		musicSrc: X.attach
    }));
	
	//console.log(playIndex)

	return (
		<div style={{ height: '80px', width: '100%' }}>
			<ReactJkMusicPlayer
				mode="full"
				audioLists={playlist}
				defaultPlayIndex={0}
				autoPlay={false}
				showDownload={false}
				showThemeSwitch={false}
				toggleMode={false}
				responsive={false}
				glassBg={true}
				playIndex={playIndex}
				getAudioInstance={getAudioInstance}
		
			/> 
		</div>
	);
};

export default MusicPlayer;

// onAudioPlay={(audioInfo) => {
// 	if (playIndex === audioInfo.playIndex) {
// 		return;
// 	}
// 	setPlayIndex(audioInfo.playIndex);
// }}

// class App extends React.Component{
//     constructor() {
//     this.audioInstance = null
//     }
//     render() {
//     return (
//         <>
//         <ReactJkMusicPlayer getAudioInstance={instance => this.audioInstance = instance}/>
//         <button onClick={() => this.audioInstance.play()}>play</button>
//         <button onClick={() => this.audioInstance.pause()}>pause</button>
//         <button onClick={() => this.audioInstance.load()}>reload</button>
//         <button onClick={() => (this.audioInstance.currentTime = 40)}>
//             change current play time
//         </button>
//         <button onClick={() => (this.audioInstance.playbackRate = 2)}>
//             change play back rate
//         </button>
//         <button onClick={() => (this.audioInstance.volume = 0.2)}>change volume</button>
//         <button onClick={() => this.audioInstance.destroy()}>destroy player</button>
//         </>
//     )
//     }
// }
