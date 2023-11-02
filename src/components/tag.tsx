type TagProps = {
    icon: string;
    text: string;
};

const Tag: React.FC<TagProps> = ({ icon, text }) => {
    const deviconClass = `devicon-${icon}-plain`;
    return (
        <div className="flex items-center space-x-2">
            <i className={deviconClass}></i>
            <span>{text}</span>
        </div>
    );
};

export default Tag;