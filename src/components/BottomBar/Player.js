import { Icon } from "Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useMemo } from "react";

function Player() {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";

    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";

    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";

    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">sol</div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
            <Icon name={"shuffle"} size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
            <Icon name={"playerPrev"} size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            <Icon name={state?.playing ? "pause" : "play"} size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
            <Icon name={"playerNext"} size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
            <Icon name={"repeat"} size={16} />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
          <Icon name={"lyrics"} size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
          <Icon name={"queue"} size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
          <Icon name={"device"} size={16} />
        </button>
        <button
          onClick={controls[state.muted ? 'unmute' : 'mute']}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="w-[5.813rem] max-w-full mr-2">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={value => {
              controls.unmute()
              controls.volume(value)
            }}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-black bg-opacity-0">
          <Icon name={"fullScreen"} size={16} />
        </button>
      </div>
    </div>
  );
}

export default Player;
