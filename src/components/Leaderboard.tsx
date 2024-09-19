// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Avatar from "./Avatar";
import avatar_icon from "../assets/icons/avatar_icon.svg";
// @ts-ignore
export default function Leaderboard({ cohortId, userId, leaderboard, cohortName }) {
  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.total_score - a.total_score
  );
  const top3 = sortedLeaderboard.slice(0, 3);
//   @ts-ignore
  const currentUser = leaderboard.find((entry) => entry.userId === userId);
   const currentUserRank = sortedLeaderboard.findIndex((entry) => entry.userId === userId) + 1;

  return (
    // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader>
    //     <CardTitle className="text-2xl font-bold text-center">
    //         Leaderboard
    //     </CardTitle>
    //     <p className="text-center text-muted-foreground">{cohortName}</p>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-6 flex flex-col">
    //       <div className="flex justify-between items-end">
    //         {top3.map((entry, index) => (
    //           <div key={entry.userId} className="flex flex-col items-center">
    //             {/* <Avatar className="w-16 h-16 border-4 border-primary">
    //               <AvatarFallback>{entry.userName[0]}</AvatarFallback>
    //             </Avatar> */}
    //             <div className="mt-2 text-center">
    //               <div className="font-semibold">{entry.userName}</div>
    //               <div className="text-2xl font-bold">{entry.total_score}</div>
    //             </div>
    //             <div className="text-4xl font-bold mt-2">{index + 1}</div>
    //           </div>
    //         ))}
    //       </div>
    //       {currentUser && currentUser.rank > 3 && (
    //         <div className="mt-4 p-4 bg-muted rounded-lg flex items-center justify-between">
    //           <div className="flex items-center">
    //             <Avatar className="w-10 h-10 mr-4">
    //               <AvatarFallback>{currentUser.userName[0]}</AvatarFallback>
    //             </Avatar>
    //             <div>
    //               <div className="font-semibold">{currentUser.userName}</div>
    //               <div className="text-sm text-muted-foreground">You</div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-2xl font-bold">
    //               {currentUser.total_score}
    //             </div>
    //             <div className="text-sm text-muted-foreground">
    //               Rank {currentUser.rank}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </CardContent>
    // </Card>

    // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader className="text-center">
    //     <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
    //     <p className="text-muted-foreground">{cohortName}</p>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-4">
    //       {top3.map((entry, index) => (
    //         <div
    //           key={entry.userId}
    //           className={`flex justify-between items-center py-2 ${
    //             index === currentUser.rank - 1 ? "bg-blue-100 rounded-lg" : ""
    //           }`}
    //         >
    //           <div className="flex items-center">
    //             {/* Avatar Section */}
    //             <Avatar
    //               src={avatar_icon}
    //             //   size="w-16 h-16" // Larger size for the top 3 users
    //             />
    //             <div>
    //               <div className="font-semibold text-primary">
    //                 {entry.userName}
    //               </div>
    //               <div className="text-xs text-muted-foreground">
    //                 {entry.rank} {entry.rank === 1 ? "Squirrel" : "Salamander"}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-xl font-bold">
    //               {entry.total_score} Points
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </CardContent>
    // </Card>

    // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader className="text-center">
    //     <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
    //     <p className="text-muted-foreground">{cohortName}</p>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-4">
    //       {/* Display top 3 performers */}
    //       {top3.map((entry, index) => (
    //         <div
    //           key={entry.userId}
    //           className={`flex justify-between items-center py-2`}
    //         >
    //           <div className="flex items-center">
    //             {/* Avatar Section */}
    //             <Avatar src={avatar_icon} />
    //             <div>
    //               <div className="font-semibold text-primary">
    //                 {entry.userName}
    //               </div>
    //               <div className="text-xs text-muted-foreground">
    //                 {index + 1 === 1 ? "Squirrel" : "Salamander"}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-xl font-bold">
    //               {entry.total_score} Points
    //             </div>
    //           </div>
    //         </div>
    //       ))}

    //       {/* If current user is not in top 3, display them after top 3 with special effect */}
    //       {currentUserRank > 3 && (
    //         <div
    //           className={`flex justify-between items-center py-2 bg-blue-100 rounded-lg`}
    //         >
    //           <div className="flex items-center">
    //             <Avatar src={avatar_icon} />
    //             <div>
    //               <div className="font-semibold text-primary">
    //                 {currentUser.userName}
    //               </div>
    //               <div className="text-xs text-muted-foreground">You</div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-xl font-bold">
    //               {currentUser.total_score} Points
    //             </div>
    //             <div className="text-sm text-muted-foreground">
    //               Rank {currentUserRank}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </CardContent>
    // </Card>

    // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader className="text-center">
    //     <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
    //     <p className="text-muted-foreground">{cohortName}</p>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-4">
    //       {/* Display top 3 performers */}
    //       {top3.map((entry, index) => (
    //         <div
    //           key={entry.userId}
    //           className={`flex justify-between items-center py-2 ${
    //             entry.userId === currentUser.userId
    //               ? "bg-blue-100 rounded-lg shadow-lg"
    //               : ""
    //           }`}
    //         >
    //           <div className="flex items-center">
    //             {/* Avatar Section */}
    //             <Avatar src={avatar_icon} />
    //             <div>
    //               <div className="font-semibold text-primary">
    //                 {entry.userName}
    //               </div>
    //               <div className="text-xs text-muted-foreground">
    //                 {index + 1 === 1 ? "Squirrel" : "Salamander"}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-xl font-bold">
    //               {entry.total_score} Points
    //             </div>
    //           </div>
    //         </div>
    //       ))}

    //       {/* If current user is not in top 3, display them after top 3 with special effect */}
    //       {currentUserRank > 3 && (
    //         <div
    //           className={`flex justify-between items-center py-2 bg-blue-100 rounded-lg shadow-lg`}
    //         >
    //           <div className="flex items-center">
    //             <Avatar src={avatar_icon} />
    //             <div>
    //               <div className="font-semibold text-primary">
    //                 {currentUser.userName}
    //               </div>
    //               <div className="text-xs text-muted-foreground">You</div>
    //             </div>
    //           </div>
    //           <div className="text-right">
    //             <div className="text-xl font-bold">
    //               {currentUser.total_score} Points
    //             </div>
    //             <div className="text-sm text-muted-foreground">
    //               Rank {currentUserRank}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </CardContent>
    // </Card>

    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
        <p className="text-muted-foreground">{cohortName}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Display top 3 performers with serial number */}
          {top3.map((entry, index) => (
            <div
              key={entry.userId}
              className={`flex justify-between items-center py-2 ${
                entry.userId === currentUser.userId
                  ? "bg-blue-100 rounded-lg shadow-lg"
                  : ""
              }`}
            >
              <div className="flex items-center">
                {/* Serial Number */}
                <div className="font-bold text-lg mr-4">{index + 1}.</div>

                {/* Avatar Section */}
                <Avatar src={avatar_icon} />
                <div className="ml-2">
                  <div className="font-semibold text-primary">
                    {entry.userName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {index + 1 === 1 ? "Squirrel" : "Salamander"}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">
                  {entry.total_score} Points
                </div>
              </div>
            </div>
          ))}

          {/* If current user is not in top 3, display them after top 3 with special effect */}
          {currentUserRank > 3 && (
            <div
              className={`flex justify-between items-center py-2 bg-blue-100 rounded-lg shadow-lg`}
            >
              <div className="flex items-center">
                {/* Serial Number for current user */}
                {/* <div className="font-bold text-lg mr-4">{currentUserRank}.</div> */}

                <Avatar src={avatar_icon} />
                <div className="ml-2">
                  <div className="font-semibold text-primary">
                    {currentUser.userName}
                  </div>
                  <div className="text-xs text-muted-foreground">You</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">
                  {currentUser.total_score} Points
                </div>
                <div className="text-sm text-muted-foreground">
                  Rank {currentUserRank}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
