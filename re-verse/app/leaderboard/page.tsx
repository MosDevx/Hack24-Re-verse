//  we need to get a list of user and apoint username and acount

//loop throught the list ...render user and score

import { UserProfileCard } from "@/components/ui/user-profile-card";




export default function Home() {

  return (

<>
	<h1 style={{ textAlign: 'center', fontSize: '3rem' }}>LeaderBoard</h1>
	<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
		{userProfiles.map((user, index) => (
			<UserProfileCard
				key={index}
				name={user.name}
				points={user.points}
				profilePicUrl={user.profilePicUrl}
			/>
		))}
	</div>
</>
  );
}

const userProfiles = [
	{
		profilePicUrl: "https://example.com/user1.jpg",
		name: "User 1",
		points: 150,
	},
	{
		profilePicUrl: "https://example.com/user2.jpg",
		name: "User 2",
		points: 200,
	},
	{
		profilePicUrl: "https://example.com/user3.jpg",
		name: "User 3",
		points: 250,
	},
	{
		profilePicUrl: "https://example.com/user4.jpg",
		name: "User 4",
		points: 300,
	},
	{
		profilePicUrl: "https://example.com/user5.jpg",
		name: "User 5",
		points: 350,
	},
];