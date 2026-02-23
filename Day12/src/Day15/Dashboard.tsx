import DashboardCard from "./components/DashboardCard";
import { dashboardData } from "./data/dashboardData";

const Dashboard = () => {
	return (
		<section className='min-h-screen bg-gray-100 p-8'>
			<h1 className='mb-6 text-2xl font-bold text-gray-800'>
				Dashboard Overview
			</h1>

			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				{dashboardData.map((metric) => (
					<DashboardCard key={metric.id} metric={metric} />
				))}
			</div>
		</section>
	);
};

export default Dashboard;
