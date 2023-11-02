import Image from 'next/image';
import Tag from './tag'; 

type ProjectProps = {
  imageSrc: string;
  title: string;
  description: string;
  technologies: { text: string; icon: string }[];
  githubLink?: string; // GitHub link
  externalLink?: string; // External link
};

const Project: React.FC<ProjectProps> = ({ imageSrc, title, description, technologies, githubLink, externalLink }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
      <div className="relative h-80 w-full mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" className="rounded-lg" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex-grow"></div>
      <div className="flex flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 rounded-full py-1 px-3 text-sm mr-2 mb-2">
            <Tag key={index} icon={tech.icon} text={tech.text} />
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-4">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
            <Image src="/images/github.svg" alt="GitHub Link" width={32} height={32} />
          </a>
        )}
        {externalLink && (
          <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
            <Image src="/images/link.svg" alt="External Link" width={40} height={40} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
