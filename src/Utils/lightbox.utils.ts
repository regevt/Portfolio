export interface Box {
    width: number;
    height: number;
}

export interface CollapsedGeometry {
    scale: number;
    clip: { top: number; right: number; bottom: number; left: number };
}

/**
 * Where the enlarged image goes when it shrinks back into its thumbnail.
 * A thumbnail with `object-fit: cover` shows only the middle of the photo, so the
 * enlarged image must scale to cover the thumbnail and clip the rest, or it ends
 * in the photo's own shape and then jumps to the thumbnail's shape.
 * The clip insets are in the enlarged image's own pixels, before the scale.
 */
export const collapsedGeometry = (thumbnail: Box, image: Box, objectFit: string): CollapsedGeometry => {
    if (objectFit !== "cover") {
        return { scale: thumbnail.width / image.width, clip: { top: 0, right: 0, bottom: 0, left: 0 } };
    }

    const scale = Math.max(thumbnail.width / image.width, thumbnail.height / image.height);
    const insetX = (image.width - thumbnail.width / scale) / 2;
    const insetY = (image.height - thumbnail.height / scale) / 2;
    return { scale, clip: { top: insetY, right: insetX, bottom: insetY, left: insetX } };
}
