"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Book, FileText, Headphones, Video } from "lucide-react";

// const units = [
//   { name: "Reading", icon: Book },
//   { name: "Writing", icon: FileText },
//   { name: "Listening", icon: Headphones },
//   { name: "Speaking", icon: Video },
// ];
// @ts-ignore
export default function StagesNew({ stages }) {
  const [expandedModule, setExpandedModule] = useState(null);
  const [hoveredUnit, setHoveredUnit] = useState(null);

  // const modules = [
  //   {
  //     level: "Level 3a",
  //     description:
  //       "This module will teach you the basics of reading, writing and speaking English",
  //     buttonText: "Continue",
  //     isActive: true,
  //   },
  //   {
  //     level: "Level 3b",
  //     description:
  //       "This module will teach you the basics of reading, writing and speaking English",
  //     buttonText: "Finish Level 3A to Unlock",
  //     isActive: false,
  //   },
  //   {
  //     level: "Level 3b",
  //     description:
  //       "This module will teach you the basics of reading, writing and speaking English",
  //     buttonText: "Finish Level 3A to Unlock",
  //     isActive: false,
  //   },
  // ];

  
// @ts-ignore
  const toggleExpand = (index) => {
    if (stages[index].stage_completion_status === "yes") {
      setExpandedModule(expandedModule === index ? null : index);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* @ts-ignore */}
      {stages?.map((stage, index) => (
        <Card
          key={index}
          className={`rounded-lg ${stage.stage_completion_status === "yes" ? "bg-green-500" : "bg-gray-100"}`}
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle
                className={`text-lg ${
                  stage.stage_completion_status === "yes" ? "text-white" : "text-gray-900"
                }`}
              >
                {stage.stageName}
              </CardTitle>
              {stage.stage_completion_status === "yes" && (
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    expandedModule === index ? "rotate-180" : ""
                  } text-white`}
                />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p
              className={`text-sm mb-4 ${
                stage.stage_completion_status ? "text-white" : "text-gray-600"
              }`}
            >
              {stage.stageDesc}
            </p>
            <Button
              onClick={() => toggleExpand(index)}
              className={`w-full ${
                stage.stage_completion_status
                  ? "bg-white text-green-500 hover:bg-gray-100"
                  : "bg-gray-200 text-gray-500 hover:bg-gray-300 cursor-not-allowed"
              }`}
            >
              Continue
            </Button>
            <div
              className={`mt-4 grid grid-cols-2 gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedModule === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* @ts-ignore */}
              {stage?.units?.map((unit, unitIndex) => (
                <div
                  key={unitIndex}
                  className="flex items-center space-x-2 p-2 rounded-md transition-colors duration-200 ease-in-out"
                  onMouseEnter={() => setHoveredUnit(unit.unit_name)}
                  onMouseLeave={() => setHoveredUnit(null)}
                >
                  <Book
                    className={`h-6 w-6 ${
                      stage.stage_completion_status ? "text-white" : "text-gray-600"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      stage.stage_completion_status ? "text-white" : "text-gray-600"
                    } ${
                      hoveredUnit === unit.unit_name
                        ? "opacity-100 translate-x-1"
                        : "opacity-0"
                    } transition-all duration-200 ease-in-out`}
                  >
                    {unit.unit_name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
