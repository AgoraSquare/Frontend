export interface Gif {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    user?: User | null;
    analytics_response_payload: string;
    analytics: Analytics;
}
export interface Images {
    original: Original;
    downsized: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    downsized_large: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    downsized_medium: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    downsized_small: DownsizedSmallOrOriginalMp4OrPreviewOrHd;
    downsized_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    fixed_height: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
    fixed_height_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
    fixed_height_small: FixedHeightSmall;
    fixed_height_small_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    fixed_height_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    fixed_width: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
    fixed_width_downsampled: FixedHeightDownsampledOrFixedWidthDownsampled;
    fixed_width_small: FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall;
    fixed_width_small_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    fixed_width_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    looping: Looping;
    original_still: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    original_mp4: DownsizedSmallOrOriginalMp4OrPreviewOrHd;
    preview: DownsizedSmallOrOriginalMp4OrPreviewOrHd;
    preview_gif: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    preview_webp: DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill;
    hd?: DownsizedSmallOrOriginalMp4OrPreviewOrHd1 | null;
}
export interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
}
export interface DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill {
    height: string;
    width: string;
    size: string;
    url: string;
}
export interface DownsizedSmallOrOriginalMp4OrPreviewOrHd {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}
export interface FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}
export interface FixedHeightDownsampledOrFixedWidthDownsampled {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
}
export interface FixedHeightSmall {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size?: string | null;
    webp?: string | null;
}
export interface Looping {
    mp4_size: string;
    mp4: string;
}
export interface DownsizedSmallOrOriginalMp4OrPreviewOrHd1 {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}
export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}
export interface Analytics {
    onload: OnloadOrOnclickOrOnsent;
    onclick: OnloadOrOnclickOrOnsent;
    onsent: OnloadOrOnclickOrOnsent;
}
export interface OnloadOrOnclickOrOnsent {
    url: string;
}
