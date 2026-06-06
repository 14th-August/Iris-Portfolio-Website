// app/collections/[modelId]/page.tsx
import { getPhotosByModel } from '@/utils/data';
import EditorialGallery from '@/components/ui/Cards';
import { notFound } from 'next/navigation';

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ modelId: string }>;
}) {
  const { modelId } = await params;
  const images = getPhotosByModel(modelId);

  if (!images) notFound();

  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-center text-3xl font-serif pt-16 capitalize">
        {modelId}
      </h1>
      <EditorialGallery images={images} actionType="lightbox" showLabels={false} />
    </main>
  );
}