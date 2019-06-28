import { Container, Controls, Current, Progress, ProgressSlider, Time, Volume } from './styles';

import BackwardIcon from '../../assets/images/backward.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';
import { Creators as PlayerActions } from '../../store/ducks/player';
import PropTypes from 'prop-types';
import React from 'react';
import RepeatIcon from '../../assets/images/repeat.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import VolumeIcon from '../../assets/images/volume.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Player = ({
  player,
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  playingSong,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress,
  setVolume,
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={nextSong}
        onPlaying={playingSong}
        position={player.position}
        volume={player.volume}
      />
    )}

    <Current>
      {!!player.currentSong && (
        <>
        <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
          <div>
            <span>
              {player.currentSong.title}
            </span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle icon" />
        </button>

        <button onClick={() => prevSong()}>
          <img src={BackwardIcon} alt="Backward icon" />
        </button>

        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={() => pauseSong()}>
            <img src={PauseIcon} alt="Play icon" />
          </button>
        ) : (
          <button onClick={() => playSong()}>
            <img src={PlayIcon} alt="Play icon" />
          </button>
        )}

        <button onClick={() => nextSong()}>
          <img src={ForwardIcon} alt="Forward icon" />
        </button>

        <button>
          <img src={RepeatIcon} alt="Repeat icon" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume icon" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
  position: PropTypes.func.isRequired,
  duration: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  positionShown: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
}

function msToTime(duration) {
  if (!duration) return null;

  let seconds = parseInt((duration/1000) % 60, 10);
  const minutes = parseInt(((duration / (1000 * 60)) % 60), 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress: parseInt((state.player.positionShown || state.player.position) * (1000 / state.player.duration), 10) || 0,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
