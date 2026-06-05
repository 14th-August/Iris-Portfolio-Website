import EditorialGallery from '@/components/ui/Cards';
import { getGalleryByCategory } from '@/utils/data';
import { notFound } from 'next/navigation';

// 1. Make the function async and update the params type to be a Promise
export default async function GalleryCategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const images = getGalleryByCategory(category);

  if (!images) {
    notFound(); 
  }

  return (
    <main className="min-h-screen bg-white">
      <EditorialGallery images={images} actionType="route"/>
    </main>
  );
}