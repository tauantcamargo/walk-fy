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

const Player = ({ player: { currentSong, status }, playSong, pauseSong, nextSong, prevSong }) => (
  <Container>
    {!!currentSong && (
      <Sound url={currentSong.file} playStatus={status} onFinishedPlaying={nextSong} />
    )}

    <Current>
      {!!currentSong && (
        <>
        <img src={currentSong.thumbnail} alt={currentSong.title} />
          <div>
            <span>
              {currentSong.title}
            </span>
            <small>{currentSong.author}</small>
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

        {!!currentSong && status === Sound.status.PLAYING ? (
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
        <span>0:00</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
          />
        </ProgressSlider>
        <span>5:00</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume icon" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
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
  pause: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
