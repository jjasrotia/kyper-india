import Container from "@/components/common/Container";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-50 py-10">
      <Container>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Recent Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore some of our successful solar installations across Himachal Pradesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              capacity={project.capacity}
              image={project.image}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}