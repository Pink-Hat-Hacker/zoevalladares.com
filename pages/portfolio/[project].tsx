import { GetStaticPaths, GetStaticProps } from "next";
import projects from "../../data/projects.json";
import ProjectDetail from "../../components/ProjectDetail";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: { project: slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.project as string;
  const project = (projects as any)[slug];
  return { props: { project } };
};

export default function ProjectPage({ project }: { project: any }) {
  return (
    <main className="p-8">
      <ProjectDetail {...project} />
    </main>
  );
}
