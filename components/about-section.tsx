export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
      aria-label="About Erika Mello"
    >
      <div className="px-4 md:px-6 mx-auto w-full max-w-[1400px] space-y-20">
        {/* Título e descrição */}
        <header className="text-center space-y-4 mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-darkred">{">"}</span>whoami
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate software developer with a strong background in Java and web development. I love creating
            robust, scalable applications that solve real-world problems.
          </p>
        </header>

        {/* Conteúdo em duas colunas mais amplas */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Coluna 1 */}
          <div className="flex flex-col space-y-8">
            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">My Journey</h3>
              <p className="text-muted-foreground">
                I started my journey in tech during college, where I discovered my passion for coding. Since then, I've
                worked on various projects — from small apps to complex enterprise systems — always seeking to learn and grow.
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and designing resilient, scalable systems. My focus is on
                performance, reliability, and security — building software that endures.
              </p>
            </article>
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col space-y-8">
            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Bachelor's Degree in Computer Science</strong>
                <br />
                University Name, 2018–2022
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-darkred">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Senior Developer</strong> — Company Name<br />
                2022 – Present
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Junior Developer</strong> — Company Name<br />
                2020 – 2022
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
