import { Container, Controls, Current, Progress, ProgressSlider, Time, Volume } from './styles';

import BackwardIcon from '../../assets/images/backward.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';
import React from 'react';
import RepeatIcon from '../../assets/images/repeat.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import Slider from 'rc-slider';
import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Album cover" />
      <div>
        <span>
          Times like these
        </span>
        <small>Foo Figthers</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle icon" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward icon" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play icon" />
        </button>
        <button>
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

export default Player;
