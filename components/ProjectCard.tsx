import { getBlobUrl } from "@/data/lib/blob";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

export default function ProjectCard({ id, title, description, thumbnail }: Props) {
  const imageSrc = thumbnail ? getBlobUrl(`/${id}/${thumbnail}`) : getBlobUrl("/placeholder.png");
  console.log(imageSrc);
  console.log(thumbnail);
  return (
    <div className="rounded-2xl shadow-lg p-4 hover:shadow-xl transition cursor-pointer bg-white">
      {<Image src={imageSrc} alt={title} width={800} height={600} className="rounded-lg mb-3 w-full h-48 object-cover" />}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
