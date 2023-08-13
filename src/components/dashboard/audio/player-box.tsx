import React, { useState, useEffect, useRef } from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { BsFillPlayFill, BsPauseFill, BsMicFill } from 'react-icons/bs';

interface Props {
  source: string;
}

const formatTime = (currentTime: number, duration: number): string => {
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);
  return `${currentMinutes}:${currentSeconds
    .toString()
    .padStart(2, '0')} / ${durationMinutes}:${durationSeconds
    .toString()
    .padStart(2, '0')}`;
};

const PlayerBox = (props: Props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current!.duration);
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', () => {});
      }
    };
  }, []);

  return (
    <span className='p-2 font-medium text-gray-900 whitespace-nowrap inline-flex items-center gap-1 rounded-md border-[1px]'>
      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <BsPauseFill className='text-2xl bg-red-700 text-white p-1 rounded-md border-[1px]' />
        ) : (
          <BsFillPlayFill className='text-2xl bg-green-700 text-white p-1 rounded-md border-[1px]' />
        )}
      </button>
      <span>{formatTime(currentTime, duration)}</span>
      <BsMicFill className='text-xs' />
      <audio ref={audioRef} src={props.source} preload='metadata'></audio>
    </span>
  );
};

export default PlayerBox;
