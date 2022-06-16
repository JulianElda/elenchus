import {
  EnterpriseBoxResolver,
  EnterprisePasswordResolver,
  EnterpriseSoftwareResolver,
  EnterpriseTimeoutResolver,
} from "components/enterprise";

export function EnterpriseSettings() {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-12">
        <EnterprisePasswordResolver />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <EnterpriseBoxResolver />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <EnterpriseSoftwareResolver />
        <EnterpriseTimeoutResolver />
      </div>
    </div>
  );
}
