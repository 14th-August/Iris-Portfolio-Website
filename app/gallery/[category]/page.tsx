import EditorialGallery from '@/components/ui/Cards';
import { getCoversByCategory } from '@/utils/data';
import { notFound } from 'next/navigation';

export default async function GalleryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const images = getCoversByCategory(category);

  if (!images) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <EditorialGallery images={images} actionType="route" />
    </main>
  );
}