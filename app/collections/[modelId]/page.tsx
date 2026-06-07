// app/collections/[modelId]/page.tsx
import { getPhotosByModel, getModelName } from '@/utils/data';
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
      <h1 className="text-center text-black font-[family-name:var(--font-montserrat)] font-extralight uppercase tracking-[0.3em] pt-16 ">
        
        {getModelName(modelId)}
      </h1>
      <EditorialGallery images={images} actionType="lightbox" showLabels={false} />
    </main>
  );
}