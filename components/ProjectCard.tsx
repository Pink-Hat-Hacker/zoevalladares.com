type Props = {
  title: string;
  description: string;
  image?: string;
};

export default function ProjectCard({ title, description, image }: Props) {
  return (
    <div className="rounded-2xl shadow-lg p-4 hover:shadow-xl transition cursor-pointer bg-white">
      {image && <img src={image} alt={title} className="rounded-lg mb-3 w-full h-48 object-cover" />}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
