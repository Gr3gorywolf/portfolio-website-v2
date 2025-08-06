import { ProjectLoader } from "@/components/ProjectLoader";
import { TopNav } from "@/components/TopNav";
import { projects } from "@/data/projects";

export default function Loading({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params?.id);
    const projectColor = project?.accentColor;

    return (
        <>
            <TopNav />
            <ProjectLoader variant="detail" color={projectColor} />
        </>
    );
}
