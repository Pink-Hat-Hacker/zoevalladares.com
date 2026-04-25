import { getBlobUrl } from "@/data/lib/blob";

type Props = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export default function ProjectCard({ id, title, description, image }: Props) {
  console.log(id);
  return (
    <div className="rounded-2xl shadow-lg p-4 hover:shadow-xl transition cursor-pointer bg-white">
      {image && <img src={getBlobUrl("/" + id + "/" + image)} alt={title} className="rounded-lg mb-3 w-full h-48 object-cover" />}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
