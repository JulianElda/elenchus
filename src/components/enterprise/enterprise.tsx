import EnterpriseBoxResolver from "./enterprise-box-resolver";
import EnterprisePasswordResolver from "./enterprise-password-resolver";
import EnterpriseSoftwareResolver from "./enterprise-software-resolver";
import EnterpriseTimeoutResolver from "./enterprise-timeout-resolver";

export default function EnterpriseSettings() {
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
