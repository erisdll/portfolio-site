export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate software developer with a strong background in Java and web development. I love creating
              robust, scalable applications that solve real-world problems.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-darkred">My Journey</h3>
              <p className="text-muted-foreground">
                I started my journey in tech when I was in college, where I discovered my passion for coding. Since
                then, I've worked on various projects, from small applications to complex enterprise systems, always
                striving to learn new technologies and improve my skills.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-darkred">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and creating robust, scalable systems. I'm always looking
                for ways to optimize performance and make applications more reliable and secure.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-darkred">Education</h3>
              <p className="text-muted-foreground">
                Bachelor's Degree in Computer Science
                <br />
                University Name, 2018-2022
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-darkred">Experience</h3>
              <p className="text-muted-foreground">
                <strong>Senior Developer</strong> - Company Name
                <br />
                2022 - Present
                <br />
                <br />
                <strong>Junior Developer</strong> - Company Name
                <br />
                2020 - 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
