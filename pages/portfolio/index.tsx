import projects from "../../data/projects.json";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

export default function PortfolioPage() {
  const sortedProjects = Object.entries(projects).sort(
    (a, b) => new Date(b[1].details.date).getTime() - new Date(a[1].details.date).getTime()
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {sortedProjects.map(([slug, project]) => (
          <Link key={slug} href={`/portfolio/${slug}`} className="grid gap-6">
            <ProjectCard title={project.title} description={project.details.description} image={project.details.thumbnail} />
          </Link>
        ))}
      </div>
    </main>
  );
}

