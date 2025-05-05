import { CodeXml } from "lucide-react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full justify-center gap-4 max-2xl:flex-wrap max-md:w-full">
          <div className="grid h-fit grid-cols-1 gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pt-0 mt-5">
                <div className="flex flex-row items-center">
                  <Image
                    src="/images/profile.png"
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                  />
                  <div className="ml-4 flex flex-col gap-y-1">
                    <div className="rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors border-transparent mb-auto flex w-fit items-center justify-center gap-1 bg-red-500/20 text-red-500">
                      <span className="font-semibold">Currently Hired</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">
                      Hey, I&apos;m{" "}
                      <span className="bg-gradient-to-r from-indigo-500 to-teal-400 text-transparent bg-clip-text">
                        Jake Leigh
                      </span>
                    </h1>
                    <div className="font-semibold tet-gray-400">
                      <div className="flex flex-col gap-1 md:flex-row md:items-center">
                        <h3>
                          I&apos;m a{" "}
                          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            software engineer
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 max-md:w-full 2xl:h-fit">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-2xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
                  <CodeXml className="h-8 w-8 text-indigo-500 mr-1" />
                  Experience
                </h2>
                <p className="text-sm text-muted-foreground">
                  My experience both commercially and personally in my spare
                  time
                </p>
                <div className="mt-4 grid gap-4 grid-cols-6">
                  <Icon icon="logos:react" width="34" height="34" />
                  <Icon icon="logos:vue" width="34" height="34" />
                  <Icon icon="logos:javascript" width="34" height="34" />
                  <Icon icon="logos:typescript-icon" width="34" height="34" />
                  <Icon icon="devicon:html5" width="34" height="34" />
                  <Icon icon="devicon:css3" width="34" height="34" />
                  <Icon icon="logos:tailwindcss-icon" width="34" height="34" />
                  <Icon
                    icon="vscode-icons:file-type-scss"
                    width="34"
                    height="34"
                  />
                  <Icon
                    icon="teenyicons:nextjs-outline"
                    width="34"
                    height="34"
                  />
                  <Icon icon="logos:python" width="34" height="34" />
                  <Icon icon="devicon:nodejs" width="34" height="34" />
                  <Icon icon="lineicons:expressjs" width="34" height="34" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-fit max-w-[65vh] grid-cols-1 gap-4"></div>
        </div>
      </div>
    </main>
  );
}
