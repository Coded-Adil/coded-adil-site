import projects from '../../../public/projects/projects.json';

const Projects = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className="text-center font-code text-3xl lg:text-4xl font-exo font-bold">
                My Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white/20 hover:bg-gradient-to-tr from-[#1e3a8a] to-[#0f172a] hover:text-white text-center space-y-3 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/30 hover:scale-105 transition-transform"
                    >
                        <img
                            src={project.projectImage}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p className="mb-4">{project.shortDescription}</p>
                        <div className='flex justify-center items-center gap-2'>
                            <a
                                href={project.liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 btn btn-info text-white rounded-full transition"
                            >
                                Live Site
                            </a>
                            <a
                                href={project.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
