import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Make mahdi page have a link to go back to the home page
 * Add links to each of your workout to a yt video about that workout
 * make it look semi-decent
 * maybe figure out how to add an image
 */

export default function Home() {
  const workoutPlans = [
    {
      workout: "Biceps",
      link: "https://www.youtube.com/watch?v=GNO4OtYoCYk", // Fixed link format
      exercises: [
        {
          workout: "Dumbbell Preacher Curl",
          reps: "5-8",
          notes: "go all the way up/down",
          sectionLink: "https://youtu.be/GNO4OtYoCYk?si=6RJ5qHYFBJeKejWI&t=264"
        },
        {
          workout: "Machine Preacher Curl",
          reps: "5-8",
          notes: "use bottom half of range",
          sectionLink: "https://youtu.be/GNO4OtYoCYk?si=Uj5yJYUCHS6Qaexg&t=421"
        },
        {
          workout: "Cable Curl",
          reps: "5-8",
          notes: "hold grip at shoulder width",
          sectionLink: "https://youtu.be/GNO4OtYoCYk?si=AEe9PUq7x6iz6kvL&t=612"
        },
        {
          workout: "Face Away Cable Curl",
          reps: "5-8",
          notes: "cables at hand height, take one/two steps forward",
          sectionLink: "https://youtu.be/GNO4OtYoCYk?si=Cclbr_2im3ysdz7s&t=627"
        },
        {
          workout: "Inverse Zottman Curl",
          reps: "5-8",
          notes: "hammer curl up, standard curl down",
          sectionLink: "https://youtu.be/GNO4OtYoCYk?si=Y-g8EnWoaeImKvQ3&t=866"
        },
      ],
    },
    {
      workout: "Triceps",
      link: "https://www.youtube.com/watch?v=OpRMRhr0Ycc",
      exercises: [
        {
          workout: "Overhead Cable Tricep Extension",
          reps: "5-8",
          notes: "",
          sectionLink: "https://youtu.be/OpRMRhr0Ycc?si=QOaRc8XMe-mBLE8E&t=193"
        },
        {
          workout: "Skullcrusher",
          reps: "5-8",
          notes: "use EZ bar",
          sectionLink: "https://youtu.be/OpRMRhr0Ycc?si=FCS6DQJTsV9sISLt&t=410"
        },
        {
          workout: "Overhead Cable Tricep Extension 2",
          reps: "5-8",
          notes: "",
          sectionLink: ""
        },
      ],
    },
    {
      workout: "Forearms",
      link: "https://www.youtube.com/watch?v=MfMxT_jXcPE",
      exercises: [
        {
          workout: "Exercise 1",
          reps: "6-8",
          notes: "note 1",
          sectionLink: ""
        },
        {
          workout: "Exercise 2",
          reps: "6-8",
          notes: "note 2",
          sectionLink: ""
        },
        {
          workout: "Exercise 3",
          reps: "6-8",
          notes: "note 3",
          sectionLink: ""
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col p-8">
      <h1 className="text-4xl text-center">Simple Gym Guide</h1>
      <h2 className="text-center text-3xl">Arm Workout</h2>

      <Tabs defaultValue="Biceps" className="text-xl m-auto">
        <TabsList className="text-2xl w-full">
          {workoutPlans.map(function (workoutPlan) {
            return (
              <TabsTrigger key={workoutPlan.workout} value={workoutPlan.workout}>
                {workoutPlan.workout}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {workoutPlans.map(function (workoutPlan) {
          return (
            <TabsContent key={workoutPlan.workout} value={workoutPlan.workout}>
              {/* Video link added here, displayed once per tab */}
              <p className="text-red-300 text-3xl px-5">
                <Link
                  href={workoutPlan.link}
                  className="underline text-red-500"
                >
                  Video
                </Link>
              </p>
              <br />
              {/* Mapping through exercises */}
              {workoutPlan.exercises.map((exercise) => {
                return (
                  <Workout
                    key={exercise.workout}
                    workoutName={exercise.workout}
                    repsAndSets={exercise.reps}
                    workoutNotes={exercise.notes}
                    workoutLink={exercise.sectionLink}
                  />
                );
              })}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

type WorkoutProps = {
  workoutName: string;
  repsAndSets: string;
  workoutNotes: string;
  workoutLink: string;
};

function Workout(props: WorkoutProps) {
  return (
    <><div className="bg-white p-6 rounded-lg shadow-md mx-auto w-full">
      <p className="text-gray-800 text-xl font-semibold mb-2">
        <Link target="_blank" className="hover:underline hover:text-blue-500 focus:underline focus:text-blue-500" href={props.workoutLink}>
          {props.workoutName}
        </Link>
      </p>
      <p className="text-gray-600 text-base">
        <span className="font-medium">Reps:</span> {props.repsAndSets}
      </p>
      <p className="text-gray-600 text-base">
        <span className="font-medium">Notes:</span> {props.workoutNotes}
      </p>
    </div><br /></>
  );
}