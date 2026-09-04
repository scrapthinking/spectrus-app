export interface CarouselVideo {
  id: string;
  title: string;
  previewUrl: string;
  videoUrl: string;
  previewStart?: number;
  previewDuration?: number;
}

export const carouselVideos: CarouselVideo[] = [
  {
    id: "video-01",
    title: "Proyecto 01",
    previewUrl: "/videos/previews/fpv-jetcars-cinematic-preview.mp4",
    videoUrl: "/videos/fpv-jetcars-cinematic.mp4",
    previewStart: 0,
    previewDuration: 6,
  },
  {
    id: "video-02",
    title: "Proyecto 02",
    previewUrl: "/videos/previews/recopilacion-fx-cinematic-shots-preview.mp4",
    videoUrl: "/videos/recopilacion-fx-cinematic-shots.mp4",
    previewStart: 3,
    previewDuration: 6,
  },
  {
    id: "video-03",
    title: "Proyecto 03",
    previewUrl: "/videos/previews/rodada-mtb-alquiver-x-spectrus-cinematic-preview.mp4",
    videoUrl: "/videos/rodada-mtb-alquiver-x-spectrus-cinematic.mp4",
    previewStart: 1,
    previewDuration: 6,
  },
];