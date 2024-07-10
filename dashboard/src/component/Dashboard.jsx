import DashboardStats from './DashboardStats'
import TransactionsCharts from './TransactionsCharts'

export default function Dashboard() {
  return (
    <div className=' flex flex-col gap-4'>
      <DashboardStats/>
      <TransactionsCharts/>
    </div>
  )
}
