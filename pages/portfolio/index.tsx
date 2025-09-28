import projects from "../../data/projects.json";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(projects).map(([slug, project]) => (
          <Link key={slug} href={`/portfolio/${slug}`}>
            <ProjectCard title={project.title} description={project.description} image={project.images[0]} />
          </Link>
        ))}
      </div>
    </main>
  );
}
