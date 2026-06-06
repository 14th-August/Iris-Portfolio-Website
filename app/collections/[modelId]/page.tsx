import EditorialGallery from '@/components/ui/Cards';
import { getPhotosByModel } from '@/utils/data';
import { notFound } from 'next/navigation';

export default async function ModelPortfolioPage({ 
  params 
}: { 
  params: Promise<{ modelId: string }> 
}) {
  const resolvedParams = await params;
  const modelId = resolvedParams.modelId;

  // Fetch the data using our new helper
  const images = getPhotosByModel(modelId);

  if (!images) {
    notFound(); 
  }

  // Format the URL slug back into a clean readable name for the header
  // e.g., "amber-chiu" becomes "Amber Chiu"
  const formattedName = modelId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-white">
      {/* Reuse your beautiful animated grid! */}
      <EditorialGallery images={images} actionType="lightbox" />
    </main>
  );
}