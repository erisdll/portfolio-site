export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
      aria-label="About Erika Mello"
    >
      <div className="px-4 md:px-6 mx-auto w-full max-w-[1400px] space-y-20">
        <header className="text-center space-y-4 mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-darkred">{">"}</span>whoami
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate software developer with a strong background in Java and backend development.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col space-y-8">
            <article className="space-y-3 text-justify">
              <h3 className="text-xl font-semibold text-darkred">My Journey</h3>
              <p className="text-muted-foreground">
                I started my journey in tech during college, where I discovered my passion for coding. Since then, I've
                worked on various projects — from small apps to complex systems — always seeking to learn and grow.
              </p>
            </article>

            <article className="space-y-3 text-justify">
              <h3 className="text-xl font-semibold text-darkred">My Approach</h3>
              <p className="text-muted-foreground">
                I value systemic thinking, structured design, and technical precision. I strive to deliver the best solution for each problem — even if it means going beyond what’s initially expected.
              </p>
              <p className="text-muted-foreground">
                My focus is on building robust, secure, well-documented and performant systems, while keeping a clean codebase that is readable, and easy for others to maintain.
              </p>
            </article>
          </div>

          <div className="flex flex-col space-y-8">

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Software Development Intern</strong> — Akross <br />
                2024 – Present
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Freelancer </strong> — Company Name<br />
                2023 – 2024
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Bachelor's Degree in Computer Science</strong>
                <br />
                Estácio de Sá, 2023-2027 {"(ongoing)"}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Backend Development Bootcamp</strong>
                <br />
                Reprograma, 2023
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}
