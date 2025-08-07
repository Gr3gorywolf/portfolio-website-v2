import { ProjectLoader } from "@/components/ProjectLoader";
import { TopNav } from "@/components/TopNav";

export default function Loading() { 
    return (
        <>
            <TopNav />
            <ProjectLoader variant="detail" />
        </>
    );
}
