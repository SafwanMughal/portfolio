const AboutSection: React.FC = () => {
    return (
      <section id="about" className="bg-black text-lightBlue py-16 px-10 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Hi, I&apos;m Safwan Mughal, a passionate web developer with a focus on frontend technologies. I specialize in creating responsive, user-friendly websites and web applications that perform seamlessly across devices.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I have experience working with various web technologies, including <span className="font-semibold">TypeScript</span>, <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, and <span className="font-semibold">Next.js</span>. My goal is to build beautiful, fast, and intuitive websites that leave a lasting impression on users.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Currently, I&apos;m working on improving my skills in modern frameworks like <span className="font-semibold">Next.js</span> and exploring the world of web performance optimization. I&apos;m constantly learning and staying up-to-date with the latest trends and best practices in web development.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  