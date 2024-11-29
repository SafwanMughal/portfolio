const SkillsSection: React.FC = () => {
    return (
      <section id="skills" className="p-10 bg-black text-lightBlue">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-darkBlue p-4 rounded">
            <h3 className="text-xl">TypeScript</h3>
          </div>
          <div className="bg-darkBlue p-4 rounded">
            <h3 className="text-xl">HTML</h3>
          </div>
          <div className="bg-darkBlue p-4 rounded">
            <h3 className="text-xl">CSS</h3>
          </div>
          <div className="bg-darkBlue p-4 rounded">
            <h3 className="text-xl">Next.js</h3>
            <p className="text-sm">In Progress</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  