import Link from "next/link";
import projects from "@/data/projects.json";
import aboutme from "@/data/aboutme.json";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="p-8">
      {/* About Me Section */}
      <div className="mb-4">
        <h1 className="text-3xl mb-4 border-b border-gray-200">About Me</h1>
        <p>
          Hi, im {aboutme.first_name}!
          <br></br>
          - Currently a student at{" "}
          {aboutme.education.masters.university_name}, studying{" "}
          <a href={aboutme.education.masters.program_link} target="_blank">
            {aboutme.education.masters.program_name}
          </a> {" "}
          <br></br>
          - I have a <a
            href={aboutme.education.undergraduate.program_link}
            target="_blank"
          >
            {aboutme.education.undergraduate.program_name} from the{" "}
          </a>
          {aboutme.education.undergraduate.university_name}.
        </p>
        {/* Skills */}
        {aboutme.skills && (
          <div className="flex gap-2 flex-wrap mt-6">
            <h3 className="text-lg">Skills: </h3>
            {aboutme.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Featured Projects Section */}
      <div className="mb-4">
        <h2 className="text-3xl mb-4 border-b border-gray-200">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(projects).map(([slug, project]) =>
          project.details.featured ? (
            <Link key={slug} href={`/portfolio/${slug}`} className="grid gap-6">
              <ProjectCard
                title={project.title}
                description={project.details.description}
                image={project.details.thumbnail}
              />
            </Link>
          ) : null
        )}
      </div>
      </div>

      {/* Related Coursework*/}
      <div className="mb-4">
        <h1 className="text-3xl mb-4 border-b border-gray-200">Coursework</h1>
      {aboutme.education.masters.coursework && (
          <div className="flex gap-2 flex-wrap mt-6">
            <h3 className="text-lg">Duke University: </h3>
            {aboutme.education.masters.coursework.map((course, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        )}
        {aboutme.education.masters.coursework && (
          <div className="flex gap-2 flex-wrap mt-6">
            <h3 className="text-lg">University of Delaware: </h3>
            {aboutme.education.masters.coursework.map((course, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
