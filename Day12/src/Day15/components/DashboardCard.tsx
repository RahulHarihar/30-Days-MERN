import type { DashboardMetric } from "../data/dashboardData";

interface DashboardCardProps {
	metric: DashboardMetric;
}

const DashboardCard = ({ metric }: DashboardCardProps) => {
	return (
		<div className='rounded-xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'>
			<h3 className='text-sm font-medium text-gray-500'>{metric.title}</h3>

			<p className='mt-2 text-2xl font-bold text-gray-900'>{metric.value}</p>

			{metric.description && (
				<p className='mt-1 text-sm text-gray-400'>{metric.description}</p>
			)}
		</div>
	);
};

export default DashboardCard;
