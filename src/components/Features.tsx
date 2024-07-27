import { InitTerminal } from "./InitTerminal";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";

// interface FeatureProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const features: FeatureProps[] = [
//   {
//     title: "Responsive Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image4,
//   },
//   {
//     title: "Intuitive user interface",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image3,
//   },
//   {
//     title: "AI-Powered insights",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image,
//   },
// ];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        But{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Worry no more
        </span>
      </h2>
      <div className="grid grid-cols-2 grid-cols-[1fr_1fr] gap-20">
        <InitTerminal />
        <div className="flex justify-center items-center text-3xl font-bold text-start box-border">
          <span>
            with init CLI, you can install both frontend and backend stacks at
            one{" "}
            <span className="inline bg-gradient-to-r from-[#96f5ab]  to-[#3bcf0d] text-transparent bg-clip-text">
              Go!{" "}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
