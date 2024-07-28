// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";s
import { BigTerminal } from "./BigTerminal";

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 sm:py-32 ">
      <h2 className="text-3xl text-center md:text-4xl font-bold pb-5 mb-10">
        It's always been a{" "}
        <span className="bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
          PAIN
        </span>{" "}
        to create projects using<br></br> multiple tech stacks.{" "}
        {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span> */}
      </h2>
      {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div> */}
      <div className="grid grid-cols-2 grid-cols-[1fr_1fr] gap-20">
        <BigTerminal />
        <p className="flex justify-center items-center text-3xl font-bold text-end box-border">
          Setting up a development environment is complex and time-consuming due
          to multiple installation commands.
        </p>
      </div>
    </section>
  );
};
