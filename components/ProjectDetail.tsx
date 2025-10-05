import { Project } from "@/data/project";
import FullScreenImage from "./FullScreenImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  return (
    <article className="max-w-3xl mx-auto">
      {/* Title + Date */}
      <h1 className="text-4xl font-bold mb-4">
        {project.details.link ? (
          <a href={project.details.link}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#f514b6" }} />
          </a>
        ) : null}{" "}
        {project.title}
      </h1>
      {project.details.date && (
        <p className="text-gray-500 mb-2">
          {new Date(project.details.date).toLocaleDateString()}
        </p>
      )}

      {/* Update Banner */}
      {project.details.update && project.details.update.update_description && (
        <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50">
          <p className="text-sm text-blue-800 font-medium">
            Update (
            {new Date(project.details.update.update_date).toLocaleDateString()}
            ):
          </p>
          <p className="text-blue-900">
            {project.details.update.update_description}
          </p>
        </div>
      )}

      {/* Main description */}
      <p className="mb-6 text-lg">{project.details.description}</p>

      {/* If Video */}
      {project.details.video ? (
        <iframe
          src={project.details.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          className="mb-8 w-full h-100 rounded-lg"
        ></iframe>
      ) : null}

      {/* Blurbs */}
      {project.blurbs.map((blurb, idx) => (
        <section key={idx} className="mb-8 border-b border-gray-400">
          {/* Text */}
          {blurb.text &&
            blurb.text.length > 0 &&
            blurb.text.map((t) => (
              <p className="mb-4 text-lg leading-relaxed">{t}</p>
            ))}
          {/* Images */}
          {blurb.images && blurb.images.length > 0 && (
            <div className="mb-4 grid md:grid-cols-2 gap-2">
              {blurb.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} image ${i + 1}`}
                  className="w-full h-full rounded-lg object-cover"
                  onClick={() => setFullscreenSrc(src)}
                />
              ))}
            </div>
          )}
        </section>
      ))}

      {fullscreenSrc && (
        <FullScreenImage
          src={fullscreenSrc}
          alt="Expanded image"
          onClose={() => setFullscreenSrc(null)}
        />
      )}

      {/* Tags */}
      {project.details.tags && (
        <div className="flex gap-2 flex-wrap mt-6">
          {project.details.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
