import {
  EnterpriseBoxResolver,
  EnterprisePasswordResolver,
  EnterpriseSoftwareResolver,
  EnterpriseTimeoutResolver,
} from "components/enterprise";

export function EnterpriseSettings() {
  return (
    <div className="grid grid-cols-3 md:space-x-4">
      <div className="col-span-3 md:col-span-1">
        <EnterprisePasswordResolver />
      </div>
      <div className="col-span-3 md:col-span-1">
        <EnterpriseBoxResolver />
      </div>
      <div className="col-span-3 md:col-span-1">
        <EnterpriseSoftwareResolver />
        <EnterpriseTimeoutResolver />
      </div>
    </div>
  );
}
