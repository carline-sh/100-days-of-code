import { useQuery } from "@tanstack/react-query";
import galaxy from "../public/galaxy.jpg";

type SpaceXMission = {
  mission_name: string;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
};

export const getSpacexlaunches = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/missions");
  const data = await response.json();
  return data as SpaceXMission[];
};

export const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["spacex-missions"],
    queryFn: getSpacexlaunches,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <img
        src={galaxy}
        alt="Galaxy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl p-4 relative z-10">
        <div className="text-2xl font-bold text-white my-4">
          Here are some SpaceX missions:
        </div>
        <ul className="space-y-2">
          {data?.map((mission) => (
            <li
              className="border p-2 rounded-md bg-white/50 backdrop-blur-sm"
              key={mission.mission_id}
            >
              <div className="flex items-center gap-2 justify-between">
                <h2 className="font-bold">{mission.mission_name}</h2>
                <div>{mission.mission_id}</div>
              </div>
              <p className="text-sm">{mission.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
