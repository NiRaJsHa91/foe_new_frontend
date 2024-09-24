
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  BookOpen,
  Mic,
  PlayCircle,
  Headphones,
  PenTool,
  Play,
} from "lucide-react";

interface Subconcept {
  subconcept_id: string;
  subconcept_desc: string;
  subconcept_type: string;
  subconcept_url: string;
  completion_status: string;
}

interface SubconceptPathProps {
  subconcepts?: Subconcept[];
}

const iconMap = {
  read: BookOpen,
  speak: Mic,
  activity: PenTool,
  video: PlayCircle,
  listen: Headphones,
};

const subConceptsArray = [
         {
          subconcept_id: "S001",
          subconcept_desc: "Read and Respond - Butterfly",
          subconcept_type: "read",
          subconcept_url: "s3://some-link",
          completion_status: "yes",
        },
         {
          subconcept_id: "S002",
          subconcept_desc: "Narrate the story in your own words",
          subconcept_type: "speak",
          subconcept_url: "s3://some-link",
          completion_status: "yes",
        },
         {
          subconcept_id: "S003",
          subconcept_desc: "Butterfly - Butterfly",
          subconcept_type: "activity",
          subconcept_url: "s3://some-link",
          completion_status: "yes",
        },
         {
          subconcept_id: "S004",
          subconcept_desc: "Video on butterflies",
          subconcept_type: "video",
          subconcept_url: "s3://some-link",
          completion_status: "yes",
        },
         {
          subconcept_id: "S005",
          subconcept_desc: "Read non-fiction",
          subconcept_type: "read",
          subconcept_url: "s3://some-link",
          completion_status: "no",
        },
         {
          subconcept_id: "S006",
          subconcept_desc: "Listen to audio clip",
          subconcept_type: "listen",
          subconcept_url: "s3://some-link",
          completion_status: "no",
        },
         {
          subconcept_id: "S007",
          subconcept_desc: "Butterfly - Match the following",
          subconcept_type: "activity",
          subconcept_url: "s3://some-link",
          completion_status: "no",
        },
    ]

export default function SubConceptsPage({
  subconcepts = subConceptsArray,
}: SubconceptPathProps) {
  const [started, setStarted] = useState(false);
  const [totalSteps, setTotalSteps] = useState(2);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setTotalSteps(subconcepts.length + 2); // Including start and end
  }, [subconcepts]);

  useEffect(() => {
    if (started) {
      setAnimationTrigger(true);
    }
  }, [started]);

  const getPath = () => {
    const width = 1000;
    const height = 400;
    const curveHeight = height / 2;
    return `M0,${curveHeight} 
            C${width / 4},0 ${width / 4},${height} ${width / 2},${curveHeight}
            C${(3 * width) / 4},0 ${
      (3 * width) / 4
    },${height} ${width},${curveHeight}`;
  };

  const getPointOnPath = (progress: number) => {
    const path = document.querySelector(".curve-path") as SVGPathElement | null;
    if (!path) return { x: 0, y: 0 };
    const length = path.getTotalLength();
    const point = path.getPointAtLength(progress * length);
    return { x: point.x, y: point.y };
  };

  return (
    <div className="w-full h-[400px] overflow-hidden relative">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={getPath()}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="4"
          className="curve-path"
        />

        {[...Array(totalSteps)].map((_, index) => {
          const point = getPointOnPath(index / (totalSteps - 1));
          const subconcept =
            index > 0 && index < totalSteps - 1 ? subconcepts[index - 1] : null;
          const Icon = subconcept
            ? iconMap[subconcept.subconcept_type as keyof typeof iconMap] ||
              PenTool
            : index === 0
            ? Play
            : CheckCircle2;
          const isCompleted =
            subconcept && subconcept.completion_status === "yes";
          const isEnabled =
            started &&
            (index === 0 ||
              subconcepts
                .slice(0, index - 1)
                .every((s) => s.completion_status === "yes"));

          return (
            <g
              key={index}
              className={`transition-transform duration-300 ease-out ${
                animationTrigger ? "scale-100" : "scale-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r="20"
                fill={
                  isEnabled ? (isCompleted ? "#4CAF50" : "#2196F3") : "#9E9E9E"
                }
                className="transition-all duration-300"
              />
              <g
                className={`transition-transform duration-300 ease-out ${
                  isEnabled ? "scale-100" : "scale-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <Icon
                  x={point.x - 12}
                  y={point.y - 12}
                  width="24"
                  height="24"
                  color="white"
                />
              </g>
              {isCompleted && (
                <g
                  className={`transition-transform duration-300 ease-out ${
                    animationTrigger ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <circle
                    cx={point.x + 12}
                    cy={point.y - 12}
                    r="8"
                    fill="#4CAF50"
                  />
                  <CheckCircle2
                    x={point.x + 8}
                    y={point.y - 16}
                    width="8"
                    height="8"
                    color="white"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {!started && (
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-90"
          onClick={() => setStarted(true)}
        >
          Start
        </button>
      )}
    </div>
  );
}
