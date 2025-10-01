// homepage:
// - top left Name
// - email(s) underneath
// icons for git, linkedin, insta, spotify

// - about me
// ---> maybe an img
// - featured initiatives (2)
// ---> use projectcard and a grid to show two
// -------> these should technically be projects on the portfolio page just considered "featured"
// - show relevant coursework

// portfolio:
// - reverse chronological list


import { Project } from "../data/project";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Title + Date */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      {project.details.date && (
        <p className="text-gray-500 mb-2">
          {new Date(project.details.date).toLocaleDateString()}
        </p>
      )}

      {/* Update Banner */}
      {project.details.update && project.details.update.update_description && (
        <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50">
          <p className="text-sm text-blue-800 font-medium">
            Update ({new Date(project.details.update.update_date).toLocaleDateString()}):
          </p>
          <p className="text-blue-900">{project.details.update.update_description}</p>
        </div>
      )}

      {/* Main description */}
      <p className="mb-6 text-lg">{project.details.description}</p>

      {/* Blurbs */}
      {project.blurbs.map((blurb, idx) => (
        <section key={idx} className="mb-8">
          {blurb.text && (
            <p className="mb-4 text-lg leading-relaxed">{blurb.text}</p>
          )}
          {blurb.images && blurb.images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {blurb.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} image ${i + 1}`}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </section>
      ))}

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

