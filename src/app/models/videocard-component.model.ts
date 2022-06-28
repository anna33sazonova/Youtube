
export class VideoCard {
    public videoThumbnail: string;
    public channelName: string;
    public videoTitle: string;
    public channelLogo: string;
    public viewNumber: string;
    public videoDuration: number;
    public uploadDate: string;

    constructor(
        videoThumbnail: string, 
        channelName: string, 
        videoTitle: string, 
        channelLogo: string, 
        viewNumber: string, 
        videoDuration: number, 
        uploadDate: string) {
            this.videoThumbnail = videoThumbnail;
            this.channelName = channelName;
            this.videoTitle = videoTitle;
            this.channelLogo = channelLogo;
            this.viewNumber = viewNumber;
            this.videoDuration = videoDuration;
            this.uploadDate = uploadDate
        }
}