import { GetStaticPaths, GetStaticProps } from "next";
import projects from "../../data/projects.json";
import ProjectDetail from "../../components/ProjectDetail";
import { Project } from "../../data/project";

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: { project: slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.project as string;
  const project = (projects as Record<string, Project>)[slug];
  return { props: { project } };
};

export default function ProjectPage({ project }: Props) {
  return (
    <main className="p-8">
      <ProjectDetail project={project} />
    </main>
  );
}
