import Link from "next/link";
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import projects from "@/data/projects.json";
import aboutme from "@/data/aboutme.json";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showCoursework, setShowCoursework] = useState(true);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* About Me Section */}
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2"
          onClick={() => setShowAbout(!showAbout)}
        >
          <h1 className="text-3xl">About Me</h1>
          <FontAwesomeIcon
            icon={showAbout ? faChevronUp : faChevronDown}
            className="text-3xl transition-transform duration-200"
            style={{ color: "#f514b6" }}
          />
        </div>

        {showAbout && (
          <div className="text-xl mt-4 transition-all duration-300 max-w-5xl mx-auto">
            <p>hi, i'm {aboutme.first_name}!</p>
            <p>
              - student @ {aboutme.education.masters.university_name} studying{" "}
              {aboutme.education.masters.program_name} - class of{" "}
              {aboutme.education.masters.graduation_year}
            </p>
            <p>
              - {aboutme.education.undergraduate.program_name} from{" "}
              {aboutme.education.undergraduate.university_name} - class of{" "}
              {aboutme.education.undergraduate.graduation_year}
            </p>
            <p>a Blue Devil-Hen</p>
          </div>
        )}
      </div>

      {/* Featured Projects Section */}
      <div className="mb-8">
        <h2 className="text-3xl mb-4 border-b border-gray-200">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(projects).map(([slug, project]: any) =>
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

      {/* Related Coursework */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2"
          onClick={() => setShowCoursework(!showCoursework)}
        >
          <h1 className="text-3xl">Related Coursework & Skills</h1>
          <FontAwesomeIcon
            icon={showCoursework ? faChevronUp : faChevronDown}
            className="text-3xl transition-transform duration-200"
            style={{ color: "#f514b6" }}
          />
        </div>

        {showCoursework && (
          <div className="mt-4 transition-all duration-300 max-w-5xl mx-auto">
            {aboutme.education.masters.coursework && (
              <div className="flex gap-2 flex-wrap mt-6">
                <h3 className="text-xl font-bold">
                  {aboutme.education.masters.university_name}:
                </h3>
                {aboutme.education.masters.coursework.map(
                  (course: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  )
                )}
              </div>
            )}
            {aboutme.education.undergraduate.coursework && (
              <div className="flex gap-2 flex-wrap mt-6">
                <h3 className="text-xl font-bold">
                  {aboutme.education.undergraduate.university_name}:
                </h3>
                {aboutme.education.undergraduate.coursework.map(
                  (course: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  )
                )}
              </div>
            )}
            {aboutme.skills && (
              <div className="flex gap-2 flex-wrap mt-6">
                <h3 className="text-xl font-bold">Skills: </h3>
                {aboutme.skills.map((skill: string, i: number) => (
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
        )}
      </div>
    </div>
  );
}
