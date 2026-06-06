export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  modelId: string;
}

// 2. Define the shape of the overall data object
// This tells TS: "This object has string keys, and the values are arrays of ImageItems"
export type GalleryData = {
  [key: string]: ImageItem[];
};

export const galleryData: GalleryData = {
  // Data for the 'Portfolio' page
  portfolio: [
    {
      id: "p1",
      src: "/photos/Iris Photos/CNDV7370.JPG",
      alt: "Creative makeup featuring translucent butterfly wings and pearls",
      title: "Ethereal Butterfly",
      modelId: "model1",
    },
    {
      id: "p2",
      src: "/photos/Iris Photos/FQQO6631.JPG",
      alt: "High fashion glamour look with heavy accessories",
      title: "Gilded Glamour",
      modelId: "model2",
    },
    // Add more portfolio objects here...
  ],
  
  // Data for the 'Shows' page
  shows: [
    {
      id: "s1",
      src: "/photos/vfs/IMG_0525.JPG",
      alt: "Runway model at Vancouver Fashion Week 2024",
      title: "Title1",
      modelId: "vfs", // Example model ID
    },
    {
      id: "s2",
      src: "/photos/vfs/IMG_0526.JPG",
      alt: "Backstage touch-ups at the 2024 Charity Show",
      title: "Title2",
      modelId: "vfs", // Example model ID
    },
    // Add more show objects here...
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