import { LenstubePublication } from 'src/types/local'

export const getVideoUrl = (video: LenstubePublication) => {
  return (
    video?.metadata?.media[1]?.original.url ||
    video?.metadata?.media[0]?.original.url
  )
}

export const getPlaybackIdFromUrl = (video: LenstubePublication) => {
  const url = video?.metadata?.media[1]?.original.url
  if (!url) return null
  const pathname = new URL(url).pathname
  const playbackId = pathname.split('/')[2]
  return playbackId
}