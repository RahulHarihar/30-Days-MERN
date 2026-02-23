export interface DashboardMetric {
	id: number;
	title: string;
	value: string | number;
	description?: string;
}

export const dashboardData: DashboardMetric[] = [
	{
		id: 1,
		title: "Total Users",
		value: 1240,
		description: "Registered platform users",
	},
	{
		id: 2,
		title: "Revenue",
		value: "₹4,85,000",
		description: "This month",
	},
	{
		id: 3,
		title: "Active Tasks",
		value: 32,
		description: "Currently in progress",
	},
	{
		id: 4,
		title: "System Status",
		value: "Healthy",
		description: "All services operational",
	},
];
