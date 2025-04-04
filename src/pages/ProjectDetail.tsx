import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, SparklesIcon, ClockIcon, CheckCircleIcon, PhotoIcon } from '@heroicons/react/24/outline';

// Import the projects data
import { projects } from './Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!project) {
    return (
      <div className="min-h-screen section-padding pt-24">
        <div className="container-width text-center">
          <h1 className="heading-1">Project Not Found</h1>
          <Link to="/projects" className="text-secondary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen section-padding pt-24">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-textSecondary hover:text-secondary mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Header */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h1 className="heading-1 mb-4">{project.title}</h1>
                  <p className="text-textSecondary text-lg mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary/10 text-secondary px-6 py-3 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-tertiary"
                  />
                </div>
              </div>

              {/* Photo Gallery Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                  <PhotoIcon className="w-6 h-6 text-secondary" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{image.alt}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="prose prose-invert max-w-none">
                <h2>Project Overview</h2>
                <p>{project.overview}</p>

                <h2>Key Features</h2>
                <ul>
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h2>Technical Implementation</h2>
                <p>{project.technicalImplementation}</p>

                <h2>Results & Impact</h2>
                <p>{project.resultsAndImpact}</p>
              </div>
            </div>

            {/* Current Updates Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-tertiary rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-secondary" />
                    Current Updates
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Latest Update */}
                    <div className="relative pl-6 border-l-2 border-secondary">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -ml-2" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <ClockIcon className="w-4 h-4" />
                          <span>Latest Update</span>
                        </div>
                        <p className="text-textPrimary">{project.currentUpdates.latest.title}</p>
                        <span className="text-sm text-textSecondary">{project.currentUpdates.latest.date}</span>
                      </div>
                    </div>

                    {/* Recent Updates */}
                    <div className="space-y-4">
                      {project.currentUpdates.recent.map((update, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-secondary mt-1" />
                          <div>
                            <p className="text-textPrimary">{update.title}</p>
                            <span className="text-sm text-textSecondary">{update.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Coming Soon */}
                    <div className="pt-4 border-t border-primary/20">
                      <h3 className="text-lg font-medium text-textPrimary mb-3">Coming Soon</h3>
                      <ul className="space-y-2">
                        {project.currentUpdates.comingSoon.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-textSecondary">
                            <span className="w-2 h-2 bg-secondary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail; 