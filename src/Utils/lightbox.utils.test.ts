import { Box, collapsedGeometry } from "./lightbox.utils";

const visibleBox = (image: Box, thumbnail: Box, objectFit: string): Box => {
    const { scale, clip } = collapsedGeometry(thumbnail, image, objectFit);
    return {
        width: (image.width - clip.left - clip.right) * scale,
        height: (image.height - clip.top - clip.bottom) * scale,
    };
};

test('a closing image ends in the shape of a thumbnail that crops it', () => {
    const landscape = { width: 1200, height: 900 };
    const portraitThumbnail = { width: 278, height: 371 };

    const visible = visibleBox(landscape, portraitThumbnail, "cover");

    expect(visible.width).toBeCloseTo(278);
    expect(visible.height).toBeCloseTo(371);
});

test('a closing image ends in the shape of a square thumbnail', () => {
    const portrait = { width: 600, height: 800 };
    const squareThumbnail = { width: 400, height: 400 };

    const visible = visibleBox(portrait, squareThumbnail, "cover");

    expect(visible.width).toBeCloseTo(400);
    expect(visible.height).toBeCloseTo(400);
});

test('an uncropped thumbnail shrinks the image without clipping it', () => {
    const image = { width: 1160, height: 437 };
    const thumbnail = { width: 580, height: 218.5 };

    const { scale, clip } = collapsedGeometry(thumbnail, image, "fill");

    expect(scale).toBeCloseTo(0.5);
    expect(clip).toEqual({ top: 0, right: 0, bottom: 0, left: 0 });
});
