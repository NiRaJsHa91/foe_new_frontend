// import { useNavigate } from 'react-router-dom';
import '../Styles/Stages.css';
import Stages from './Stages';
import Leaderboard from './Leaderboard';

function Dashboard() {

  // const navigate = useNavigate();

      const getProgramInfoByCohortId = {
        userId: "user1@chippersage.com",
        program: {
          programId: "Prg_EEA_1",
          programName: "EEA Level 1",
          programDesc:
            "This is the English Ever After Course to learn basic English concepts",
          stages: [
            {
              stageid: "Prg_EEA_1_Stg_0",
              stageName: "Stage 0",
              stageDesc: "Basic info",
              units: [
                {
                  unit_id: "Unit_EEA_Read_0",
                  unit_name: "Read and Respond 0",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
                {
                  unit_id: "Unit_EEA_Read_1",
                  unit_name: "Read and Respond 1",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
                {
                  unit_id: "Unit_EEA_Read_2",
                  unit_name: "Read and Respond 2",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
                {
                  unit_id: "Unit_EEA_Read_3",
                  unit_name: "Read and Respond 3",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
              ],
              stage_completion_status: "yes",
            },
            {
              stageid: "Prg_EEA_1_Stg_1",
              stageName: "Stage 1",
              stageDesc: "Inter info",
              units: [
                {
                  unit_id: "Unit_EEA_Read_1_1",
                  unit_name: "Read and Respond 1",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
                {
                  unit_id: "Unit_EEA_Read_1_2",
                  unit_name: "Read and Respond 2",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "yes",
                },
                {
                  unit_id: "Unit_EEA_Read_1_3",
                  unit_name: "Read and Respond 3",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
                {
                  unit_id: "Unit_EEA_Read_1_4",
                  unit_name: "Read and Respond 4",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
              ],
              stage_completion_status: "no",
            },
            {
              stageid: "Prg_EEA_1_Stg_2",
              stageName: "Stage 2",
              stageDesc: "Adv info",
              units: [
                {
                  unit_id: "Unit_EEA_Read_2_0",
                  unit_name: "Read and Respond L2-0",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
                {
                  unit_id: "Unit_EEA_Read_2_1",
                  unit_name: "Read and Respond L2-1",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
                {
                  unit_id: "Unit_EEA_Read_2_2",
                  unit_name: "Read and Respond L2-2",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
                {
                  unit_id: "Unit_EEA_Read_2_3",
                  unit_name: "Read and Respond L2-3",
                  unit_desc:
                    "In this unit, you should read the lines and answer the questions that follow",
                  completion_status: "no",
                },
              ],
              stage_completion_status: "no",
            },
          ],
        },
      };

      const getLeaderBoardInfo = {
        cohortId: "Cht_Sep-24-Bhive",
        cohortName: "Sep-24-Bhive",
        userId: "user1@chippersage.com",
        leaderboard: [
          {
            userName: "Preeti",
            userId: "preeti@chippersage.com",
            total_score: 0,
          },
          {
            userName: "Rajesh",
            userId: "user1@chippersage.com",
            total_score: 12,
          },
          {
            userName: "Saanvi",
            userId: "saanvi@chippersage.com",
            total_score: 28,
          },
          {
            userName: "Shruthi",
            userId: "shruthi@chippersage.com",
            total_score: 28,
          },
          {
            userName: "Manoj",
            userId: "manoj@chippersage.com",
            total_score: 28,
          },
          {
            userName: "Nitin",
            userId: "nitin@chippersage.com",
            total_score: 28,
          },
          {
            userName: "Sid",
            userId: "sid@chippersage.com",
            total_score: 45,
          },
        ],
      };


//   const [selectedStage, setSelectedStage] = useState(null);
  
// // @ts-ignore
//   const handleStageClick = (stageid) => {
//     setSelectedStage(stageid === selectedStage ? null : stageid);
//     // setSelectedPassage(null);
//   };

  return (
    <div className="w-full flex mt-44">
      {/* @ts-ignore */}
      <Stages stages={getProgramInfoByCohortId?.program?.stages} />
      <Leaderboard {...getLeaderBoardInfo} />
    </div>
  );
}

export default Dashboard;
