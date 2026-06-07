export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  modelId: string;
}

// This tells TS: "This object has string keys, and the values are arrays of ImageItems"
export type GalleryData = {
  [key: string]: ImageItem[];
};

export const modelNames: Record<string, string> = {
  "hsuhsuanru-1": "hsuhsuanru",
  "hsuhsuanru-2": "hsuhsuanru",
  "vfs": "Vancouver Fashion Show",
  "taiwan_show": "Fashion & Beauty",
};

export const galleryData: GalleryData = {
  portfolio: [
    {
      id: "_20080808_5",
      src: "/photos/_20080808_/IMG_3326.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "_20080808_6",
      src: "/photos/_20080808_/IMG_3329.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "_20080808_1",
      src: "/photos/_20080808_/IMG_3310.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "_20080808_2",
      src: "/photos/_20080808_/IMG_3311.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "_20080808_3",
      src: "/photos/_20080808_/IMG_3317.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "_20080808_4",
      src: "/photos/_20080808_/IMG_3319.JPG",
      alt: "_20080808_ Image by Iris",
      modelId: "_20080808_",
    },
    {
      id: "appynayak_1",
      src: "/photos/appynayak/IMG_8681.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_2",
      src: "/photos/appynayak/IMG_8697.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_3",
      src: "/photos/appynayak/IMG_8699.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_4",
      src: "/photos/appynayak/IMG_8702.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_5",
      src: "/photos/appynayak/IMG_8862.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_6",
      src: "/photos/appynayak/IMG_8864.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_7",
      src: "/photos/appynayak/IMG_8871.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_8",
      src: "/photos/appynayak/IMG_8874.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
        {
      id: "appynayak_9",
      src: "/photos/appynayak/IMG_8898.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
    {
      id: "appynayak_10",
      src: "/photos/appynayak/IMG_8942.JPEG",
      alt: "appynayak Image by Iris",
      modelId: "appynayak",
    },
     {
      id: "hsuhsuanru-1_1",
      src: "/photos/hsuhsuanru/IMG_0456.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_2",
      src: "/photos/hsuhsuanru/IMG_0457.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_3",
      src: "/photos/hsuhsuanru/IMG_0458.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_4",
      src: "/photos/hsuhsuanru/IMG_0459.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_5",
      src: "/photos/hsuhsuanru/IMG_0493.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_6",
      src: "/photos/hsuhsuanru/IMG_0497.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_7",
      src: "/photos/hsuhsuanru/IMG_0499.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_8",
      src: "/photos/hsuhsuanru/IMG_0500.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_9",
      src: "/photos/hsuhsuanru/IMG_0501.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_10",
      src: "/photos/hsuhsuanru/IMG_0508.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-1_11",
      src: "/photos/hsuhsuanru/IMG_0509.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-1",
    },
    {
      id: "hsuhsuanru-2_1",
      src: "/photos/hsuhsuanru-set2/IMG_0460.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_2",
      src: "/photos/hsuhsuanru-set2/IMG_0462.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_3",
      src: "/photos/hsuhsuanru-set2/IMG_0463.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_4",
      src: "/photos/hsuhsuanru-set2/IMG_0467.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_5",
      src: "/photos/hsuhsuanru-set2/IMG_0469.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_6",
      src: "/photos/hsuhsuanru-set2/IMG_0473.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_7",
      src: "/photos/hsuhsuanru-set2/IMG_0475.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_8",
      src: "/photos/hsuhsuanru-set2/IMG_0481.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "hsuhsuanru-2_9",
      src: "/photos/hsuhsuanru-set2/IMG_0787.JPG",
      alt: "hsuhsuanru Image by Iris",
      modelId: "hsuhsuanru-2",
    },
    {
      id: "Simply_Good_1",
      src: "/photos/Simply_Good/IMG_2952.JPG",
      alt: "Simply_Good Image by Iris",
      modelId: "Simply_Good",
    },
    {
      id: "Simply_Good_2",
      src: "/photos/Simply_Good/IMG_2953.JPG",
      alt: "Simply_Good Image by Iris",
      modelId: "Simply_Good",
    },
    {
      id: "Simply_Good_3",
      src: "/photos/Simply_Good/IMG_2954.JPG",
      alt: "Simply_Good Image by Iris",
      modelId: "Simply_Good",
    },
    {
      id: "Simply_Good_4",
      src: "/photos/Simply_Good/IMG_2955.JPG",
      alt: "Simply_Good Image by Iris",
      modelId: "Simply_Good",
    },
    {
      id: "xchiuu__30_1",
      src: "/photos/xchiuu__30/EJXF6656.JPG",
      alt: "xchiuu__30 Image by Iris",
      modelId: "xchiuu__30",
    },
    {
      id: "xchiuu__30_2",
      src: "/photos/xchiuu__30/IMG_4617.JPG",
      alt: "xchiuu__30 Image by Iris",
      modelId: "xchiuu__30",
    },
    {
      id: "xchiuu__30_3",
      src: "/photos/xchiuu__30/IMG_4618.JPG",
      alt: "xchiuu__30 Image by Iris",
      modelId: "xchiuu__30",
    },
    {
      id: "xchiuu__30_4",
      src: "/photos/xchiuu__30/IMG_4619.JPG",
      alt: "xchiuu__30 Image by Iris",
      modelId: "xchiuu__30",
    },
    {
      id: "xchiuu__30_5",
      src: "/photos/xchiuu__30/IMG_4625.JPG",
      alt: "xchiuu__30 Image by Iris",
      modelId: "xchiuu__30",
    },
    {
      id: "zmcckk_1",
      src: "/photos/zmcckk/IMG_1730.JPG",
      alt: "zmcckk Image by Iris",
      modelId: "zmcckk",
    },
    {
      id: "zmcckk_2",
      src: "/photos/zmcckk/IMG_1731.JPG",
      alt: "zmcckk Image by Iris",
      modelId: "zmcckk",
    },
    {
      id: "zmcckk_3",
      src: "/photos/zmcckk/IMG_1732.JPG",
      alt: "zmcckk Image by Iris",
      modelId: "zmcckk",
    },
    {
      id: "unknown1_1",
      src: "/photos/unknown1/IMG_6766.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown1_2",
      src: "/photos/unknown1/IMG_6767.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown1_3",
      src: "/photos/unknown1/IMG_6768.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown1_4",
      src: "/photos/unknown1/IMG_6769.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown1_5",
      src: "/photos/unknown1/IMG_6770.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown1_6",
      src: "/photos/unknown1/IMG_6771.JPG",
      alt: "unknown1 Image by Iris",
      modelId: "unknown1",
    },
    {
      id: "unknown2_1",
      src: "/photos/unknown2/IMG_6772.JPG",
      alt: "unknown2 Image by Iris",
      modelId: "unknown2",
    },
    {
      id: "unknown2_2",
      src: "/photos/unknown2/IMG_6773.JPG",
      alt: "unknown2 Image by Iris",
      modelId: "unknown2",
    },
    {
      id: "unknown2_3",
      src: "/photos/unknown2/IMG_6774.JPG",
      alt: "unknown2 Image by Iris",
      modelId: "unknown2",
    },
    {
      id: "unknown2_4",
      src: "/photos/unknown2/IMG_6775.JPG",
      alt: "unknown2 Image by Iris",
      modelId: "unknown2",
    },
        {
      id: "unknown2_5",
      src: "/photos/unknown2/JPUU8223.JPG",
      alt: "unknown2 Image by Iris",
      modelId: "unknown2",
    },
    {
      id: "unknown3_1",
      src: "/photos/unknown3/IMG_8506.JPG",
      alt: "unknown3 Image by Iris",
      modelId: "unknown3",
    },
    {
      id: "unknown3_2",
      src: "/photos/unknown3/IMG_8508.JPG",
      alt: "unknown3 Image by Iris",
      modelId: "unknown3",
    },
    {
      id: "unknown3_3",
      src: "/photos/unknown3/IMG_8628.JPG",
      alt: "unknown3 Image by Iris",
      modelId: "unknown3",
    },
    {
      id: "unknown3_4",
      src: "/photos/unknown3/IMG_8629.JPG",
      alt: "unknown3 Image by Iris",
      modelId: "unknown3",
    },
    {
      id: "unknown3_5",
      src: "/photos/unknown3/IMG_8631.JPG",
      alt: "unknown3 Image by Iris",
      modelId: "unknown3",
    },
    {
      id: "unknown5_1",
      src: "/photos/unknown5/IMG_8417.JPG",
      alt: "unknown5 Image by Iris",
      modelId: "unknown5",
    },
    {
      id: "unknown5_2",
      src: "/photos/unknown5/IMG_8418.JPG",
      alt: "unknown5 Image by Iris",
      modelId: "unknown5",
    },
    {
      id: "unknown5_3",
      src: "/photos/unknown5/IMG_8507.JPG",
      alt: "unknown5 Image by Iris",
      modelId: "unknown5",
    },
    {
      id: "liiin_yu_1",
      src: "/photos/liiin_yu/IMG_5404.JPG",
      alt: "liiin_yu Image by Iris",
      modelId: "liiin_yu",
    },
    {
      id: "liiin_yu_2",
      src: "/photos/liiin_yu/IMG_5406.JPG",
      alt: "liiin_yu Image by Iris",
      modelId: "liiin_yu",
    },
  ],
  
  // Data for the 'Shows' page
  shows: [
    {
      id: "vfs_1",
      src: "/photos/vfs/IMG_0525.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_2",
      src: "/photos/vfs/IMG_0526.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_3",
      src: "/photos/vfs/IMG_0582.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_4",
      src: "/photos/vfs/IMG_0583.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_5",
      src: "/photos/vfs/IMG_0584.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_6",
      src: "/photos/vfs/IMG_0585.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_7",
      src: "/photos/vfs/IMG_0590.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_8",
      src: "/photos/vfs/IMG_0601.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "vfs_9",
      src: "/photos/vfs/IMG_0602.JPG",
      alt: "Vancouver Fashion Show Image by Iris",
      modelId: "vfs",
    },
    {
      id: "taiwan_show_1",
      src: "/photos/taiwan_show/GVGN8650.JPG",
      alt: "Fashion & Beauty Image by Iris",
      modelId: "taiwan_show",
    },
    {
      id: "taiwan_show_2",
      src: "/photos/taiwan_show/IMG_4059.JPG",
      alt: "Fashion & Beauty Image by Iris",
      modelId: "taiwan_show",
    },
    {
      id: "taiwan_show_3",
      src: "/photos/taiwan_show/IMG_4072.JPG",
      alt: "Fashion & Beauty Image by Iris",
      modelId: "taiwan_show",
    },
  ]
};

export function getGalleryByCategory(category: string) {
  // Convert to lowercase to ensure /gallery/Portfolio matches 'portfolio'
  const normalizedCategory = category.toLowerCase();
  // Return the matching array, or null if it doesn't exist
  return galleryData[normalizedCategory] || null;
}

export function getPhotosByModel(modelId: string) {
  if (!modelId) return null;
  // Combine all categories into one massive array of images
  const allImages = Object.values(galleryData).flat();
  // Filter down to only the images that match the requested modelId
  const modelImages = allImages.filter(img => img.modelId === modelId);
  return modelImages.length > 0 ? modelImages : null;
}

export function getCoversByCategory(category: string) {
  const images = getGalleryByCategory(category);
  if (!images) return null;

  const seen = new Set<string>();
  const covers: ImageItem[] = [];

  for (const img of images) {
    if (!seen.has(img.modelId)) {
      seen.add(img.modelId);
      covers.push(img); // first image per model becomes the cover
    }
  }
  return covers;
}

export function getModelName(modelId: string) {
  return modelNames[modelId] ?? modelId;
}