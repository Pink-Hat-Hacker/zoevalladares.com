type Props = {
  title: string;
  description: string;
  images?: string[];
  date?: string;
  tags?: string[];
};

export default function ProjectDetail({ title, description, images, date, tags }: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {date && <p className="text-gray-500 mb-2">{new Date(date).toDateString()}</p>}
      <p className="mb-6 text-lg">{description}</p>
      {images && images.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`${title} image ${i + 1}`} className="rounded-lg object-cover" />
          ))}
        </div>
      )}
      {tags && (
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
