import AppDetails from '@/components/AppsDetaillsCard/AppsDetailsCard';
import { getAllApps } from '@/lib/apps';
import { TAppsTypes } from '@/Types/Types';

type TAppsParams = {
  params: {
    id: string;
  };
};
const AppsDetailsPage = async ({ params }: TAppsParams) => {
  const { id } = await params;
  const allApps = await getAllApps();
  const app = allApps.find((app:TAppsTypes) => app.id === parseInt(id));
  return <div>{app && <AppDetails app={app} />}</div>;
};

export default AppsDetailsPage;
